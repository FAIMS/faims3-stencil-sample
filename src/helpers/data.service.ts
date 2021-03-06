//import { Capacitor } from '@capacitor/core';
import PouchDB from 'pouchdb';
//import PouchAdaptorCordovaSqlite from 'pouchdb-adapter-cordova-sqlite';

// if (Capacitor.getPlatform()  !== 'web') {
//     PouchDB.plugin(PouchAdaptorCordovaSqlite);
// }
interface ApplicationSchema {
    title: string,
    localDB: string,
    remoteDB: string,
    sequence: Array<string>,
    [propName: string]: any;
}

let localDB:PouchDB.Database
let remoteDB:PouchDB.Database
let selectedSchema: ApplicationSchema
let schemaDB:PouchDB.Database


let localPouchDBOptions = {}
let remotePouchDBOptions = {};
// if (Capacitor.getPlatform()  !== 'web') {
//     localPouchDBOptions = {
//         adapter: 'cordova-sqlite',
//         location: 'default'
//     };
// }

const schemaDBConnect = () => {
    const dbURL = "https://couchdb.stevecassidy.net/schema"
 
    schemaDB = new PouchDB("schema", localPouchDBOptions)
    const schemaDBRemote = new PouchDB(dbURL, remotePouchDBOptions)
    // get data from remote
    schemaDB.replicate.from(schemaDBRemote)

    return schemaDB
}

// interface for fetching schema records from PouchDB
const listSchema = () => {
    return schemaDB.allDocs({include_docs: true})
             .then(result => {
                 return result.rows.map(el => el.doc)})
}

const getSchema = (id:string) => {
    return schemaDB.get<ApplicationSchema>(id)
}

// Connecting to the application database

const createDB = (schemaid:string) => {

    getSchema(schemaid)
    .then((schema: ApplicationSchema) => {
        selectedSchema = schema
        localDB = new PouchDB(schema.localDB, localPouchDBOptions)
        if (schema.remoteDB) {
            remoteDB = new PouchDB(schema.remoteDB, remotePouchDBOptions)
            localDB.sync(remoteDB, {live: true, retry: true})
                .on('change', (change) => {
                    const event = new Event('dataUpdated')
                    window.dispatchEvent(event)
                })
                .on('error', (err) => {
                    console.log("DB ERROR", err)
                })
        }
        
    })
}

const getSelectedSchema = () => {
    return selectedSchema
}

const storeRecord = (record: any) => {
    if (localDB) {
        record._id = new Date().toISOString()
        console.log("Storing", record)
        localDB.put(record).then(r => console.log("Stored", r))
    }
}

const listRecords = () => {
    return localDB.allDocs({include_docs: true})
             .then(result => {
                 return result.rows.map(el => el.doc)})
}

const getRecord = (id:string) => {
    return localDB.get(id)
}


export default {getSelectedSchema, schemaDBConnect, listSchema, getSchema,
                createDB, storeRecord, listRecords, getRecord}


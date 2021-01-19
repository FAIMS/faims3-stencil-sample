import { Component, State, h } from '@stencil/core';
import dataService from '../../helpers/data.service';

@Component({
  tag: 'app-listobservations',
  styleUrl: 'app-listobservations.css',
})
export class AppListObs {

  @State() observations = [];

  connectedCallback() {
    console.log("AppListObs.connectedCallback")
    dataService.listRecords()
      .then((obs) => {
        this.observations = obs;
        console.log("Observations: ", obs);
      })
  }

  render() {

    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Observations</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-list>
        {this.observations.map((obs) => {
          return (<ion-item><ion-label>{obs.location}</ion-label>
                  {obs.tree_height}m | {obs.wind} wind</ion-item>)
        })}
        </ion-list>
      </ion-content>,
    ];
  }
}

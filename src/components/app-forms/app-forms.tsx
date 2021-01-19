import { Component, h } from '@stencil/core';
import dataService from '../../helpers/data.service';

@Component({
  tag: 'app-forms',
  styleUrl: 'app-forms.css',
})
export class AppForms {

  onSubmit() {
    console.log("submitting...")
    const form = document.forms[0];

    const record = {
      location: form.elements['location'].value,
      wind: form.elements['wind'].value,
      tree_height: form.elements['tree_height'].value,
      bark_texture: form.elements['bark_texture'].value
    }
    dataService.storeRecord(record)

    console.log(record);  
    document.querySelector('ion-router').componentOnReady().then(router => {
      router.push('/observations');
  });
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Form</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <form id="observation-form">
        <ion-item>
          <ion-label>Location</ion-label>
          <ion-input name="location" placeholder="eg. Epping"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Wind Strength</ion-label>
          <ion-select name="wind" placeholder="Select One">
            <ion-select-option value="none">None</ion-select-option>
            <ion-select-option value="light">Light</ion-select-option>
            <ion-select-option value="medium">Medium</ion-select-option>
            <ion-select-option value="strong">Strong</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Tree Height</ion-label>
          <ion-input type="number" name="tree_height"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Bark Texture</ion-label>
          <ion-select name="bark_texture" placeholder="Select One">
            <ion-select-option value="smooth">Smooth</ion-select-option>
            <ion-select-option value="peeling">Peeling</ion-select-option>
            <ion-select-option value="crinkles">Crinkles</ion-select-option>
            <ion-select-option value="furry">Furry</ion-select-option>
            <ion-select-option value="spotty">Spotty</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-button color="primary" onClick={this.onSubmit}>Submit</ion-button>
        </form>  
      </ion-content>,
    ];
  }
}

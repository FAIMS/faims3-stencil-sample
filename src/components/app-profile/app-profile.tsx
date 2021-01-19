import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
 
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>About FAIMS</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-img src="/assets/faims-logo.png"></ion-img>

        <p>This is a prototype for the FAIMS3 project
          built with the Ionic Stencil library. 
        </p>
      </ion-content>,
    ];
  }
}

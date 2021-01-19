import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button href="/forms" expand="block">
          Enter Observation
        </ion-button>
        <ion-button href="/observations" expand="block">
          List Observations
        </ion-button>
        <ion-button href="/about" expand="block">
          About FAIMS3
        </ion-button>

        <ion-img src="/assets/faims-logo.png"></ion-img>
      </ion-content>,
    ];
  }
}

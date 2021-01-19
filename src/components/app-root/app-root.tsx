import { Component, h } from '@stencil/core';
import dataService from '../../helpers/data.service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})

export class AppRoot {


  connectedCallback() {
    dataService.schemaDBConnect();
    const schemaid = 'd765e5721d5eb6445c3eb4d985002b56';

    dataService.createDB(schemaid)
  
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/forms" component="app-forms" />
          <ion-route url="/observations" component="app-listobservations" />
          <ion-route url="/about" component="app-profile" />
        </ion-router>

        <ion-nav />

      </ion-app>
    );
  }
}

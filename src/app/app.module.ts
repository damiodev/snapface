import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common'; // Importe la fonction registerLocaleData qui permet d'enregistrer une locale
import * as fr from '@angular/common/locales/fr'; // Importe la locale fr

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' } // Ajoute la locale fr-FR
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
      registerLocaleData(fr.default); // Enregistre la locale fr
    }
 }

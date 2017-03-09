import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from 'angular2-google-maps/core'

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHhQIiGXpOyrHejfUx5PyzrDPnjerGFo',
      libraries: ['geometry']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

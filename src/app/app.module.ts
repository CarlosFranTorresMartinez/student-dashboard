import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeModule} from "./module/home.module";

@NgModule({

  imports: [
    BrowserModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

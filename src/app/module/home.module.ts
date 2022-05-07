import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from "../core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PrimeAngularModule} from "./prime-angular.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({

  declarations: [],
  imports: [
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule {
}

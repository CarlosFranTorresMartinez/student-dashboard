import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PrimeAngularModule} from "./prime-angular.module";
import {NavbarComponent} from './components/navbar/navbar.component';
import {StudentListComponent} from './components/student/student-list/student-list.component';
import {AppRoutingModule} from './app-routing.module';
import {StudentPageComponent} from './pages/student-page/student-page.component';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {HttpClientModule} from "@angular/common/http";
import {StudentFormComponent} from './components/student/student-form/student-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentListComponent,
    StudentPageComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    PrimeAngularModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CdkVirtualScrollViewport],
  bootstrap: [AppComponent]
})
export class AppModule {
}

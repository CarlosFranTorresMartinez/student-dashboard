import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from './app-routing.module';

import {NavbarComponent} from './components/navbar/navbar.component';
import {StudentComponent} from './components/student/student-list/student.component';
import {HomeComponent} from './components/home/home.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentComponent,
    HomeComponent,
    StudentPageComponent,
    LoadingComponent,
    SnackBarComponent,
    StudentFormComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

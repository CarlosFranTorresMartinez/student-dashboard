import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {PrimengModule} from "./primeng.module";
import {FormStudentComponent} from './components/form-student/form-student.component';
import {FormMonitorComponent} from './components/form-monitor/form-monitor.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import { AssignComponent } from './components/assign/assign.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormStudentComponent,
    FormMonitorComponent,
    HomeComponent,
    AssignComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PrimengModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthModule.forRoot({
            domain: 'dev-7mqz38hr.us.auth0.com',
            clientId: '211yAyBtcZXswWcsOoes8UUGvjp3YC9Q',
            cacheLocation: 'localstorage',
            useRefreshTokens: true,
        }),
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

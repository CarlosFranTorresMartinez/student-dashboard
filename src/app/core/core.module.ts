import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from "../app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {HomeComponent} from "./home/home.component";
import {ListStudentComponent} from "./student/list-student/list-student.component";
import {FormStudentComponent} from "./student/form-student/form-student.component";
import {PageStudentComponent} from "./student/page-student/page-student.component";
import {PrimeAngularModule} from "../module/prime-angular.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListStudentComponent,
    FormStudentComponent,
    PageStudentComponent
  ],
  exports: [
    PrimeAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CdkVirtualScrollViewport],
})
export class CoreModule {
}

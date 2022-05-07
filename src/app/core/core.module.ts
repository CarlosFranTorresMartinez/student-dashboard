import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNavbarComponent} from "./navbar/page-navbar/page-navbar.component";
import {FormStudentComponent} from "./student/form-student/form-student.component";
import {ListStudentComponent} from "./student/list-student/list-student.component";
import {PageStudentComponent} from "./student/page-student/page-student.component";
import {PrimengModule} from "./primeng.module";
import {PageHomeComponent} from "./home/page-home/page-home.component";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PageNavbarComponent,
    FormStudentComponent,
    ListStudentComponent,
    PageStudentComponent,
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNavbarComponent,
    FormStudentComponent,
    ListStudentComponent,
    PageStudentComponent,
    PageHomeComponent
  ],
  providers: [CdkVirtualScrollViewport],
})
export class CoreModule {
}

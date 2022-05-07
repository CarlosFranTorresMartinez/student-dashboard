import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageStudentComponent} from "../core/student/page-student/page-student.component";

const router: Routes = [
  {
    path: 'student', children: [
      {path: '', component: PageStudentComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

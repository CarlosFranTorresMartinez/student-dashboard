import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {StudentFormComponent} from "./components/student/student-form/student-form.component";

const router: Routes = [
  {
    path: 'student', children: [
      {path: '', component: StudentPageComponent},
      {path: 'student-create', component: StudentFormComponent}
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

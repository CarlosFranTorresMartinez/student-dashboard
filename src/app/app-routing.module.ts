import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {AssingPageComponent} from "./pages/assing-page/assing-page.component";

const router: Routes = [
  {
    path: 'student', children: [
      {path: '', component: StudentPageComponent}
    ]
  },
  {
    path: 'assing', children: [
      {path: '', component: AssingPageComponent}
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

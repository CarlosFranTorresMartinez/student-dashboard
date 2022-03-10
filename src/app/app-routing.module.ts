import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {StudentFormComponent} from "./components/student/student-form/student-form.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'student', children: [
      {path: '', component: StudentPageComponent},
      {path: 'student-create', component: StudentFormComponent},
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

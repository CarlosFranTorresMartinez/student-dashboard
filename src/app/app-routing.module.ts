import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./auth.guard";
import {AssignComponent} from "./components/assign/assign.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {TutoriadosComponent} from "./components/tutoriados/tutoriados.component";
import {TutoriasComponent} from "./components/tutorias/tutorias.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: 'assing', component: AssignComponent, outlet: "page"},
      {path: 'tutoriados', component: TutoriadosComponent, outlet: "page"},
      {path: 'tutorias', component: TutoriasComponent, outlet: "page"},
    ]
  },
  {path: 'loading', component: LoadingComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

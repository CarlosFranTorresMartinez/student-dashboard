import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthService} from '@auth0/auth0-angular';
import {TutorService} from "./services/tutor.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  exist!: boolean;

  constructor(private auth: AuthService, private router: Router, private monitorService: TutorService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
    return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        this.auth.user$.subscribe(user => {
          this.monitorService.validateMonitor(user?.email).subscribe({
            next: tutor => (user?.email === tutor.email) && loggedIn,
            error: err => this.auth.logout(),
          })
        })
      }),
    );
  }

}

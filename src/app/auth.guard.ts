import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthService} from '@auth0/auth0-angular';
import {MonitorService} from "./services/monitor.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private monitorService: MonitorService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean {

    return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        this.auth.user$.subscribe(user => {
          this.monitorService.validateMonitor(user?.email)
            .subscribe({
                next: (monitor) => {
                  if (monitor && loggedIn) {
                    console.log("Puede pasar");
                  } else {
                    console.log('No autorizado');
                    this.router.navigate(['/login']);
                  }
                }
              }
            );
        });
      }),
    );
  }

}

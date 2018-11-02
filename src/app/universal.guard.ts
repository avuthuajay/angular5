import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<LogoutComponent> {

  canDeactivate(component: LogoutComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot):
    boolean {
      const url = currentRoute.url;
      console.log(url);
      const prevURL = currentState.url;
      const result = window.confirm('Are you sure');
      console.log(prevURL);
      if(!result){
        this.router.navigate([url]);
      }
    return result;
  }

  constructor(private router: Router) {
    console.log('constructor called in universal guard');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let allow = false;
    if (sessionStorage.getItem('logged') == 'true') {
      allow = true;
    } else {
      this.router.navigate(['/login', 'Logger User can ccess this page']);
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean | UrlTree {
      console.log('canActivate on' + route.url);
      if(!this.authService.isUserLoggedIn()){
        alert('You are not allowed to View this page. You are redirected to login page');
        this.route.navigate(['login'], {queryParams: {retUrl: route.url}});
        return false;
      };
    return true;
  }
  constructor(private authService: AuthService,private route: Router){

  }
  
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean|UrlTree {
      if(!this.authService.isAdminUser()){
        alert('You are not allowed to view this page');
        return false;
      }
      return true;
    }
  
}

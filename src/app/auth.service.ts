import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// import {auth} from 'firebase/app'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  logout() {
    throw new Error('Method not implemented.');
  }
  signup(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  signin(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn: any;

  constructor(private auth: AngularFireAuth, private router: Router) { }
  canActivate() : Observable<boolean>{
    return Observable.call(this.auth)
    .take(1)
    .map((state: any) => !!state)
    .do((authenticated: any) => {
      if(!authenticated) this.router.navigate(['/login']);
    });
  
  }
  
}

import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) { }
  canActivate() : Observable<boolean>{
    return Observable.call(this.auth)
    .take(1)
    .map((state: any) => !!state)
    .do((authenticated: any) => {
      if(!authenticated) this.router.navigate(['/login']);
    })
  }
  
}

import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// import {auth} from 'firebase/app'
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'
})
export class AuthService{
  isSignedIn(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  logout(){
    this.auth.signOut()
    localStorage.removeItem('user')
  }
  async signup(email : string, password : string){
    await this.auth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  async signin(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  isLoggedIn: any;

  constructor(private auth: AngularFireAuth, private router: Router) { }
}

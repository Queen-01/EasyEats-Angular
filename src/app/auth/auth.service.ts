import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
// import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private userName!: string;
 private isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
   }

   login(username: string, password: string){
     this.isLoggedIn = true;
     this.userName = username;
     return of(this.isLoggedIn);
   }

   isUserLoggedIn() :boolean{
     return this.isLoggedIn;
   }

   isAdminUser() : boolean{
     if(this.userName == 'Admin'){
       return true;
     }
     return false;
   }

   logoutUser() :void{
     if(!this.isUserLoggedIn()){
       alert('Logout success')
        this.isLoggedIn=true;
     }
     this.isLoggedIn = false;
   }
}

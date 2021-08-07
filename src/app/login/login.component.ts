import { Component, OnInit, HostBinding} from '@angular/core';
// for auth    
import {AngularFireAuth} from 'angularfire2/auth';
// for database
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [moveIn()],
  host : {'[@moveIn]' : ''}
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(public af : AngularFireAuth, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
   }
   loginGoogle(){
     this.af.auth.login({
       provider: AngularFireDatabase,
       method: AngularFireAuth,
     }).then(
       (success: any) => {
         this.router.navigate(['/members']);
       }).catch(
         (err: any) =>{
           this.error = err;
         })
   }
  ngOnInit(): void {
  }

}

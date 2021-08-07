import { Component, OnInit } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
// for auth    
import {AngularFireAuth} from 'angularfire2/auth';
// for database
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { moveIn, fallIn } from '../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations : [moveIn(), fallIn()],
  host:{'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
  error: any;
  state: string = '';


  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.auth.subscribe((auth: any) =>{
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
   }

   onSubmit(formData){
     if(formData.valid){
       console.log(formData.value);
       this.af.auth.login({
        email: formData.vslue.email,
        password: formData.value.password
       },
       {
         provider: AngularFireDatabase,
         method: AngularFireAuth,
       }).then(
         (success) =>{
           console.log(success);
           this.router.navigate(['/members']);
         }
       ).catch(
         (err) => {
           console.log(err);
           this.error =err;
         }
       )
     }
   }

  ngOnInit(): void {
  }

}

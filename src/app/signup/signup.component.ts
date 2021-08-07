import { Component, OnInit } from '@angular/core';
// for auth    
import {AngularFireAuth} from 'angularfire2/auth';
// for database
import {AngularFireDatabase} from 'angularfire2/database';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]' : ''}
})
export class SignupComponent implements OnInit {
  state : string = '';
  error: any;
  afAuth: any;

  constructor(public af: AngularFireAuth, private router: Router) { }
  onSubmit(formData: { valid: string; value: { email: string; password: string; }; }){
    if(formData.valid){
      this.afAuth.auth.createUserWithEmailAndPassword({
        email : formData.value.email,
        password : formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login'])
        }
      ).catch(
        (err: any) =>{
          console.log(err);
          this.error =err;
        }
      )
    }
  }

  ngOnInit(): void {
  }

}

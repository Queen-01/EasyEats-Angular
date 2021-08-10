import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
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
  isSignedIn: boolean;

  constructor(public af: AngularFireAuth, private router: Router, public authService: AuthService) {
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
   }
 
  async onSignUp(email: string, password: string){
    await this.authService.signup(email, password)
    if(this.authService.isLoggedIn)
    this.isSignedIn = true
  }

  ngOnInit() {
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

}

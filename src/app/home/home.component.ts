import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { moveIn } from '../router.animations';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [moveIn()],
  host : {'[@moveIn]' : ''}
})
export class HomeComponent implements OnInit {
  isSignedIn = false
  service: any;

  constructor(public authService : AuthService, private route: ActivatedRoute, private router: Router, public af: AngularFireAuth) { 
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
    
  }
  ngOnInit() {
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false

    this.route.queryParams.subscribe(params => {
      this.onSignIn = params['/members'];
    });
  }
  // async onSignUp(email: string, password: string){
  //   await this.firebaseService.signup(email, password)
  //   if(this.firebaseService.isLoggedIn)
  //   this.isSignedIn = true
  // }
  async onSignIn(email: string, password: string){
    await this.authService.signin(email, password)
    if(this.authService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
    
  }
}

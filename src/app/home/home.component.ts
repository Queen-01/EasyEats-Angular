import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.service';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [moveIn()],
  host : {'[@moveIn]' : ''}
})
export class HomeComponent implements OnInit {
  isSignedIn = false

  constructor(public authService : AuthGuard, private router: Router) { 
    
  }

  ngOnInit() {
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
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

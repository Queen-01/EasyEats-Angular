import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSignedIn = false

  constructor(public firebaseService : AuthGuard) { }

  ngOnInit() {
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignUp(email: string, password: string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignIn(email: string, password: string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
    
  }
}

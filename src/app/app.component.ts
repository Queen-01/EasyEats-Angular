import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy eats';
  constructor(private authService: AuthService, private route: Router){

  }
  logout(){
    this.authService.logoutUser();
    this.route.navigate(['home']);
  }
}

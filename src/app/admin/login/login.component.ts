import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  retUrl: string = "home";
  invalidCredentialMsg!: string;
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe(params =>{
      this.retUrl = params.get('retUrl');
      console.log('LoginComponent/ngOnInit' + this.retUrl)
    });
  }

  onFormSubmit(loginForm: { value: { username: string; password: string; }; }){
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe((data: any) =>{
      console.log('return to' + this.retUrl);
      if(this.retUrl!=null){
        this.router.navigate([this.retUrl]);
      }else{
        this.router.navigate(['home'])
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
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


  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe((auth: any) =>{
      if(auth) {
        this.router.navigateByUrl('/mambers');
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
         provider: AuthProviders.Password,
         method: AuthMethods.Password,
       }).then(
         (success) =>{
           console.log(success);
           this.router.navigate(['/members']);
         }
       ).catch(
         (err) => {
           console
         }
       )
     }
   }

  ngOnInit(): void {
  }

}

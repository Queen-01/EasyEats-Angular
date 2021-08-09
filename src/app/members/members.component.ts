import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { AuthGuard } from '../auth.service';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations:[moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string='';

  constructor(public af: AngularFireAuth, private router: Router, private authService: AuthGuard) { 
    this.af.authState.subscribe(auth=>{
      if(auth){
        this.name = auth;
      }
    });
   }

   logout(){
     this.logout();
     console.log('logged out');
     this.router.navigateByUrl('/login');
   }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(public firebaseServie : FirebaseService) { }

  ngOnInit(): void {
  }
  onLogOut(){
    this.firebaseServie.logout()
    this.isLogout.emit()
  }

}

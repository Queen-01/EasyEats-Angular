import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthGuard } from '../auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(public firebaseService : AuthGuard) { }

  ngOnInit(): void {
  }
  onLogOut(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}

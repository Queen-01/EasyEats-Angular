import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }
  onLogOut(){
    this.authService.logout()
    this.isLogout.emit()
  }

}

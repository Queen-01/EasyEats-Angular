import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MembersComponent,
    HomeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBO7qTd12RayjgQO4Iuox4PXXdxXL8YM6k",
        authDomain: "easyeats-629c6.firebaseapp.com",
        projectId: "easyeats-629c6",
        storageBucket: "easyeats-629c6.appspot.com",
        messagingSenderId: "884342473277",
        appId: "1:884342473277:web:7df77043564c6ab9152054",
        measurementId: "G-N7J2G27MKD"
      }
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

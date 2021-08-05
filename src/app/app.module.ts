import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBO7qTd12RayjgQO4Iuox4PXXdxXL8YM6k",
  authDomain: "easyeats-629c6.firebaseapp.com",
  projectId: "easyeats-629c6",
  storageBucket: "easyeats-629c6.appspot.com",
  messagingSenderId: "884342473277",
  appId: "1:884342473277:web:7df77043564c6ab9152054",
  measurementId: "G-N7J2G27MKD"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

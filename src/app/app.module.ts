import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAHAmCnnHc5WMBIqx2zs3ruwFDzrDvuObI",
        authDomain: "easy-eats-f5129.firebaseapp.com",
        projectId: "easy-eats-f5129",
        storageBucket: "easy-eats-f5129.appspot.com",
        messagingSenderId: "614125145314",
        appId: "1:614125145314:web:8921b99b94ecb297f622bb"
      })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

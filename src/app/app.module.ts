import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
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

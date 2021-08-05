import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirebaseService } from './services/firebase.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ChoseUsComponent } from './components/chose-us/chose-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpecialComponent } from './components/special/special.component';
import { EventsComponent } from './components/events/events.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OutletsComponent } from './components/outlets/outlets.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderItemsComponent } from './components/orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutComponent,
    ChoseUsComponent,
    MenuComponent,
    SpecialComponent,
    EventsComponent,
    PlaceOrderComponent,
    TestimonialsComponent,
    GalleryComponent,
    OutletsComponent,
    ContactUsComponent,
    FooterComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent
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
  providers: [FirebaseService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

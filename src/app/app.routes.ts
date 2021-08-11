import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
 
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, canActivate : [AuthGuardGuard] ,
      canActivateChild : [AuthGuardGuard],
      children: [
      {  path: 'view/:id', component: ProductViewComponent  },
      {  path: 'edit/:id', component: ProductEditComponent  },
      {  path: 'add', component: ProductAddComponent }
      ]  
  },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
 
 
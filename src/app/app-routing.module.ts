import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'admin', component: AppComponent,
children: [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

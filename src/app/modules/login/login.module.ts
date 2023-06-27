import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { LoginComponent } from './componentes/login/login.component';



@NgModule({
  declarations: [
    HomeLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeLoginComponent
  ]
})
export class LoginModule { }

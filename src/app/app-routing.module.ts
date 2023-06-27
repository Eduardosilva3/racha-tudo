import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './modules/login/pages/home-login/home-login.component';


const routes: Routes = [
    { path: 'login/:mesa', component: HomeLoginComponent }
  ];

  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
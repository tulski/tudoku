import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {AuthLoginComponent} from './auth-login/auth-login.component';
import {AuthRegisterComponent} from './auth-register/auth-register.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent
      },
      {
        path: 'register',
        component: AuthRegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

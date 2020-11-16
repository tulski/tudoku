import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthLayoutComponent, AuthLoginComponent, AuthRegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

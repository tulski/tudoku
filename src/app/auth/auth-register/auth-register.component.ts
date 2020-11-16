import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['../auth.scss']
})
export class AuthRegisterComponent {
  form: FormGroup;

  constructor(private loginForm: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.loginForm.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup() {
    const val = this.form.value;
    this.authService.signUp(val.username, val.email, val.password).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}

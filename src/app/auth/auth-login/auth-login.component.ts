import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['../auth.scss']
})
export class AuthLoginComponent {
  form: FormGroup;

  constructor(private loginForm: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.loginForm.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }

}

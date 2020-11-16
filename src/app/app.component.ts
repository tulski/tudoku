import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tudoku';

  constructor(public router: Router, private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}

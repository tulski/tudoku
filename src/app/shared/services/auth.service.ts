import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string) {
    return this.http.put(`${environment.apiUrl}/auth`, {email, password}).pipe(tap(res => this.setSession(res)), shareReplay());
  }

  public signUp(username: string, email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/auth`, {username, email, password}).pipe(tap(res => this.setSession(res)), shareReplay());
  }

  setSession(authResult) {
    localStorage.setItem('token', authResult.token);
  }

  public logout() {
    localStorage.removeItem('token');
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  clientId = 'fU3kkI1Zc1gwGcs97b7dQYHzgeBS3THBKwKevZvh';
  secret = 'UuGGXMv2qC4ebKyKySRYoy1ITJd1eOn5EYXOaq6CmOuAUvcAUHeJp2sv1wTZfZGWxSVqfoQ1pwwgNGgX4UFmy0JfM814Rsppw4LPhrywAhlegmLU2xdakonFr1kfabXh';
  authUrl = 'https://pod1.salesonepro.com:8005/signin//token/';

  constructor(private http: HttpClient, private router: Router) { }

  onLogin(creds) {
    const token = btoa(this.clientId + ':' + this.secret);
    let headers = new HttpHeaders().set('Authorization', 'Basic ' + token);
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(
      this.authUrl, creds, { headers: headers }
    );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('refresh_token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  clientId = 'fU3kkI1Zc1gwGcs97b7dQYHzgeBS3THBKwKevZvh';
  secret = 'UuGGXMv2qC4ebKyKySRYoy1ITJd1eOn5EYXOaq6CmOuAUvcAUHeJp2sv1wTZfZGWxSVqfoQ1pwwgNGgX4UFmy0JfM814Rsppw4LPhrywAhlegmLU2xdakonFr1kfabXh';
  authUrl = 'https://pod1.salesonepro.com:8005/signin//token/';

  constructor(private http: HttpClient) { }

  onLogin(creds) {
    console.log(creds);
    const token = btoa(this.clientId + ':' + this.secret);
    let headers = new HttpHeaders().set('Authorization', 'Basic ' + token);
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    console.log(headers);
    return this.http.post(
      this.authUrl, creds, { headers: headers }
    );
  }

}

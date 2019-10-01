import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /* POST for login */
  login(userName: string, password: string) {
    console.log("service here");
    return this.http.post(`${this.usersEndpoint}login`, {USERNAME : userName, PASSWORD : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
  /* POST for register */
  register(userName: string, email: string, password: string) {
    return this.http.post(`${this.usersEndpoint}register`, {USERNAME : userName, userEmail : email, userPassword : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
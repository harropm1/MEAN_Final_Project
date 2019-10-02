import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  loginUserId: number = 0;
  constructor(private authService: AuthService, private http: HttpClient) { }

  /* POST for login */
  login(userName: string, password: string) {
    return this.http.post(`${this.usersEndpoint}login`, {USERNAME : userName, PASSWORD : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
  /* POST for register */
  register(userName: string, email: string, password: string) {
    return this.http.post(`${this.usersEndpoint}register`, {username : userName, email : email, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // PUT for update
  edit(USERNAME: string, EMAIL: string): Observable<any> {
    return this.http.put(`${this.usersEndpoint}edit/${this.authService.getUserId()}`, { USERNAME: USERNAME, EMAIL: EMAIL }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
  //GET for inserting a user's information
  getUser(id: number): Observable<any> {
    console.log(this.authService.getUserId());
    return this.http.get(`${this.usersEndpoint}getUser/${this.authService.getUserId()}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
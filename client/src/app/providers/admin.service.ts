import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

// League Service Typescript Code for the Hip to be Square Capstone Project.

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  users: Array<string> = [];

  private adminEndpoint: string = 'http://localhost:3000/admin/members';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials:true
  }; 
  
  constructor(private http: HttpClient) { }

  // GET request to return Leagues Data
  // GET http://localhost:3000/admin/members
  getNonAdminUsers(): Observable<any> {
    return this.http.get(this.adminEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
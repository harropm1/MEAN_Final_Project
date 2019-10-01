import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

// League Service Typescript Code for the Hip to be Square Capstone Project.

@Injectable({
  providedIn: 'root'
})

export class LeaguesService {
  leagues: Array<string> = [];

  private leaguesEndpoint: string = 'http://localhost:3000/leagues/data';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials:true
  }; 
  
  constructor(private http: HttpClient) { }

  // GET request to return Leagues Data
  // GET http://localhost:3000/leagues/data
  getLeagues(): Observable<any> {
    return this.http.get(this.leaguesEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
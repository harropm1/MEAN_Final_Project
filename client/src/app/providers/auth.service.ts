import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuth: boolean = false;
  private isAdmin: boolean = false;
  private userId: number = 0;

  // Stores Auth status
  setAuthStatus(status: boolean) {
    this.isAuth = status;
  }

  // Gets Auth status
  getAuthStatus() {
    return this.isAuth;
  }

  // Stores Admin status
  setAdminStatus(status: boolean) {
    this.isAdmin = status;
  }

  // Gets Admin status
  getAdminStatus() {
    return this.isAdmin;
  }

  // Stores user id
  setUserId(ID: number) {
    this.userId = ID;
  }

  // Gets user id
  getUserId() {
    return this.userId;
  }
}
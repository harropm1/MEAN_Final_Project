import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

//   private isAuth: boolean = false;
//   private isAdmin: boolean = false;
  private uniqueId: number;

//   // Stores Auth status
//   setAuthStatus(status: boolean) {
//     this.isAuth = status;
//   }

//   // Gets Auth status
//   getAuthStatus() {
//     return this.isAuth;
//   }

//   // Stores Admin status
//   setAdminStatus(status: boolean) {
//     this.isAdmin = status;
//   }

//   // Gets Admin status
//   getAdminStatus() {
//     return this.isAdmin;
//   }

  // Stores user id
  setUniqueId(id: number) {
    this.uniqueId = id;
  }

  // Gets user id
  getID() {
    return this.uniqueId;
  }
}
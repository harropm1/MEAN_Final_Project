import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from './../providers/admin.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: Array<string> = [];
  constructor(
    private adminService: AdminService, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
    //redirect to login if not admin
    if (this.authService.getAdminStatus() == false)
    {
      this.router.navigate(['login']);
    }

    this.adminService.getNonAdminUsers().subscribe(data => {
      this.users = data;
    });
  }
}
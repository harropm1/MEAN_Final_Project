import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {}

  // checks if the user is logged in
  isAuth(): boolean {
    return this.authService.getAuthStatus();
  };

  // checks if the users is an admin
  isAdmin(): boolean {
    return this.authService.getAdminStatus();
  };

  //when the home button is clicked
  goHome(): void {
    this.router.navigate(['/']);
  }

  //when the login nav button is clicked
  goLogin(): void {
    this.router.navigate(['login']);
  }

  //when the register button is clicked
  goRegister(): void {
    this.router.navigate(['register']);
  }

  //when the league button is clicked
  goLeagues(): void {
    this.router.navigate(['leagues']);
  }

  //when the edit button is clicked
  goEdit(): void {
    this.router.navigate(['edit']);
  }

  //when the admin button is clicked
  goAdmin(): void {
    this.router.navigate(['admin']);
  }

  //when the logout button is clicked
  goLogout(): void {
    this.authService.setAuthStatus(false);
    this.authService.setAdminStatus(false);
    this.router.navigate(['/']);
  }
}
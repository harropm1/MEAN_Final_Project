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

  ngOnInit() {
  }

  goLogin(): void {
    this.router.navigate(['login']);
  }

  goRegister(): void {
    this.router.navigate(['register']);
  }

  goEdit(): void {
    if (this.authService.getAuthStatus() == true)
    {
      this.router.navigate(['edit']);
    }
    else 
    {
      this.router.navigate(['login'])
    }
    
  }

  goAdmin(): void {
    if (this.authService.getAdminStatus() == true && this.authService.getAuthStatus() == true)
    {
      this.router.navigate(['admin']);
    }
    else if (this.authService.getAdminStatus() != false && this.authService.getAuthStatus() == true)
    {
      this.router.navigate(['leagues']);
    }
    else
    {
      this.router.navigate(['login']);
    }
  }

  goLogout(): void {
    this.authService.setAuthStatus(false);
    this.authService.setAdminStatus(false);
    this.router.navigate(['/']);
  }

  goLeagues(): void {
    if (this.authService.getAuthStatus() == true)
    {
      this.router.navigate(['leagues']);
    }
    else 
    {
      this.router.navigate(['login'])
    }
  }
}

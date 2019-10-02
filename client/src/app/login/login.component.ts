import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Login';
  ID: number;
  userName: string = '';
  password: string = '';

  error: boolean = false;
  errMsg: string = '';
  
  // create instance of UserService
  constructor(
              private authService: AuthService, 
              private userService: UserService, 
              private router: Router) {}

  ngOnInit() {}

  //what happens when the user clicks the "Log In!" button
  onSubmit(): void {
    if (this.userName == '' || this.password == '') 
    {
      this.errMsg = 'User name and password are required.';
      this.error = true;
    } 
    else 
    {
      this.error = false;
      this.errMsg = '';

      // Call UserService to authenticate
      this.userService.login(this.userName, this.password).subscribe(data => {
        console.log(data);
        if (data['error']) {
          this.authService.setAuthStatus(false);
          this.errMsg = 'Login unsuccessful. Please make sure you are using the correct username and password.';
          this.error = true;
        } else {
          this.authService.setAuthStatus(true);
          this.authService.setUserId(data['ID']);
          this.router.navigate(['leagues']);
        }
      });
    }
  }
}
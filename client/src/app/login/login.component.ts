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
    private router: Router) { }

  ngOnInit() { }

  //what happens when the user clicks the "Log In!" button
  onSubmit(): void {
    //username/password are blank
    if (this.userName == '' || this.password == '') 
    {
      this.errMsg = 'User name and password are required.';
      this.error = true;
    }
    //username/password are both filled
    else 
    {
      this.error = false;
      this.errMsg = '';
      // Call UserService to authenticate
      this.userService.login(this.userName, this.password).subscribe(data => {
        //if there's an error
        if (data['error']) 
        {
          this.error = true;
          this.errMsg = 'Login unsuccessful. Please make sure you are using the correct username and password.';
          this.authService.setAuthStatus(false);
        }
        //if there isnt't an error
        else 
        {
          //set the auth status
          this.authService.setAuthStatus(true);
          //if they aren't listed as an admin
          if (data['ISADMIN'] == 0) 
          {
            this.authService.setAdminStatus(false);
            this.authService.setUserId(data['ID']);
          }
          //if they are listed as an admin
          else
          {
            this.authService.setAdminStatus(true);
            this.authService.setUserId(data['ID']);
          }
          //navigate to the leagues page if there isn't an error, doesn't matter if they are an admin or not
          this.router.navigate(['leagues']);
        }
      });
    }
  }
}
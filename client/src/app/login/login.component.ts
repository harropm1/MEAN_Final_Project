import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../providers/user.service';

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
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

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
        if (data['error']) {
          this.errMsg = 'Login unsuccessful. Please make sure you are using the correct username and password.';
          this.error = true;
        } else {
          this.router.navigate(['leagues'], {queryParams: {ID: this.ID, userName: this.userName}});
          console.log(data)
        }
      });
    }
  }
}
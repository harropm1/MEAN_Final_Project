import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle = 'Register';
  USERNAME: string = '';
  EMAIL: string = '';
  PASSWORD: string = '';

  error: boolean = false;
  errMsg: string = '';
  
  // create instance of UserService
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() { }

  //what happens when the user clicks the "register" button
  onSubmit(): void {
    if (this.USERNAME == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.EMAIL == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } else if (this.PASSWORD == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else if (this.PASSWORD.length < 8) {
      this.errMsg = 'Password must be at least 8 chars.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to Register
      this.userService.register(this.USERNAME, this.EMAIL, this.PASSWORD).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Registration unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['/users/login']);
        }
      });
    }
  }

}

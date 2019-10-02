import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  ID: number = 0;
  USERNAME: string = '';
  EMAIL: string = '';

  error: boolean = false;
  errMsg: string = '';

  // create instance of UserService
  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {

    //if the user isn't logged in
    if (this.authService.getAuthStatus() == false) 
    {
      this.router.navigate(['login']);
    }

    this.ID = this.authService.getUserId();

    // set elements values based on GET user data request for a specific user
    this.userService.getUser(this.authService.getUserId()).subscribe(data => {
      this.USERNAME = data.USERNAME;
      this.EMAIL = data.EMAIL;
    });
  }
  
  // what happens when the submit button is clicked
  onSubmit(): void {
    if (this.EMAIL == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    }
    else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to edit email
      this.userService.edit(this.USERNAME, this.EMAIL).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Email Update Unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['edit']);
        }
      });
    }
  }

  //what happens when the delete button is clicked
  onDelete(): void {
    this.userService.delete(this.authService.getUserId()).subscribe(data => {
      if (data['error']) {
        this.errMsg = 'Unable to delete your account.';
        this.error = true;
      } else {
        this.authService.setAuthStatus(false);
        this.authService.setAdminStatus(false);
        this.router.navigate(['/']);
      }
    });
  };
}
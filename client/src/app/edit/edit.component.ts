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
  user = {};
  ID: number = 0;
  USERNAME: string = '';
  EMAIL: string = '';

  error: boolean = false;
  errMsg: string = '';

  // create instance of UserService
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.ID = this.authService.getUserId();
    console.log(this.ID)

    // set elements values based on GET user data request for a specific user
    this.userService.getUser(this.authService.getUserId()).subscribe(data => {
      console.log(data);
      this.USERNAME = data.USERNAME;
      this.EMAIL = data.EMAIL;
  });
  }
  // Validation for the Update Info submit.
  onSubmit(): void {
    if (this.EMAIL == '') 
    {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    }
    else 
    {
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
}
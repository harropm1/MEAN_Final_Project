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
  user: any = {};
  ID: number = 0;
  username: string = '';
  email: string = '';

  error: boolean = false;
  errMsg: string = '';

  // create instance of UserService
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // if (!(this.authService.getAuth())) {
    //   this.router.navigate(['/login']);
    // }

    this.ID = this.authService.getID();
    // console.log(this.ID)

    // set elements values based on GET user data request for a specific user
    this.userService.getUser(this.ID).subscribe(data => {
      this.user = data;
      this.username = this.user.USERNAME;
      this.email = this.user.EMAIL;
  });
  }
  // Validation for the Update Info submit.
  onSubmit(): void {
    if (this.email == '') 
    {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    }
    else 
    {
      this.error = false;
      this.errMsg = '';

      // Call UserService to edit email
      this.userService.edit(this.ID, this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Email Update Unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['leagues'], {queryParams: { ID: this.ID, USERNAME: this.username }});
        }
      }); // end of editUser 
    }
  } // end of onSubmit


  // Delete the user and reset the authorization statuses.
  // onDelete(): void {
  //     // Call UserService to delete User
  //     this.userService.delete(this.ID).subscribe(data => {
  //     this.router.navigate(['/']);
  //     });
  // } // end of onDelete
} // end of export
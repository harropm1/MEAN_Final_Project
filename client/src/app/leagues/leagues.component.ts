import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LeaguesService } from '../providers/leagues.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  //setting the leagues as an array, so I can use ngFor in the html to dynamically generate it
  leagues: Array<string> = [];
  constructor(
    private leaguesService: LeaguesService, 
    private authService: AuthService, 
    private router: Router) { }

  //what happens when the page loads
  ngOnInit() {
    //if the user isn't logged in
    if (this.authService.getAuthStatus() == false)
    {
      this.router.navigate(['login']);
    }

    // calling getLeagues() method in LeagueService
    this.leaguesService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }
}

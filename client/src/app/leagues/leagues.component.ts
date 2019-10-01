import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../providers/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: Array<string> = [];
  constructor(private leaguesService: LeaguesService) { }

  ngOnInit() {
    // calling getLeagues() method in LeagueService
    this.leaguesService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }
}

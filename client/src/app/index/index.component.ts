import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  //when the search button is clicked
  goLogin(): void {
    this.router.navigate(['login']);
  }
}
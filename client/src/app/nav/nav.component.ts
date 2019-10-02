import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogin(): void {
      this.router.navigate(['login']);
  }

  goRegister(): void {
    this.router.navigate(['register']);
}


goEdit(): void {
  this.router.navigate(['edit']);
}


goAdmin(): void {
  this.router.navigate(['admin']);
}

goLogout(): void {
  this.router.navigate(['logout']);
}
}

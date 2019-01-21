import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-profile-page',
  templateUrl: './dashboard-profile-page.component.html',
  styleUrls: ['./dashboard-profile-page.component.scss']
})
export class DashboardProfilePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.router.navigate(['']);
  }
}

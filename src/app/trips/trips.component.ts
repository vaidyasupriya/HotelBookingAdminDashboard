import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { dynamicApiService } from '../../app/shared/dynamicApi.service';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  tripDetails: any;
  constructor( private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService ) { }
  ngOnInit() {
    // this.http.get('').
    // subscribe(data => {
    //   this.tripDetails = data;
    //   console.log(this.tripDetails);
    // });
  }
  toDetails( ) {
    this.router.navigate(['/tripsDetails']);
    // this.dynamicapiservice.setSelectedUser();
  }
}

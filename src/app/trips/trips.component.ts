import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  transactionDetails: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://signorawareapi.azurewebsites.net/api/Transaactions').
    subscribe(data => {
      this.transactionDetails = data;
      console.log(this.transactionDetails);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.scss']
})
export class TravellersComponent implements OnInit {
  travellers:any;
  // progress bar
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 100;
  loading = true;
   // progress bar
     constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/Travellers').
    subscribe(data => {
      this.travellers = data;
      this.loading = false;

    }, error => {
      console.log(error);
    });
  }

}

import {Component,  OnInit, Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router';
import { dynamicApiService} from '../shared/dynamicApi.service';
import {  HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any;
  BookingId: any;
  // progress bar
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 100;
  loading = true;
   // progress bar
  constructor(private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService) {}
  ngOnInit() {
    this.loading = true;
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/bookings').
    subscribe(data => {
      this.bookings = data;
      for ( const booking of this.bookings ) {
        this.loading = false;
      }
    }, error => {
      console.log(error);
    });
  }
  ToBookingDetails(BookingId: any) {
    this.router.navigate(['/adminLayout/booking-details']);
    this.dynamicapiservice.setSelectedBooking(BookingId);
  }
}

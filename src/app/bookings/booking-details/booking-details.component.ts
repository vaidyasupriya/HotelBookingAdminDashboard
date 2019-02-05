import { Component, OnInit } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { dynamicApiService} from '../../shared/dynamicApi.service';
declare var $: any;
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  bookings: any;
  selectedBookingID: any;
 // progress bar
 color = 'primary';
 mode = 'indeterminate';
 value = 50;
 bufferValue = 100;
 loading = true;
  // progress bar
  bookingId: any;
  booking_BookingDate: any;
  booking_BookingStatus: any;
  booking_CancellationDeadlineDate: any;
  booking_CheckinData: any;
  booking_CommissionRate: any;
  booking_Cost: any;
  booking_PaymentDeadlineDate: any;
  booking_ReferenceNumber: any;
  booking_Sale: any;
  booking_FirstName: any;
  booking_LastName: any;
  booking_Phone: any;
  booking_GoogleId: any;
  booking_FacebookId: any;
  booking_Nationality: any;
  constructor(private http: HttpClient, private dynamicapiservice: dynamicApiService) { }
  ngOnInit() {
    this.loading = true;
    this.dynamicapiservice.currentbookingId.
    subscribe(selectedBookingID => this.selectedBookingID = selectedBookingID);
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/bookings').
    subscribe(data => {
      this.bookings = data;
      this.loading = false;
      for ( const booking of this.bookings ) {
        console.log(this.selectedBookingID);
        if (this.selectedBookingID === booking.BookingId) {
            this.bookingId = booking.BookingId;
            console.log(this.bookingId);
            this.booking_BookingDate = booking.BookingDate;
            this.booking_BookingStatus = booking.BookingStatus;
            this.booking_CancellationDeadlineDate = booking.CancellationDeadlineDate;
            this.booking_CheckinData = booking.CheckinData;
            this.booking_CommissionRate = booking.CommissionRate;
            this.booking_Cost = booking.Cost;
            this.booking_PaymentDeadlineDate = booking.PaymentDeadlineDate;
            this.booking_ReferenceNumber = booking.ReferenceNumber;
            this.booking_Sale = booking.Sale;
            this.booking_FirstName = booking.User.FirstName;
            this.booking_LastName = booking.User.LastName;
            this.booking_Phone = booking.User.Phone;
            this.booking_GoogleId = booking.User.GoogleId;
            this.booking_FacebookId = booking.User.FacebookId;
            this.booking_Nationality = booking.User.Nationality;
            this.loading = false;
        }
      }
    }, error => {
      console.log(error);
    });
  }
   convertArrayOfObjectsToCSV(args) {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) {
              result += columnDelimiter;
            }
            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

 downloadCSV(args, from, align) {
    let data, filename, link;
    let csv = this.convertArrayOfObjectsToCSV({
        data: this.bookings
    });
    if (csv == null) {
        return
    };
    filename = args.filename || 'export.csv';
    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
    $.notify({
        icon: 'notifications',
        message: 'File is Downloading',
    }, {
        type: 'warning',
        timer: 1000,
        placement: {
            from: from,
            align: align
        },
     });
    }
}

import { Component, OnInit } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { dynamicApiService} from '../../shared/dynamicApi.service';
declare var $: any;
import {
  EmptyHotelDetail
} from '../../../EmptyHotelDetail';
import * as moment from 'moment';

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
  bookingData: any;
  booking_Id: any;
  viewBooking: any;
  hotelValues: any;
  starHotelsCount: number;
  starHotelsCount5 = 0;
  starHotelsCount4 = 0;
  starHotelsCount3 = 0;
  starHotelsCount2 = 0;
  starHotelsCount1 = 0;
  starHotelsCountOthers = 0;
  booking_status: any;
  selectedHotel: any;
  temp_image = 'assets/imgs/no_results_found_png_image.png';
  hotel_image: any;
  base_tax_ammout: any;
  calculated_tax: any;
  calculated_charges; any;
  inclusive_label = true;
  myImgUrl = '/assets/imgs/no_image_banner.svg';
  hotelImage: any;
  checkInDate: any;
  checkOutDate: any;
  hotelAdditionalInfo: any;
  bookingPrice: any;
  numberOfNights: any;
  totalPrice: any;
    //multiple rooms
    room_name_array: any = [];
    adult_count_array: any = [];
    children_count_array: any = [];
    guest_count_array: any = [];
      //multiple rooms
  constructor(private http: HttpClient, private dynamicapiservice: dynamicApiService) { }
  ngOnInit() {
    this.loading = true;
    this.dynamicapiservice.currentbookingId.
    subscribe(selectedBookingID => this.selectedBookingID = selectedBookingID);
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/bookings').
    subscribe(data => {
      this.bookings = data;
      this.loading = false;

    //test
      // this.http.get('https://doyenowebapp2.azurewebsites.net/api/bookings/?BookingId'+ this.selectedBookingID).
      // subscribe(data => {
      //   this.loading = true;
      //   this.bookings = data;
      //     console.log(this.bookings);
      //     console.log(this.bookings.BookingStatus);
      //     this.booking_status = this.bookings.BookingStatus;
      //          this.viewBooking = this.bookings.BookingData;
      //          this.viewBooking = JSON.parse(this.viewBooking);
      //         console.log(this.viewBooking);
      //         for(let i = 0 ; i< this.viewBooking.rooms.length; i++) {
      //           console.log(this.viewBooking.rooms[i].pax);
      //           console.log(this.viewBooking.rooms[i].pax.adult_quantity);
      //           // adult count
      //           if(this.viewBooking.rooms[i].pax.adult_quantity !== 0) {
      //             this.adult_count_array.push(this.viewBooking.rooms[i].pax.adult_quantity);
      //           }
      //           if(this.adult_count_array[i] === 1){
      //             const temp = this.adult_count_array[i];
      //             this.adult_count_array[i] = temp +' ' + 'Adult';
      //          } else{
      //             const temp = this.adult_count_array[i];
      //             this.adult_count_array[i] =  temp + ' ' + 'Adults';
      //           }
      //           // adult count
      //           // children count
      //           if(this.viewBooking.rooms[i].pax.children_ages!== 0) {
      //             const temp = this.viewBooking.rooms[i].pax.children_ages.length;
      //             this.children_count_array.push(temp);
      //           } else{
      //             const temp = '';
      //             this.children_count_array.push(temp);
      //           }
      //           if(this.children_count_array[i] === 1){
      //             const temp = this.children_count_array[i];
      //             this.children_count_array[i] = temp +' ' + 'Child';
      //          } else if(this.children_count_array[i] > 1){
      //             const temp = this.children_count_array[i];
      //             this.children_count_array[i] =  temp + ' ' + 'Children';
      //           } else {
      //             const temp = this.children_count_array[i];
      //             this.children_count_array[i] =  '';
      //           }
      //           // children count
  
  
      //           this.room_name_array.push(this.viewBooking.rooms[i].room_description);
      //         }
      //         //combined count
      //         for(let i = 0 ; i< this.viewBooking.rooms.length; i++) {
      //           this.guest_count_array[i] = this.adult_count_array[i] + ' ' + this.children_count_array[i];
      //         }
      //         //combined count
      //         console.log(this.adult_count_array, this.children_count_array ,this.guest_count_array );
      //         console.log(this.room_name_array);
      //         if(this.selectedHotel === undefined ) {
      //           this.getHotelData();
      //           console.log('no hotel');
      //         }
      //         this.getBookingData();
  
      // }, error => {
      //   console.log(error);
      // });
      //test
      for ( const booking of this.bookings ) {
        console.log(this.selectedBookingID);
        if (this.selectedBookingID === booking.BookingId) {
          console.log(booking);

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
getHotelData() {
  console.log(this.viewBooking);

  this.selectedHotel = new EmptyHotelDetail(null,
    null, null, null, null, null, null, null, null, null, null, null);

  this.http.get('https://doyenodevtest.azurewebsites.net/api/gethoteldetails/' + this.viewBooking.hotel_code).
  // this.http.get('http://localhost:55117/api/gethoteldetails/' + result.hotel_code).
  subscribe(hotelData => {
    this.hotelValues = hotelData;
    console.log( this.hotelValues);
    // console.log( this.hotelValues[0]);

    for (const hotelValue of this.hotelValues) {
      console.log(hotelValue);
      console.log(hotelValue[0].name);
          this.selectedHotel.name = hotelValue[0].name;
          console.log(this.selectedHotel.name);
          this.selectedHotel.descriptions = hotelValue[0].descriptions.hotel_information;
          console.log( hotelValue[0].descriptions);
          console.log( hotelValue[0].descriptions.hotel_information);

          this.selectedHotel.images = hotelValue[0].images;
          this.selectedHotel.facilities = hotelValue[0].facilities;
          this.selectedHotel.stars = hotelValue[0].stars ? hotelValue[0].stars : 1;
          // hotelDetail.destination = hotelResult.destination;                      
          this.selectedHotel.country = hotelValue[0].country;
          this.selectedHotel.address = hotelValue[0].address;
          console.log(this.selectedHotel);
          this.selectedHotel.checkin_from = hotelValue[0].checkin_from;
          this.selectedHotel.checkin_to = hotelValue[0].checkin_to;
          this.selectedHotel.chekout_from = hotelValue[0].chekout_from;
          this.selectedHotel.checkout_to = hotelValue[0].checkout_to;

          this.selectedHotel.latitude = hotelValue[0].latitude;
          this.selectedHotel.longitude = hotelValue[0].longitude;
          this.selectedHotel.phone = hotelValue[0].phone;
          this.selectedHotel.fax = hotelValue[0].fax;
          this.hotel_image = hotelValue[0].images[0].original;
          console.log(this.hotel_image);
      }
      if (this.selectedHotel.stars === 5) {
        this.starHotelsCount5++;
      } else if (this.selectedHotel.stars === 4) {
        this.starHotelsCount4++;
      } else if (this.selectedHotel.stars === 3) {
        this.starHotelsCount3++;
      } else if (this.selectedHotel.stars === 2) {
        this.starHotelsCount2++;
      } else if (this.selectedHotel.stars === 1) {
        this.starHotelsCount1++;
      } else {
        this.starHotelsCountOthers++;
      }
    
  }, error => {
    console.log(error);
  });
  this.loading = false;

}
getBookingData() {
  console.log(this.viewBooking);

  if( this.bookingData === undefined ) {
    console.log(this.viewBooking);
    console.log('null here' + this.viewBooking);
    this.bookingData =  this.viewBooking;
  } else {
    // this.bookingData = this.dynamicApiService.getBookingData();
    console.log(this.bookingData);
  }

  console.log(this.bookingData);
  this.bookingPrice = this.bookingData.price + this.bookingData.price * 9 / 100;
  this.totalPrice = this.bookingPrice;
  // cancellation data
  // console.log('Cancellation possible till:' + this.freeCancellationEndDate);
  // console.log('Days remaining:' + value.policies[0].days_remaining);
  // console.log('Ratio:' + value.policies[0].ratio);
  // this.charges = value.price * this.test_eff;
  // this.taxes = Number(value.taxes);
  // this.totalCharges = this.charges + this.taxes;
  // this.nonRefundable = value.nonrefundable;
  // cancellation data

  // if (this.bookingData.taxes === undefined) {
  //   this.base_tax_ammout = 0;
  //   this.totalPrice = this.bookingPrice + this.base_tax_ammout;
  //   console.log(this.totalPrice);
  // } else {
  //   if(!this.bookingData.taxes[0].inclusive) {
  //     this.totalPrice = this.bookingPrice + this.bookingData.taxes[0].amount;
  //     this.base_tax_ammout = this.bookingData.taxes[0].amount;
  //     this.inclusive_label = false;
  //   }
   
  // }
  this.base_tax_ammout = this.bookingData.price;
  console.log(this.base_tax_ammout);
  const base_ammount = this.base_tax_ammout / 1.09;
  this.calculated_tax =  base_ammount * 0.02;
  this.calculated_charges = base_ammount * 0.07;
  console.log(this.base_tax_ammout, base_ammount , this.calculated_tax , this.calculated_charges);
  console.log('tally -', base_ammount + this.calculated_tax + this.calculated_charges);

  //  if (!this.bookingData.taxes[0].inclusive) {
  //   this.totalPrice = this.bookingPrice + this.bookingData.taxes[0].amount;

  this.checkInDate = this.bookingData.checkin;
  this.checkOutDate = this.bookingData.checkout;
  const ckin = (moment)(this.checkInDate);
  const ckout = (moment)(this.checkOutDate);
  this.numberOfNights = ckout.diff(ckin, 'days');
  console.log('numberOfNights', this.numberOfNights);
 // console.log(this.bookingData);



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

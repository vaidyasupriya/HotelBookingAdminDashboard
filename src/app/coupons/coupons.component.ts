import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  orderDetails: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://signorawareapi.azurewebsites.net/api/orders').
  subscribe(data => {
    this.orderDetails = data;
  });
  }

}

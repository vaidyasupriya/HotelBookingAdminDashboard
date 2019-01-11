import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderDetails: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://signorawareapi.azurewebsites.net/api/orders').
  subscribe(data => {
    this.orderDetails = data;
  });
  }

}

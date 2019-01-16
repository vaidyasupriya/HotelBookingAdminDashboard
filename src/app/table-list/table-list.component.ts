import { Component, OnInit } from '@angular/core';
import {MatExpansionModule , MatAccordion} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { dynamicApiService } from '../../app/shared/dynamicApi.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  table1 = true;
  table2 = false;
  table3 = false;
  table4 = false;
  table5 = false;
  table6 = false;

  products: any;
  users: any;
  totalOrders: any;
  orderDetails: any;
  transactionDetails: any;
  id: any;
  isTrue1 = false;
  isTrue2 = true;
  isTrue3 = true;
  isTrue4 = true;
  isTrue5 = true;
  isTrue6 = true;

  constructor(private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService) { }

  ngOnInit() {
    // this.http.get('https://signorawareapi.azurewebsites.net/api/products').
    //   subscribe(data => {
    //   this.products = data;
    //   const totalLength = Object.keys(this.products).length;
    //   for ( const product of this.products) {
    //     this.id =  product.$id;
    //    }
    //   },
    //     err => { console.log(err); }
    //   );

      this.http.get('https://doyenowebapp2.azurewebsites.net/api/users').
      subscribe(data => {
        this.users = data;
        for ( const user of this.users ) {
          console.log(user);
        }
      }, error => {
        console.log(error);
      });



    //   this.http.get('https://signorawareapi.azurewebsites.net/api/orders').
    //   subscribe(data => {
    //     this.orderDetails = data;
    //   },
    //     err => { console.log(err); }
    //   );
    //   this.http.get('https://signorawareapi.azurewebsites.net/api/Transaactions').
    //   subscribe(data => {
    //   this.transactionDetails = data;
    // });
  }

  expand_table1() {
    this.table1 = !this.table1;
    this.table2 = false;
    this.table3 = false;
    this.table4 = false;
    this.table5 = false;
    this.table6 = false;
    this.isTrue1 = !this.isTrue1;
  }
  expand_table2() {
    this.table1 = false;
    this.table3 = false;
    this.table4 = false;
    this.table5 = false;
    this.table6 = false;
    this.table2 = !this.table2;
    this.isTrue2 = !this.isTrue2;
  }
  expand_table3() {
    this.table3 = !this.table3;
    this.table2 = false;
    this.table1 = false;
    this.table4 = false;
    this.table5 = false;
    this.table6 = false;
    this.isTrue3 = !this.isTrue3;

  }
  expand_table4() {
    this.table2 = false;
    this.table3 = false;
    this.table1 = false;
    this.table5 = false;
    this.table6 = false;

    this.table4 = !this.table4;
    this.isTrue4 = !this.isTrue4;
  }
  expand_table5() {
    this.table5 = !this.table5;
    this.table1 = false;
    this.table2 = false;
    this.table3 = false;
    this.table4 = false;
    this.table6 = false;
    this.isTrue5 = !this.isTrue5;

  }
  expand_table6() {
    this.table1 = false;
    this.table2 = false;
    this.table3 = false;
    this.table4 = false;
    this.table5 = false;
    this.table6 = !this.table6;
    this.isTrue6 = !this.isTrue6;
  }
  ToProfile(user_id: any) {
    this.router.navigate(['/user-profile-detail']);
    this.dynamicapiservice.setSelectedUser(user_id);
  }
  // ToProductDetails($id: any , ASIN: any) {
  //   // alert($id + ASIN);
  //   this.router.navigate(['/product-details']);
  //   this.dynamicapiservice.setSelectedProduct($id, ASIN);
  // }
}

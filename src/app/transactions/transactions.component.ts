import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
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

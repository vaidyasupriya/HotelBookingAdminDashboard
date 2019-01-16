import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  showCouponsForm = false;
  isCouponTrue = true;
  showCouponsList = true;
  showCouponRemovalForm = false;

  showFindButton = true;
  showFindLabel = false;
  showdeleteButton = false;

  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  openAddCoupons() {
    this.showCouponsForm = !this.showCouponsForm;
    window.scrollTo(0, 0);
  }
  openRemoveCoupons() {
    this.showCouponRemovalForm = !this.showCouponRemovalForm;
  }
  expand_CouponsTable() {
    this.isCouponTrue = !this.isCouponTrue;
    this.showCouponsList = !this.showCouponsList;
  }
}

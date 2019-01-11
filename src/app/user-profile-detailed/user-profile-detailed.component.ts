import { Component, OnInit } from '@angular/core';
import { dynamicApiService } from '../../app/shared/dynamicApi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile-detailed',
  templateUrl: './user-profile-detailed.component.html',
  styleUrls: ['./user-profile-detailed.component.scss']
})
export class UserProfileDetailedComponent implements OnInit {
  selectedUserID: any;
  userdetails: any;
  userID: any;

  //
  user_FirstName: any;
  user_LastName: any;
  user_Age: any;
  user_Email: any;
  user_Id: any;
  user_Phone: any;

  user_BillingAddressLine1: any;
  user_BillingAddressLine2: any;
  user_BillingAddressCity: any;
  user_BillingAddressState: any;
  user_BillingAddressCountry: any;
  user_BillingAddressZipcode: any;

  user_ShippingAddressCity: any;
  user_ShippingAddressCountry: any;
  user_ShippingAddressLine1: any;
  user_ShippingAddressLine2: any;
  user_ShippingAddressState: any;
  user_ShippingAddressZipcode: any;
  //
  orderDetailes: any;
  constructor(private http: HttpClient, private dynamicapiservice: dynamicApiService) { }

  ngOnInit() {

    this.dynamicapiservice.currentProductASIN.
  subscribe(selectedUserID => this.selectedUserID = selectedUserID);
  this.http.get('https://signorawareapi.azurewebsites.net/api/users').
  subscribe(data => {
    this.userdetails = data;
    for (const userdetail of this.userdetails) {
        if (this.selectedUserID === userdetail.$id) {
          this.orderDetailes = userdetail.Orders;
          for (const orderDetail of this.orderDetailes) {
            // console.log(orderDetail.OrderNumber);
          }

          this.userID = userdetail.$id;
          this.user_Age = userdetail.Age;
          this.user_BillingAddressCity = userdetail.BillingAddressCity;
          this.user_BillingAddressCountry = userdetail.BillingAddressCountry;
          this.user_BillingAddressLine1 = userdetail.BillingAddressLine1;
          this.user_BillingAddressLine2 = userdetail.BillingAddressLine2;
          this.user_BillingAddressState = userdetail.BillingAddressState;
          this.user_BillingAddressZipcode = userdetail.BillingAddressZipcode;
          this.user_Email = userdetail.Email;
          this.user_FirstName = userdetail.FirstName;
          this.user_Id = userdetail.Id;
          this.user_LastName = userdetail.LastName;
          this.user_Phone = userdetail.Phone;
          this.user_ShippingAddressCity = userdetail.ShippingAddressCity;
          this.user_ShippingAddressCountry = userdetail.ShippingAddressCountry;
          this.user_ShippingAddressLine1 = userdetail.ShippingAddressLine1;
          this.user_ShippingAddressLine2 = userdetail.ShippingAddressLine2;
          this.user_ShippingAddressState = userdetail.ShippingAddressState;
          this.user_ShippingAddressZipcode = userdetail.ShippingAddressZipcode;
        }
    }
  });
  }

}

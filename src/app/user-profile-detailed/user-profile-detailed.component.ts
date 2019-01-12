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

  //
  userId: any;
  user_FirstName: any;
  user_LastName: any;
  user_Email: any;
  user_Phone: any;
  user_Address: any;
  user_DateOfBirth: any;
  user_FacebookId: any;
  user_GoogleId: any;
  user_Nationality: any;
  //
  orderDetailes: any;
  constructor(private http: HttpClient, private dynamicapiservice: dynamicApiService) { }

  ngOnInit() {

    this.dynamicapiservice.currentProductASIN.
  subscribe(selectedUserID => this.selectedUserID = selectedUserID);
  this.http.get('https://doyenowebapp2.azurewebsites.net/api/users').
  subscribe(data => {
    this.userdetails = data;
    console.log(this.selectedUserID);

    for (const userdetail of this.userdetails) {
        if (this.selectedUserID === userdetail.Id) {
          // this.orderDetailes = userdetail.Orders;
          console.log(userdetail);

          // for (const orderDetail of this.orderDetailes) {
          //   console.log(orderDetail.OrderNumber);
          // }
          this.userId = userdetail.Id;
          this.user_Address = userdetail.Address;
          this.user_DateOfBirth = userdetail.DateOfBirth;
          this.user_Email = userdetail.Email;
          this.user_FirstName = userdetail.FirstName;
          this.user_LastName = userdetail.LastName;
          this.user_Phone = userdetail.Phone;
          this.user_GoogleId = userdetail.GoogleId;
          this.user_FacebookId = userdetail.FacebookId;
          this.user_Nationality = userdetail.Nationality;
        }
    }
  });
  }

}

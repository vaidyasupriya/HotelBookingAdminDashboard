import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-dashboard-profile-page',
  templateUrl: './dashboard-profile-page.component.html',
  styleUrls: ['./dashboard-profile-page.component.scss']
})
export class DashboardProfilePageComponent implements OnInit {
  showFindButton = true;
  showFindLabel = false;
  showdeleteButton = false;
  tokens: any;
  userAccessData: any;
  users: any;
  adminName: any;
  admin_$id: any;
  admin_Address: any;
  admin_DateOfBirth: any;
  admin_Email: any;
  admin_FacebookId: any;
  admin_FirstName: any;
  admin_GoogleId: any;
  admin_Id: any;
  admin_LastName: any;
  admin_Nationality: any;
  admin_Phone: any;

    // progress bar
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    bufferValue = 100;
    loading = true;
     // progress bar
     values: any;

  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.loading = true;
    this.userAccessData = JSON.parse(localStorage.getItem('api-token'));
    console.log(this.userAccessData );
    this.adminName = this.userAccessData.userName;
    console.log(this.adminName);
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/users').
          subscribe(data => {
            this.users = data;
            for ( const user of this.users ) {
              console.log(user);
              if (this.adminName === user.Email ) {
                console.log(user);
                this.admin_$id = user.$id;
                this.admin_Address = user.Email;
                this.admin_DateOfBirth = user.DateOfBirth;
                this.admin_Email = user.Email;
                this.admin_FacebookId = user.FacebookId;
                this.admin_GoogleId = user.GoogleId;
                this.admin_Id = user.Id;
                this.admin_LastName = user.LastName;
                this.admin_FirstName = user.FirstName;
                this.admin_Nationality = user.Nationality;
                this.admin_Phone = user.Phone;
                this.loading = false;

              }
            }
          }, error => {
            console.log(error);
          });
          const dynamicUrl = 'https://doyenodevtest.azurewebsites.net/api/GetHotels/' + '3'+ '/' + '2019-05-24' + '/' + '2019-05-25' + '/' + 'hotel_code' + '/' + 'GER' + '/' + 'EUR';
          // dynamicUrl = 'http://localhost:55117/api/GetHotels/' + selectedDestination + '/' +  selectedDestinationCountry + '/' +  checkInDate + '/' + checkOutDate + '/' + roomsToBook + '/' + room1_data + '/' + room2_data + '/' + room3_data + '/' + room4_data + '/' + room5_data;
          console.log(dynamicUrl);
          const postHeaders = new HttpHeaders();
          postHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
          postHeaders.append('Access-Control-Allow-Origin', '*');
          postHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          postHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
          this.http.get(dynamicUrl, {
            headers: postHeaders
          }).
          subscribe(data => {
            this.values = data;
            console.log(this.values);
           
          }, error => {
            console.log('Error', error);
          });
  }
  logout() {
    this.router.navigate(['']);
  }
  userDataSubmit() {
    // alert('button clicked');
    this.showFindButton = false;
    this.showFindLabel = true;
    this.showdeleteButton = true;
  }
}

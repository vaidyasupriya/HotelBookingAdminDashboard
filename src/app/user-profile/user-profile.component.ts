import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { dynamicApiService } from '../../app/shared/dynamicApi.service';
import { FormBuilder,  FormGroup, Validators, FormControl,  FormArray } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  values: any;
  users: any;
  // progress bar
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 100;
  loading = true;
   // progress bar
  constructor( private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService) {
   }
  ngOnInit() {
    this.loading = true;
          this.http.get('https://doyenowebapp2.azurewebsites.net/api/users').
          subscribe(data => {
            this.users = data;
            this.loading = false;
            for ( const user of this.users ) {
              console.log(user);
            }
          }, error => {
            console.log(error);
          });
  }
  toProfile( user_id: any ) {
    this.router.navigate(['/adminLayout/user-profile-detail']);
    this.dynamicapiservice.setSelectedUser(user_id);
  }
}

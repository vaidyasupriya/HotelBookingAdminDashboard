import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfo } from './LoginInfo';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
// const MOBILE_REGEX = /^([0|\+[0-9]{123,456})?([7-9][0-9]{9})$/;
const NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$/;

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  existingMember: LoginInfo = new LoginInfo();
  loginForm: FormGroup;
  users: any;
   Swal = require('sweetalert2');
  constructor(private router: Router , private http: HttpClient, private fb: FormBuilder,
    public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]]
    });
  }

  ngOnInit() {
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/users').
    subscribe(data => {
      this.users = data;
      for ( const user of this.users ) {
        console.log(user);
      }
    }, error => {
      console.log(error);
    });
  }
  // login() {
  //   this.router.navigate(['/adminLayout/dashboard']);

  // }
  login() {
    let loginSuccessful = false;
    const postHeaders = new HttpHeaders();
    postHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    postHeaders.append('Access-Control-Allow-Origin', '*');
    postHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    postHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    this.existingMember.username = this.loginForm.get('email').value;
    this.existingMember.password = this.loginForm.get('password').value;
    this.existingMember.grant_type = 'password';
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('client_id', '<CLIENT_ID>');
    urlSearchParams.append('client_secret', '<CLIENT_SECRET>');
    urlSearchParams.append('redirect_uri', 'https://doyenowebapp2.azurewebsites.net/callback');
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('userName', this.existingMember.username);
    urlSearchParams.append('password', this.existingMember.password);
    const body = urlSearchParams.toString();
    // this.http.post('http://localhost:55117/token', body, {headers: postHeaders} ).
    this.http.post('https://doyenowebapp2.azurewebsites.net/token', body, { headers: postHeaders }).
      subscribe((data: any) => {
        const accountData: any = JSON.stringify(data);
        localStorage.setItem('api-token', JSON.stringify(data));
        localStorage.setItem('email', accountData.userName);
        // alert(localStorage.getItem('api-token').toString());
        console.log(localStorage.getItem('app-token'));
        loginSuccessful = true;
      },
        err => {
          // const Swal = require('sweetalert2');
          this.dialog.open( LoginAlertBoxComponent);
          // alert(' UserId not found. Please enter correct credentials.');
          console.log(err);
          loginSuccessful = false;
          this.loginForm.reset();
          // alert(' UserId not found. Please enter correct credentials.');
        }, () => {
          if (loginSuccessful) {
            this.router.navigate(['/adminLayout/dashboard']);
          }
        }
      );
  }
}

@Component({
  selector: 'app-alert-example-dialog',
  templateUrl: 'alert.html',
})
export class LoginAlertBoxComponent {
  constructor() {}
}

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
  users: any;
  orders: any;
  totalOrders: any;
  // isUserTrue = true;
  // showUserList = true;
  // showUserForm = false;
  // orderId: any;
  // showUserRemovalForm = false;
  removeUserForm: FormGroup;
  // foundIdValue: any;
  // foundFNameValue: any;
  // foundLNameValue: any;

  // showFindButton = true;
  // showFindLabel = false;
  // showdeleteButton = false;


  constructor( private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService) {
   }

  ngOnInit() {
    this.http.get('https://signorawareapi.azurewebsites.net/api/users').
      subscribe(data => {
      this.users = data;
      for ( const user of this.users) {
         this.totalOrders = Object.keys(user.Orders).length;
         console.log(user.Orders);
       }
      },
        err => { console.log(err); }
      );

      this.removeUserForm = new FormGroup({
        'userId': new FormControl(null, [Validators.required]),
      });
  }



  ToProfile(user_id: any) {
    this.router.navigate(['/user-profile-detail']);
    this.dynamicapiservice.setSelectedUser(user_id);
  }
  // expand_UserTable() {
  //   this.isUserTrue = !this.isUserTrue;
  //   this.showUserList = !this.showUserList;
  // }

  // openAddUser() {
  //   this.showUserForm = !this.showUserForm;
  //   window.scrollTo( 0 , 0 );

  // }
  // newUserSubmit() {
  //   alert('User data is submitted');

  // }
  // openRemoveUser() {
  //   this.showUserRemovalForm = !this.showUserRemovalForm;
  // }
  // userFindToRemove() {
  // //  console.log(this.removeProductForm.value.asin);
  //     this.http.get('https://signorawareapi.azurewebsites.net/api/users').
  //     subscribe(data => {
  //       this.users = data;
  //       console.log(this.removeUserForm);
  //        const totalLength = Object.keys(this.users).length;
  //        console.log(this.users);
  //         for (const user of this.users) {
  //          if (this.removeUserForm.value.userId === user.$id) {
  //             this.foundIdValue = user.Id;
  //             console.log(this.removeUserForm.value.userId);
  //             this.foundFNameValue = user.FirstName;
  //             this.foundLNameValue = user.LastName;
  //             this.showFindButton = false;
  //             this.showFindLabel = true;
  //             this.showdeleteButton = true;
  //             console.log(this.foundIdValue);

  //             for (const order of user.Orders) {
  //               console.log(order.Id);
  //               this.orderId = order.Id;
  //              }
  //          }
  //         }
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  // userRemoval(from, align) {
  //   this.http.delete('https://signorawareapi.azurewebsites.net/api/users/' + this.foundIdValue).
  //   subscribe(data => {
  //   this.users = data;
  //   window.location.reload();
  //   },
  //     err => { console.log(err); }
  //   );



  //   if ( this.foundIdValue === this.temp ) {
  //     this.http.get('https://signorawareapi.azurewebsites.net/api/orders' ).
  //     subscribe(data => {
  //     this.orders = data;
  //     for ( const order of this.orders) {
  //       // window.location.reload();

  //     }
  //     },
  //       err => { console.log(err); }
  //     );
  //   }


  //   // this.http.delete('https://signorawareapi.azurewebsites.net/api/orders/').
  //   // subscribe(data => {
  //   // this.orders = data;
  //   // for (  const order of this.orders) {
  //   //   console.log(order);
  //   // }
  //   // window.location.reload();
  //   // },
  //   //   err => { console.log(err); }
  //   // );
  //   //   $.notify({
  //   //       icon: 'notifications',
  //   //       message: this.foundFNameValue + ' ' + this.foundLNameValue + 'is Deleted from records!'
  //   //   }, {
  //   //       type: 'warning',
  //   //       timer: 4000,
  //   //       placement: {
  //   //           from: from,
  //   //           align: align
  //   //       },
  //   //   });
  // }
}

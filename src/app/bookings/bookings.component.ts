import {Component,  OnInit, Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router';
import { dynamicApiService} from '../shared/dynamicApi.service';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  MatExpansionModule
} from '@angular/material/expansion';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import {  BookingsAdd } from './bookingsAdd';
const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
const MOBILE_REGEX = /^([0|\+[0-9]{123,456})?([7-9][0-9]{9})$/;
const NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$/;
declare var $: any;

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  showFindButton = true;
  showFindLabel = false;
  showdeleteButton = false;

  panelOpenState = false;
  isbookingTrue = false;
  showbookingList = true;
  showbookingForm = false;
  showbookingRemovalForm = false;
  addbookingForm: FormGroup;
  userInfo: FormGroup;
  removebookingForm: FormGroup;
  bookings: any;
  transactions: any;
  id: any;
  product: any[] = [];
  items: any[] = [];
  list: any;
  abc: Array < any > = [];
  @Output() toDetails = new EventEmitter();
  newbooking: BookingsAdd = new BookingsAdd();
  foundAsinValue: any;
  foundIdValue: any;
  constructor(private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService) {}
  ngOnInit() {
    this.http.get('https://signorawareapi.azurewebsites.net/api/products').
    subscribe(data => {
        this.bookings = data;
        const totalLength = Object.keys(this.bookings).length;
        for (const product of this.bookings) {
          this.id = product.$id;
          console.log(product);
        }
      },
      err => {
        console.log(err);
      }
    );
    /// for pushing the code to db
    this.addbookingForm = new FormGroup({
      'asin': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'itemCode': new FormControl(null, [Validators.required]),
      'mrp': new FormControl(null, [Validators.required]),
      'contents': new FormControl(null, [Validators.required]),
      'bullet_1': new FormControl(null, [Validators.required]),
      'bullet_2': new FormControl(null, [Validators.required]),
      'bullet_3': new FormControl(null, [Validators.required]),
      'bullet_4': new FormControl(null, [Validators.required]),
      'bullet_5': new FormControl(null, [Validators.required]),
      'bullet_6': new FormControl(null, [Validators.required]),
    });
    /// for pushing the code to db
    this.removebookingForm = new FormGroup({
      'asin': new FormControl(null, [Validators.required]),
    });
    /// for pushing the code to db
  }
  ToBookingDetails($id: any, ASIN: any) {
    this.router.navigate(['/booking-details']);
    // this.dynamicapiservice.setSelectedProduct($id, ASIN);
  }
  openAddbooking() {
    this.showbookingForm = !this.showbookingForm;
    window.scrollTo(0, 0);
  }
  newbookingSubmit(from, align) {
    alert('if is submitted');
    this.newbooking.asin = this.addbookingForm.get('asin').value;
    this.newbooking.name = this.addbookingForm.get('name').value;
    this.newbooking.itemCode = this.addbookingForm.get('itemCode').value;
    this.newbooking.mrp = this.addbookingForm.get('mrp').value;
    this.newbooking.contents = this.addbookingForm.get('contents').value;
    this.newbooking.bullet_1 = this.addbookingForm.get('bullet_1').value;
    this.newbooking.bullet_2 = this.addbookingForm.get('bullet_2').value;
    this.newbooking.bullet_3 = this.addbookingForm.get('bullet_3').value;
    this.newbooking.bullet_4 = this.addbookingForm.get('bullet_4').value;
    this.newbooking.bullet_5 = this.addbookingForm.get('bullet_5').value;
    this.newbooking.bullet_6 = this.addbookingForm.get('bullet_6').value;
    console.log(this.newbooking);
    this.http.post('https://signorawareapi.azurewebsites.net/api/products/', this.newbooking).
    subscribe((data: any) => {
        const addProduct: any = JSON.stringify(data);
        console.log(addProduct);
        window.location.reload();
      },
      (err) => {
        const errorData: any = JSON.stringify(err.error.ModelState);
        console.log(err.error.ModelState);
        alert('Error' + errorData);
      }
    );
    $.notify({
      icon: 'notifications',
      message: 'Your product is added successfully',
  }, {
      type: 'warning',
      timer: 4000,
      placement: {
          from: from,
          align: align
      },
  });
  }

  expand_bookingTable() {
    this.isbookingTrue = !this.isbookingTrue;
    this.showbookingList = !this.showbookingList;
  }

  openRemovebooking() {
    this.showbookingRemovalForm = !this.showbookingRemovalForm;
  }
  bookingFindToRemove() {
    console.log(this.removebookingForm.value.asin);
    this.http.get('https://signorawareapi.azurewebsites.net/api/products').
    subscribe(data => {
        this.bookings = data;
        const totalLength = Object.keys(this.bookings).length;
        for (const product of this.bookings) {
         if (this.removebookingForm.value.asin === product.ASIN) {
            this.foundAsinValue = product.Name;
            this.foundIdValue = product.Id;
            this.showFindButton = false;
            this.showFindLabel = true;
            this.showdeleteButton = true;
         }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  productRemoval(from, align) {
    this.http.delete('https://signorawareapi.azurewebsites.net/api/products/' + this.foundIdValue).
    subscribe(data => {
        this.bookings = data;
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
      $.notify({
          icon: 'notifications',
          message: this.foundAsinValue + ' ' + 'is Deleted from the records!'
      }, {
          type: 'warning',
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
      });
  }
}

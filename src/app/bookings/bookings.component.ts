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
  isProductTrue = false;
  showProductList = true;
  showProductForm = false;
  showProductRemovalForm = false;
  addProductForm: FormGroup;
  userInfo: FormGroup;
  removeProductForm: FormGroup;
  products: any;
  transactions: any;
  id: any;
  product: any[] = [];
  items: any[] = [];
  list: any;
  abc: Array < any > = [];
  @Output() toDetails = new EventEmitter();
  newProduct: BookingsAdd = new BookingsAdd();
  foundAsinValue: any;
  foundIdValue: any;
  constructor(private router: Router, private http: HttpClient, private dynamicapiservice: dynamicApiService) {}
  ngOnInit() {
    this.http.get('https://signorawareapi.azurewebsites.net/api/products').
    subscribe(data => {
        this.products = data;
        const totalLength = Object.keys(this.products).length;
        for (const product of this.products) {
          this.id = product.$id;
          console.log(product);
        }
      },
      err => {
        console.log(err);
      }
    );
    /// for pushing the code to db
    this.addProductForm = new FormGroup({
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
    this.removeProductForm = new FormGroup({
      'asin': new FormControl(null, [Validators.required]),
    });
    /// for pushing the code to db
  }
  ToProductDetails($id: any, ASIN: any) {
    this.router.navigate(['/product-details']);
    this.dynamicapiservice.setSelectedProduct($id, ASIN);
  }
  openAddProducts() {
    this.showProductForm = !this.showProductForm;
    window.scrollTo(0, 0);
  }
  newProductSubmit(from, align) {
    alert('if is submitted');
    this.newProduct.asin = this.addProductForm.get('asin').value;
    this.newProduct.name = this.addProductForm.get('name').value;
    this.newProduct.itemCode = this.addProductForm.get('itemCode').value;
    this.newProduct.mrp = this.addProductForm.get('mrp').value;
    this.newProduct.contents = this.addProductForm.get('contents').value;
    this.newProduct.bullet_1 = this.addProductForm.get('bullet_1').value;
    this.newProduct.bullet_2 = this.addProductForm.get('bullet_2').value;
    this.newProduct.bullet_3 = this.addProductForm.get('bullet_3').value;
    this.newProduct.bullet_4 = this.addProductForm.get('bullet_4').value;
    this.newProduct.bullet_5 = this.addProductForm.get('bullet_5').value;
    this.newProduct.bullet_6 = this.addProductForm.get('bullet_6').value;
    console.log(this.newProduct);
    this.http.post('https://signorawareapi.azurewebsites.net/api/products/', this.newProduct).
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

  expand_ProductTable() {
    this.isProductTrue = !this.isProductTrue;
    this.showProductList = !this.showProductList;
  }

  openRemoveProducts() {
    this.showProductRemovalForm = !this.showProductRemovalForm;
  }
  productFindToRemove() {
    console.log(this.removeProductForm.value.asin);
    this.http.get('https://signorawareapi.azurewebsites.net/api/products').
    subscribe(data => {
        this.products = data;
        const totalLength = Object.keys(this.products).length;
        for (const product of this.products) {
         if (this.removeProductForm.value.asin === product.ASIN) {
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
        this.products = data;
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

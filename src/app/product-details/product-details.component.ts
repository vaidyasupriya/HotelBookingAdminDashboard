import { Component, OnInit } from '@angular/core';
import { dynamicApiService } from '../../app/shared/dynamicApi.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   id123: any;
   products: any;
   id: any;
   selectedProduct: any;
   selectedProductDetails: any;
   selectedImageSource: any;
   productId: any;
   productASIN: any;
   productName: any;
   productItemCode: any;
   productMrp: any;
   productContents: any;
   productData1: any;
   productData2: any;
   productData3: any;
   productData4: any;
   productData5: any;
   productData6: any;
  constructor( private http: HttpClient, private dynamicapiservice: dynamicApiService ) { }

  ngOnInit() {
  this.dynamicapiservice.currentProductASIN.
  subscribe(selectedProduct => this.selectedProduct = selectedProduct);
this.dynamicapiservice.currentImageSrc.
  subscribe(selectedImageSource => this.selectedImageSource = selectedImageSource);
  this.http.get('https://signorawareapi.azurewebsites.net/api/products').
  subscribe(data => {
    this.products = data;
    // console.log(this.selectedProduct);
    for (const product of this.products) {
      for (let i = 0; i < 10; i++) {
        if (this.selectedProduct === product.$id) {
          this.selectedProductDetails = product;
          this.productId = product.$id;
          this.productASIN = product.ASIN;
          this.productName = product.Name;
          this.productItemCode = product.ItemCode;
          this.productMrp = product.MRP;
          this.productContents = product.Contents;
          this.productData1 = product.Bullet_1;
          this.productData2 = product.Bullet_2;
          this.productData3 = product.Bullet_3;
          this.productData4 = product.Bullet_4;
          this.productData5 = product.Bullet_5;
          this.productData6 = product.Bullet_6;
        }
      }
    }
  });
 }
  showNextComponent($event) {
    this.id123 = $event;
  }
}

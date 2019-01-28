import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn : 'root',
})

export class dynamicApiService {
    productsArray = [];
    cartProducts = [];
    cartProductImages = [];
    cartProductQuantity = [];
    cartTotalCosting: number;
    private productASIN = new BehaviorSubject('');
    currentProductASIN = this.productASIN.asObservable();
    private bookingId = new BehaviorSubject('');
    currentbookingId = this.bookingId.asObservable();



    private imageSource = new BehaviorSubject('');
    currentImageSrc = this.imageSource.asObservable();
    setSelectedProduct(prodctASIN: string, imageSource: string) {
        this.productASIN.next(prodctASIN);
        this.imageSource.next(imageSource);
        this.productsArray.push({'ASIN': prodctASIN, 'image': imageSource});
    }
    setSelectedBooking(bookingId: string) {
        this.bookingId.next(bookingId);
        this.productsArray.push({'bookingId': bookingId});
    }

    setSelectedUser(userId: any) {
        this.productASIN.next(userId);
        this.productsArray.push({'$id': userId});
    }

    getSelectedProduct() {
        return this.productsArray;
    }
    setCartProducts(cart: any) {
        this.cartProducts = cart;
    }
    getCartProducts() {
        return this.cartProducts;
    }
    setCartProductImages(images: any) {
        this.cartProductImages = images;
    }
    getCartProductImages() {
        return this.cartProductImages;
    }
    setCartProductQuantity(quantity: any) {
        this.cartProductQuantity = quantity;
    }
    getCartProductQuantity() {
        return this.cartProductQuantity;
    }
    setCartTotalCosting(costing: number) {
        this.cartTotalCosting = costing;
    }
    getCartTotalCosting() {
        return this.cartTotalCosting;
    }
}

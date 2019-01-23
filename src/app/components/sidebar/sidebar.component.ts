import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/adminLayout/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/adminLayout/user-profile', title: 'User List',  icon: 'person', class: '' },
    { path: '/adminLayout/bookings', title: 'Bookings',  icon: 'redeem', class: '' },
    { path: '/adminLayout/trips', title: 'Trips',  icon: 'swap_horiz', class: '' },
    { path: '/adminLayout/coupons', title: 'Coupons',  icon: 'content_paste', class: '' },
    { path: '/adminLayout/margin', title: 'Margin',  icon: 'content_paste', class: '' },
    { path: '/adminLayout/travellers', title: 'Travellers',  icon: 'content_paste', class: '' },
    // { path: '/table-list', title: 'Table Archive',  icon: 'library_books', class: '' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

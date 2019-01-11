import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { BookingsComponent } from '../../bookings/bookings.component';
import { TripsComponent } from '../../trips/trips.component';
import { UserProfileDetailedComponent } from '../../user-profile-detailed/user-profile-detailed.component';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { CouponsComponent } from '../../coupons/coupons.component';
import { DashboardProfilePageComponent } from '../../dashboard-profile-page/dashboard-profile-page.component';
import { LoginComponent } from '../../login/login.component';
import { MarginComponent } from '../../margin/margin.component';
import { TravellersComponent } from '../../travellers/travellers.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'bookings',     component: BookingsComponent },
    { path: 'trips',          component: TripsComponent },
    { path: 'user-profile-detail',   component: UserProfileDetailedComponent },
    { path: 'product-details',   component: ProductDetailsComponent },
    { path: 'coupons',   component: CouponsComponent },
    { path: 'profile',   component: DashboardProfilePageComponent },
    { path: 'login',   component: LoginComponent },
    { path: 'margin',   component: MarginComponent },
    { path: 'travellers',   component: TravellersComponent },
];

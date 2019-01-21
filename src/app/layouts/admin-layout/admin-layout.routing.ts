import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { BookingsComponent } from '../../bookings/bookings.component';
import { TripsComponent } from '../../trips/trips.component';
import { UserProfileDetailedComponent } from '../../user-profile-detailed/user-profile-detailed.component';
import { CouponsComponent } from '../../coupons/coupons.component';
import { DashboardProfilePageComponent } from '../../dashboard-profile-page/dashboard-profile-page.component';
import { LoginComponent } from '../../login/login.component';
import { MarginComponent } from '../../margin/margin.component';
import { TravellersComponent } from '../../travellers/travellers.component';
import { TripsDetailsComponent } from '../../trips/trips-details/trips-details.component';
import { BookingDetailsComponent } from '../../bookings/booking-details/booking-details.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'bookings',     component: BookingsComponent },
    { path: 'trips',          component: TripsComponent },
    { path: 'tripsDetails',   component: TripsDetailsComponent },
    { path: 'user-profile-detail',   component: UserProfileDetailedComponent },
    { path: 'coupons',   component: CouponsComponent },
    { path: 'profile',   component: DashboardProfilePageComponent },
    { path: 'margin',   component: MarginComponent },
    { path: 'travellers',   component: TravellersComponent },
    { path: 'booking-details',   component: BookingDetailsComponent },
];

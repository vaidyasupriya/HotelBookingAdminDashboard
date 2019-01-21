import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { BookingsComponent } from '../../bookings/bookings.component';
import { TripsComponent } from '../../trips/trips.component';
import { UserProfileDetailedComponent } from '../../user-profile-detailed/user-profile-detailed.component';
import { CouponsComponent } from '../../coupons/coupons.component';
import { DashboardProfilePageComponent } from '../../dashboard-profile-page/dashboard-profile-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from '../../login/login.component';
import { MarginComponent } from '../../margin/margin.component';
import { TravellersComponent } from '../../travellers/travellers.component';
import { TripsDetailsComponent } from '../../trips/trips-details/trips-details.component';
import { BookingDetailsComponent } from '../../bookings/booking-details/booking-details.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    BookingsComponent,
    TripsComponent,
    UserProfileDetailedComponent,
    CouponsComponent,
    DashboardProfilePageComponent,
    MarginComponent,
    TravellersComponent,
    TripsDetailsComponent,
    BookingDetailsComponent,
  ]
})

export class AdminLayoutModule {}

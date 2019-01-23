import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TripsComponent } from './trips/trips.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserProfileDetailedComponent } from './user-profile-detailed/user-profile-detailed.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material';

import { MatDialogModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule } from '@angular/material/expansion';
import { CouponsComponent } from './coupons/coupons.component';
import {MatCardModule} from '@angular/material/card';
import { DashboardProfilePageComponent } from './dashboard-profile-page/dashboard-profile-page.component';
import { MarginComponent } from './margin/margin.component';
import { TravellersComponent } from './travellers/travellers.component';
import { TripsDetailsComponent } from './trips/trips-details/trips-details.component';
import { BookingDetailsComponent } from './bookings/booking-details/booking-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { ExcelService } from './services/excel.service';
import { LoginAlertBoxComponent } from './login/login.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
   MatToolbarModule,
   MatCardModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   HttpClientModule,
   MatExpansionModule,
   MatProgressBarModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LoginAlertBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatExpansionModule],
  entryComponents: [LoginAlertBoxComponent],
})
export class AppModule { }

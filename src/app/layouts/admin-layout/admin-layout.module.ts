import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ProductComponent } from '../../product/product.component';
import { TransactionsComponent } from '../../transactions/transactions.component';
import { UserProfileDetailedComponent } from '../../user-profile-detailed/user-profile-detailed.component';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { OrdersComponent } from '../../orders/orders.component';
import { DashboardProfilePageComponent } from '../../dashboard-profile-page/dashboard-profile-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from '../../login/login.component';

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
    ProductComponent,
    TransactionsComponent,
    UserProfileDetailedComponent,
    ProductDetailsComponent,
    OrdersComponent,
    DashboardProfilePageComponent,
    LoginComponent,
  ]
})

export class AdminLayoutModule {}

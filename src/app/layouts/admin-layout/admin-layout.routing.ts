import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ProductComponent } from '../../product/product.component';
import { TransactionsComponent } from '../../transactions/transactions.component';
import { UserProfileDetailedComponent } from '../../user-profile-detailed/user-profile-detailed.component';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { OrdersComponent } from '../../orders/orders.component';
import { DashboardProfilePageComponent } from '../../dashboard-profile-page/dashboard-profile-page.component';
import { LoginComponent } from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'product',     component: ProductComponent },
    { path: 'transaction',          component: TransactionsComponent },
    { path: 'user-profile-detail',   component: UserProfileDetailedComponent },
    { path: 'product-details',   component: ProductDetailsComponent },
    { path: 'orders',   component: OrdersComponent },
    { path: 'profile',   component: DashboardProfilePageComponent },
    { path: 'login',   component: LoginComponent },
];

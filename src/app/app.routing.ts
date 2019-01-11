import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  // {path: '',  component: LoginComponent, pathMatch: 'full', },
// try 1
  // {path: 'dashboard', component: DashboardComponent, children: [
  //   { path: '',
  //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' },
  //   ]},
// try 2

//    { path: 'layoutModule', component: AdminLayoutComponent, children: [
//      { path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' },
// ]},

// try 3
//   { path: 'layoutModule', component: AdminLayoutComponent,
//   children: [  { path: '',
//    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
//   },
//   { path: '',
//   loadChildren: './dashboard/dashboard.component#DashboardComponent'
//  }
// ]},



  {path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: '', component: AdminLayoutComponent, children: [  { path: '',
   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

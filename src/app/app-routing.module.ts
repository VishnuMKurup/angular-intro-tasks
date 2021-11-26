import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { CustomValidatorComponent } from './login-form/login-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EmployeeFormComponent } from './test-api-form/test-api-form.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { ViewEmployeeComponent } from './employee-listing/view-employee/view-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'task',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TaskListingComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'custom',
        component: CustomValidatorComponent
      },
      {
        path: 'display',
        component: DisplayBookComponent
      },
      {
        path: 'user',
        component: UserFormComponent
      },
      {
        path: 'employee',
        component: EmployeeFormComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      },
      {
        path: 'contact',
        component: ContactFormComponent
      },
      {
        path: 'employeelisting',
        children: [
          {
            path: '',
            component: EmployeeListingComponent
          },
          {
            path: ':id',
            component: ViewEmployeeComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { CustomValidatorComponent } from './login-form/login-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListingComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

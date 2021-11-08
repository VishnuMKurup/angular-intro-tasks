import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { CustomValidatorComponent } from './login-form/login-form.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListingComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
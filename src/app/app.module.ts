import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AddressComponent } from './address/address.component';
import { AddressFormComponent } from './address/address-form/address-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ValidationComponent } from './shipping/validation/validation.component';
import { ValidationDirective } from './validation.directive';


const appRoutes: Routes = [
  {
    path: '',
    component: ShippingComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'address',
    component: AddressComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgbModule,
    TextMaskModule
  ],
  declarations: [AppComponent, AddressComponent, ContactFormComponent, AddressFormComponent, ShippingComponent, ValidationComponent, ValidationDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}

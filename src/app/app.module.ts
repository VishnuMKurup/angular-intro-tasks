import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AddressComponent } from './address/address.component';
import { AddressFormComponent } from './address/address-form/address-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ValidationDirective } from './validation.directive';
import { ValidationComponent } from './shared/app-validation/validation.component';
import { CustomValidatorComponent } from './login-form/login-form.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { BookFormComponent } from './display-book/book-form/book-form.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskListingComponent } from './task-listing/task-listing.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    TextMaskModule
  ],
  declarations: [AppComponent,
    AddressComponent,
    ContactFormComponent,
    AddressFormComponent,
    ShippingComponent,
    ValidationComponent,
    ValidationDirective,
    CustomValidatorComponent,
    DisplayBookComponent,
    BookFormComponent,
    TaskListingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

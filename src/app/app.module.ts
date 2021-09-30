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

const appRoutes: Routes = [
  {
    path: '',
    component: ContactFormComponent
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
  declarations: [AppComponent, AddressComponent, ContactFormComponent, AddressFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

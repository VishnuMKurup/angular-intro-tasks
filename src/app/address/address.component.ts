import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  countryList = [
    { code: 'IND', name: 'INDIA' },
    { code: 'USA', name: 'United States Of America' }
  ];
  stateList = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' }
  ]
  addressForm: FormGroup;
  submitted = false;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', 'x', /\d/, /\d/, /\d/, /\d/, /\d/];
  isShowShipping = true;

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.addressForm = this.fb.group({
      'contact_information': this.fb.group({
        'first_name': ['', [Validators.required]],
        'last_name': [''],
        'email': ['', [Validators.required, Validators.email]],
        'phone': ['']
      }),
      'billing_address': this.initAddressForm(),
      'shipping_address': this.initAddressForm()
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  initAddressForm() {
    return this.fb.group({
      'name': ['', [Validators.required]],
      'address_1': ['', [Validators.required]],
      'address_2': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'zip': ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
    }
  }

  onChange(e) {
    if (e.target.checked) {
      this.isShowShipping = false;
      const billingAddress = this.addressForm.get('billing_address').value;
      this.addressForm.get(['shipping_address', 'name']).setValue(billingAddress.name);
      this.addressForm.get(['shipping_address', 'address_1']).setValue(billingAddress.address_1);
      this.addressForm.get(['shipping_address', 'address_2']).setValue(billingAddress.address_2);
      this.addressForm.get(['shipping_address', 'city']).setValue(billingAddress.city);
      this.addressForm.get(['shipping_address', 'state']).setValue(billingAddress.state);
      this.addressForm.get(['shipping_address', 'country']).setValue(billingAddress.country);
      this.addressForm.get(['shipping_address', 'zip']).setValue(billingAddress.zip);
    }
    else {
      this.isShowShipping = true;
      this.addressForm.get('shipping_address').reset();
    }
  }
}

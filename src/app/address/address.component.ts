import { Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private el: ElementRef) { }

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
      'address_2': [''],
      'city': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'zip': ['', [Validators.required]],
      'phone': ['']

    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
    }
    else {
      this.el.nativeElement.querySelectorAll('.ng-invalid').forEach(element => {
        element.classList.add('is-invalid');
      });
    }
  }

  get shippingAddress() {
    return this.addressForm.get('shipping_address') as FormGroup;
  }

  get billingAddress() {
    return this.addressForm.get('billing_address') as FormGroup;
  }

  onChange(e) {
    if (e.target.checked) {
      this.isShowShipping = false;
      this.shippingAddress.setValue(this.billingAddress.value);
    }
    else {
      this.isShowShipping = true;
      this.shippingAddress.reset();
    }
  }
}

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
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" }
  ]
  cityInfo: any[] = [];
  addressForm: FormGroup;
  submitted = false;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', 'x', /\d/, /\d/, /\d/, /\d/, /\d/];;
  selectedCountry: any;
  selectedCountry1: any;

  constructor(private fb: FormBuilder) {
  }

  createForm() {
    this.addressForm = this.fb.group({
      'contact_information': this.fb.group({
        'first_name': ['', [Validators.required]],
        'last_name': [''],
        'email': ['', [Validators.required, Validators.email]],
        'phone': ['']
      }),
      'billing_address':  this.initAddressForm(),
      'shipping_address': this.initAddressForm()
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
  initAddressForm()
  {
    return this.fb.group({
      'name': ['', [Validators.required]],
      'address_1': ['', [Validators.required]],
      'address_2': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'state': [''],
      'country': ['', [Validators.required]],
      'zip': ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
    }
    console.log('Your form data : ', this.addressForm.value);
  }

  onChangeCountry(value) {
    this.selectedCountry = value;
  }
  onChangeCountry1(value) {
    this.selectedCountry1 = value;
  }
}

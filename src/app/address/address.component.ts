import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup ;
  submitted: false;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

 constructor(private fb: FormBuilder) { 
   }

  createForm() {
    this.addressForm = this.fb.group({
      'contact_information': this.fb.group({
        'first_name': ['', [Validators.required]],  
        'last_name': [''],
        'email': ['', [Validators.required, Validators.email]] ,
        'phone': ['']
      }),
      'billing_address': this.fb.group({
        'name': ['', [Validators.required]],
        'address_1': ['', [Validators.required]],
        'address_2': ['', [Validators.required]],
        'state': ['', [Validators.required]],
        'city': ['', [Validators.required]],
        'country': ['', [Validators.required]],
        'zip': ['', [Validators.required]],
      }),
      'shipping_address': this.fb.group({
        'name': ['', [Validators.required]],
        'address_1': ['', [Validators.required]],
        'address_2': ['', [Validators.required]],
        'state': ['', [Validators.required]],
        'city': ['', [Validators.required]],
        'country': ['', [Validators.required]],
        'zip': ['', [Validators.required]],
      })
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
  
  onSubmit() {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
    }
    console.log('Your form data : ', this.addressForm.value );
  }
  
}

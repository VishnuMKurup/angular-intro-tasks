import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingForm: FormGroup;
  submitted: boolean;
  is_shipping_override = false;
  shippingList = [
    { method: 'UPS Ground ' },
    { method: 'UPS Ground Third Party' }
  ];

  constructor(private fb: FormBuilder) { }

   createForm() {
    this.shippingForm = this.fb.group({
      'shipping_method': ['', [Validators.required]],
      'shipping_account_number': ['', [Validators.required]],
      'is_shipping_override': [false],
      'shipping_cost': ['', [Validators.required]]
    });
  }

   ngOnInit(): void {
    this.createForm();
  }

   onSubmit() {
    this.submitted = true;
    if (this.shippingForm.get('shipping_method').value === 'UPS Ground Third Party') {
      this.shippingForm.get('shipping_account_number').enable();
    }
    else {
      this.shippingForm.get('shipping_account_number').disable();
    }
    console.log(this.shippingForm.value);
  }

   onChange(e) {
    if (e.target.checked) {
      this.is_shipping_override = true;
      this.shippingForm.get('shipping_cost').disable();
    }
    else {
      this.is_shipping_override = false;
      this.shippingForm.get('shipping_cost').enable();

    }
  }
}

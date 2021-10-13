import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingForm: FormGroup;
  submitted: boolean;
  shippingList = [];

  constructor(private fb: FormBuilder, private el: ElementRef) { }

  createForm() {
    this.shippingForm = this.fb.group({
      'shipping_method': ['', [Validators.required]],
      'shipping_account_number': [{ value: '', disabled: true }, [Validators.required]],
      'is_shipping_override': [false],
      'shipping_cost': ['', [Validators.required]]
    });
  }

  createList() {
    this.shippingList = [
      { method: 'UPS Ground' },
      { method: 'UPS Ground Third Party' }
    ];
  }

  ngOnInit(): void {
    this.createForm();
    this.createList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
    }
    else {
      this.el.nativeElement.querySelectorAll('.ng-invalid').forEach(element => {
        element.classList.add('is-invalid');
      });
    }
  }

  onChange(e) {
    if (e.target.checked) {
      this.shippingForm.get('shipping_cost').disable();
    }
    else {
      this.shippingForm.get('shipping_cost').enable();
    }
  }

  onShippingMethodChange() {
    if (this.shippingForm.get('shipping_method').value === 'UPS Ground Third Party') {
      this.shippingForm.get('shipping_account_number').enable();
    }
    else {
      this.shippingForm.get('shipping_account_number').disable();
    }
  }
}

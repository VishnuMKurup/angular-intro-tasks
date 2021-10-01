import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html'
})
export class AddressFormComponent implements OnInit {
  @Input() addressValue: any;
  @Input() submitted: boolean;
  formGroup: FormGroup;
  
 countryList = [
    { code: 'IND', name: 'INDIA' },
    { code: 'USA', name: 'United States Of America' }
  ];
  stateList = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" }
  ];
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', 'x', /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  ngOnInit() {
    if (this.addressValue) {
      this.formGroup = this.addressValue as  FormGroup;
    }
  }
}

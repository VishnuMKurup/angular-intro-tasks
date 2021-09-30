import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html'
})
export class AddressFormComponent implements OnInit {
  @Input() formGroupValue: any;
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
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', 'x', /\d/, /\d/, /\d/, /\d/, /\d/];; 

  constructor(
   ) { }

  ngOnInit() {
    
    if (this.formGroupValue) {
      this.formGroup = this.formGroupValue as  FormGroup;
    }
    
  }
}

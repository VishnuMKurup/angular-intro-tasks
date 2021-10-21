import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './custom.validator';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent {
  submitted: boolean = false;
  customForm = new FormGroup({
    email: new FormControl('', [Validators.required, UsernameValidator.mailFormat]),
    username: new FormControl('', [Validators.required, UsernameValidator.validationSpace]),
    password: new FormControl('', Validators.required)
  });

  get f() {
    return this.customForm.controls;
  }

  submit() {
    this.submitted = true;
    if (this.customForm.valid) {
      console.log(this.customForm.value);
    }
  }
  constructor() { }

}

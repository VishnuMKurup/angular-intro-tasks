import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator } from '../shared/custom-validator/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class CustomValidatorComponent {
  submitted: boolean;
  customForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initCustomForm();
  }

  initCustomForm() {
    this.customForm = this.fb.group({
      'email': ['', [Validators.required, customValidator.mailFormat]],
      'username': ['', [Validators.required, customValidator.validationSpace]],
      'password': ['', [Validators.required]]
    });
  }

  submit() {
    this.submitted = true;
    if (this.customForm.valid) {
      console.log(this.customForm.value);
    }
  }
}

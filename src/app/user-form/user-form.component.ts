import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean;
  countryList: any = [];
  stateList: any = [];
  errorMessage: any;

  constructor(private fb: FormBuilder, private dataservice: CrudService) { }

  ngOnInit(): void {
    this.dataservice.getData().subscribe(data => {
      this.countryList = data['countries'];
      this.stateList = data['state'];
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
    this.initAddressForm();
  }

  initAddressForm() {
    this.userForm = this.fb.group({
      'street_address1': ['', [Validators.required]],
      'street_address2': [''],
      'city': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'zip': ['', [Validators.required]]

    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}

import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.scss']
})
export class ListingFormComponent implements OnChanges {
  employeeForm: FormGroup;
  @Output() submitValue: EventEmitter<any>  = new EventEmitter<any>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() buttonSubmitName: string;
  @Input() formValue: any;
  submitted: boolean;

  constructor(private fb: FormBuilder) {
    this.initEmployeekForm();
  }

  initEmployeekForm() {
    this.employeeForm = this.fb.group({
      'id': '',
      'status': ['', [Validators.required]],
      'employee_name': ['', [Validators.required]],
      'employee_experiance': ['', [Validators.required]],
      'employee_designation': ['', [Validators.required]]
    });
  }

  ngOnChanges() {
    if (this.formValue) {
      this.employeeForm.setValue(this.formValue);
    }
  }

  submit() {
    if (this.employeeForm.valid) {
      this.submitValue.emit(this.employeeForm.value);
    }
    else {
      this.submitted = true;
    }
  }

  closePopup() {
    this.cancel.emit(true);
  }

}


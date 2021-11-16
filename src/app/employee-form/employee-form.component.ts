import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  submitted: boolean;
  employeeForm: FormGroup;
  errorMessage: any;
  jobList: any[] = [];

  constructor(private crud: CrudService, private fb: FormBuilder) {
    this.initEmployeeForm();
    this.jobList = [
      { title: 'Manager' },
      { title: 'Lead' },
      { title: 'Intern' }
    ];
  }

  initEmployeeForm() {
    this.employeeForm = this.fb.group({
      'name': ['', [Validators.required]],
      'job': ['', [Validators.required]]
    });
  }

  submit() {
    this.submitted = true;
    this.crud.postData(this.employeeForm.value).subscribe(result => {
      console.warn('result', result);
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
  }

  onUpdate() {
    this.crud.editData(this.employeeForm.value).subscribe(result => {
      console.warn('result', result);
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
  }

}


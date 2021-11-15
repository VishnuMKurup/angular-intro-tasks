import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  submitted: boolean = false;
  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required)
  });
  constructor(private http: HttpClient) { }


  submit() {
    this.submitted = true;
    this.http.post('https://reqres.in/api/users', this.employeeForm.value)
      .subscribe((result) => {
        console.warn('result', result);
      });
  }
}

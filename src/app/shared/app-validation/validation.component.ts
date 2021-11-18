import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  template: ` <div class="w-100 pt-2">
  <div  *ngIf="control.errors?.required && (control.dirty || control.touched || submitted)" class="alert alert-danger">
   {{name}} is required.
  </div>
  <div *ngIf="control.errors?.email && !control.errors?.required" class="alert alert-danger">Please enter a valid Email</div>
  </div>
  <div *ngIf="control.errors?.lengthFormat" class="alert alert-danger">Experience should not greater than 40.</div>
   <div *ngIf="control.errors?.pattern" class="alert alert-danger">Phone number must be at least 15 numbers</div>
   <div *ngIf="control.errors?.validationSpace" class="alert alert-danger">Username can not contain space.</div>
   <div *ngIf="control.errors?.mailFormat" class="alert alert-danger">Please Enter Valid Email.</div>`,
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent  {
  @Input() submitted: boolean;
  @Input() name: string;
  @Input() control: FormControl;

  constructor() { }

}

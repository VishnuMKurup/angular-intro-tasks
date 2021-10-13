import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  template: ` <div class="w-100 pt-2">
  <div  *ngIf="control.errors?.required && (control.dirty || control.touched || submitted)" class="alert alert-danger">
   {{name}} is required.
  </div>
  <div *ngIf="control.errors?.email && !control.errors?.required" class="alert alert-danger">Please enter a valid Email</div>
  </div> `,
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {
  @Input() submitted: boolean;
  @Input() name: string;
  @Input() control: FormControl;

  constructor() { }
}

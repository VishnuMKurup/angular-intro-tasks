import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  template: ` <div class="w-100 pt-2">
  <div  *ngIf="control.invalid && (control.dirty || control.touched || submitted)" class="alert alert-danger">
   {{name}} is required.
  </div>
  </div> `,
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {
  @Input() submitted: boolean;
  @Input() name: string;
  @Input() control: FormControl;

  constructor() { }

}

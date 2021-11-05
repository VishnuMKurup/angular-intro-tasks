import { Directive, HostBinding, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {
  @Input() appValidation

  constructor(
    @Self() private ngControl: NgControl
  ) { }

  @HostBinding('class.is-invalid')
  get invalid() {
    return !this.ngControl.valid &&
      (this.ngControl.touched || this.ngControl.dirty || this.appValidation);
  }
}
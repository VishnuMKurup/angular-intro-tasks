import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focusout', ['$event']) onFocusOut(event) {
    if (!this.el.nativeElement.value) {
      this.el.nativeElement.classList.add('is-invalid');
    }
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    if (!this.el.nativeElement.value) {
      this.el.nativeElement.classList.add('is-invalid');
    }
    else {
      this.el.nativeElement.classList.remove('is-invalid');
    }
  }
}

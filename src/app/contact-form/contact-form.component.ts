import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private fb: FormBuilder, private el: ElementRef) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      contacts: this.fb.array([this.createContactFormGroup()])
    });
  }

  createContactFormGroup(): FormGroup {

    return this.fb.group({
      'fname': ['', [Validators.required]],
      'lname': [''],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get contactFormGroups() {
    return this.contactForm.get('contacts') as FormArray;
  }

  addContact() {
    const contacts = this.contactForm.get('contacts') as FormArray;
    contacts.push(this.createContactFormGroup());
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
    else {
      this.el.nativeElement.querySelectorAll('.ng-invalid').forEach(element => {
        element.classList.add('is-invalid');
      });
    }
  }

  removeTab(contact: number) {
    this.contactFormGroups.removeAt(contact);
  }
}

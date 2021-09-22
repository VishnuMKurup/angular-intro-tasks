import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted: boolean=false;
  

  constructor(private fb: FormBuilder) {
    // this.contactForm = this.fb.group({
    //   fname: ['', [Validators.required]],
    //   lname: [''],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: ['']
    // });

    this.contactForm = this.fb.group({
      contacts: this.fb.array([this.createContactFormGroup()])
    });
  }

  ngOnInit() {}

  createContactFormGroup(): FormGroup {
    return new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('')
    });
  }
  get contactFormGroups () {
    return this.contactForm.get('contacts') as FormArray
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
  }
  removeContact(i: number) {
    const contacts = this.contactForm.get('contacts') as FormArray;
    if (contacts.length > 1) {
      contacts.removeAt(i);
    } else {
      contacts.reset();
    }
  }
  
}

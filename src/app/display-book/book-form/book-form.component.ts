import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {

  bookForm: FormGroup;
  @Output() submitValue = new EventEmitter<any>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() button: string;
  @Input() row: any;
  @Input() submittedValue: boolean;
  submitted: boolean;
  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  ngOnChanges() {
    this.submitted = this.submittedValue;
    if (this.row) {
      this.bookForm.setValue(this.row);
    }
  }

  submit() {
    if (this.bookForm.valid) {
      this.submitValue.emit(this.bookForm.value);
      this.bookForm.reset();
    }
    else {
      this.submitted = true;
    }
  }

  closePopup() {
    this.submitted = false;
    this.cancel.emit(true);
  }

}

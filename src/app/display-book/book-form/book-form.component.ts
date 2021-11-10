import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecimalPipe } from 'src/app/pipes/decimal.pipe';

@Component({
  selector: 'app-book',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  providers: [DecimalPipe]
})
export class BookFormComponent implements OnChanges {
  bookForm: FormGroup;
  @Output() submitValue = new EventEmitter<any>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() buttonSubmitName: string;
  @Input() formValue: any;
  submitted: boolean;

  constructor(private fb: FormBuilder, private decimalPipe: DecimalPipe) {
    this.initBookForm();
  }

  initBookForm() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  ngOnChanges() {
    if (this.formValue) {
      this.bookForm.setValue(this.formValue);
    }
  }

  submit() {
    if (this.bookForm.valid) {
      this.bookForm.value.price = this.decimalPipe.transform(this.bookForm.value.price);
      this.submitValue.emit(this.bookForm.value);
    }
    else {
      this.submitted = true;
    }
  }

  closePopup() {
    this.cancel.emit(true);
  }
}

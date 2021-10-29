import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})

export class DisplayBookComponent {

  bookForm: FormGroup;
  details: any;
  item: string
  button: string;
  selectedItem: any;
  displayStyle: boolean;
  constructor() {
    this.details = [];
  }

  openPopup() {
    this.item = 'Add Book';
    this.button = 'Add';
    this.displayStyle = true;
  }

  closePopup() {
    this.displayStyle = false;
  }

  removeItem(index: number) {
    this.details.splice(index, 1);
  }

  openPopupEdit(item) {
    this.item = 'Edit';
    this.button = 'Update';
    this.selectedItem = item;
    this.displayStyle = true;
  }

  onSubmit(value) {
    if (this.selectedItem) {
      let index = this.details.indexOf(this.selectedItem);
      this.details[index] = value;
      this.closePopup();
    }
    else {
      this.details.push(value);
      this.closePopup();
    }
  }
}

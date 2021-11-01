import { Component } from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})

export class DisplayBookComponent {

  details: any;
  item: string
  button: string;
  selectedItem: any;
  displayStyle: boolean;
  displayConfirmation: boolean;
  removeIndex: number;
  constructor() {
    this.details = [];
  }

  openPopup() {
    this.item = 'Add Book';
    this.button = 'Add';
    this.displayStyle = true;
    this.selectedItem = null;
  }

  closePopup() {
    this.displayStyle = false;
  }

  removeItem(index: number) {
    this.displayConfirmation = true;
    this.removeIndex = index;
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

  confirmSucess() {
    this.details.splice(this.removeIndex, 1);
    this.displayConfirmation = false;
  }

  closeConfirmation() {
    this.displayConfirmation = false;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})

export class DisplayBookComponent {

  bookListingArray: any;
  popupTitle: string
  buttonName: string;
  selectedItem: any;
  isBookFormOpen: boolean;
  isConfirmationOpen: boolean;
  removeIndex: number;
  constructor() {
    this.bookListingArray = [];
  }

  openPopup() {
    this.popupTitle = 'Add Book';
    this.buttonName = 'Add';
    this.isBookFormOpen = true;
    this.selectedItem = null;
  }

  closePopup() {
    this.isBookFormOpen = false;
  }

  removeItem(index: number) {
    this.isConfirmationOpen = true;
    this.removeIndex = index;
  }

  openPopupEdit(item) {
    this.popupTitle = 'Edit';
    this.buttonName = 'Update';
    this.selectedItem = item;
    this.isBookFormOpen = true;
  }

  onSubmit(value) {
    if (this.selectedItem) {
      let index = this.bookListingArray.indexOf(this.selectedItem);
      this.bookListingArray[index] = value;
      this.closePopup();
    }
    else {
      this.bookListingArray.push(value);
      this.closePopup();
    }
  }

  confirmSucess() {
    this.bookListingArray.splice(this.removeIndex, 1);
    this.isConfirmationOpen = false;
  }

  closeConfirmation() {
    this.isConfirmationOpen = false;
  }
}

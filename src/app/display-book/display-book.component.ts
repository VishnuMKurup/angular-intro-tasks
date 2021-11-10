import { Component } from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})

export class DisplayBookComponent {
  bookListingArray: any;
  popupTitle: string
  submitButtonName: string;
  selectedItem: any;
  isBookFormOpen: boolean;
  isConfirmationOpen: boolean;
  selectedIndex: number;

  constructor() {
    this.bookListingArray = [];
  }

  onAddBook() {
    this.popupTitle = 'Add Book';
    this.submitButtonName = 'Add';
    this.isBookFormOpen = true;
    this.selectedItem = null;
  }

  closePopup() {
    this.isBookFormOpen = false;
  }

  removeItem(index: number) {
    this.isConfirmationOpen = true;
    this.selectedIndex = index;
  }

  openPopupEdit(item) {
    this.popupTitle = 'Edit';
    this.submitButtonName = 'Update';
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
    this.bookListingArray.splice(this.selectedIndex, 1);
    this.isConfirmationOpen = false;
  }

  closeConfirmation() {
    this.isConfirmationOpen = false;
  }
}

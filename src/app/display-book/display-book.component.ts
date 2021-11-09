import { Component } from '@angular/core';
import { DecimalPipe } from '../pipes/decimal.pipe';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss'],
  providers: [DecimalPipe]
})

export class DisplayBookComponent {
  bookListingArray: any;
  popupTitle: string
  submitButtonName: string;
  selectedItem: any;
  isBookFormOpen: boolean;
  isConfirmationOpen: boolean;
  selectedIndex: number;

  constructor(private decimalPipe: DecimalPipe) {
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
      value.price = this.decimalPipe.transform(value.price);
      this.bookListingArray[index] = value;
      this.closePopup();
    }
    else {
      value.price = this.decimalPipe.transform(value.price);
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

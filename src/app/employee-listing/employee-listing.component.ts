import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss']
})
export class EmployeeListingComponent {
  employeeListingArray: any = [];
  popupTitle: string
  submitButtonName: string;
  selectedItem: any;
  isEmployeeFormOpen: boolean;
  isConfirmationOpen: boolean;
  selectedIndex: number;
  errorMessage: any;

  constructor(private crud: CrudService) {
    this.employeeListingArray = [];
    this.getEmployees();
  }

  getEmployees() {
    this.crud.getEmployee().subscribe(data => {
      this.employeeListingArray = data;
      console.log(data);
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
  }

  onEditEmployee(item) {
    this.popupTitle = 'Update Employee';
    this.submitButtonName = 'Update';
    this.selectedItem = item;
    this.selectedIndex = item.id;
    this.isEmployeeFormOpen = true;
  }

  removeItem(index: number) {
    this.isConfirmationOpen = true;
    this.selectedIndex = index;
  }

  onAddEmployee() {
    this.popupTitle = 'Add Employee';
    this.submitButtonName = 'Add';
    this.isEmployeeFormOpen = true;
    this.selectedItem = null;
  }

  closePopup() {
    this.isEmployeeFormOpen = false;
  }

  onSubmit(value) {
    if (this.selectedItem) {
      console.log(value);
      this.crud.editEmployee(this.selectedIndex, value).subscribe(result => {
        this.getEmployees();
        console.warn('result', result);
      }, error => {
        console.error('error caught in component');
        this.errorMessage = error;
        throw error;
      });
      this.closePopup();
    }
    else {
      this.crud.postEmployee(value).subscribe(result => {
        this.getEmployees();
        console.warn('result', result);
      }, error => {
        console.error('error caught in component');
        this.errorMessage = error;
        throw error;
      });
      this.closePopup();
    }
  }

  confirmSucess() {
    this.crud.deleteEmployee(this.selectedIndex).subscribe(result => {
      this.getEmployees();
      console.warn('result', result);
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
    this.isConfirmationOpen = false;
  }

}

import { HttpParams } from '@angular/common/http';
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
  isGetEmployeeOpen: boolean;
  selectedIndex: number;
  errorMessage: any;
  params: HttpParams;

  constructor(private crud: CrudService) {
    this.params= new HttpParams();
    this.employeeListingArray = [];
    this.getEmployees(this.params);
  }

  getEmployees(params) {
      this.crud.getEmployeeList(params).subscribe(data => {
        this.employeeListingArray = data;
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

  onViewEmployee(item) {
    this.isGetEmployeeOpen = true;
    this.selectedIndex = item.id;
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

  closeEmployeeById() {
    this.isGetEmployeeOpen = false;
  }

  onSubmit(value) {
    if (this.selectedItem) {
      console.log(value);
      this.crud.editEmployee(this.selectedIndex, value).subscribe(result => {
        this.getEmployees(this.params);
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
        this.getEmployees(this.params);
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
      this.getEmployees(this.params);
      console.warn('result', result);
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
    this.isConfirmationOpen = false;
  }

  closeConfirmation() {
    this.isConfirmationOpen = false;
  }

  onStatusSelected(val) {
    this.params = this.params.delete('status');
    if (val!=='Select Status') {
      this.params = this.params.append('status', val);
   }
    this.getEmployees(this.params);
}

}

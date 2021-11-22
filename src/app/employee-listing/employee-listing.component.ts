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
  selectedEmployeeDetails: any;
  isEmployeeDetailsOpen: boolean;
  isConfirmationOpen: boolean;
  isEmployeeViewOpen: boolean;
  selectedEmployeeId: number;
  errorMessage: any;
  params: HttpParams;

  constructor(private crud: CrudService) {
    this.params = new HttpParams();
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
    this.selectedEmployeeDetails = item;
    this.selectedEmployeeId = item.id;
    this.isEmployeeDetailsOpen = true;
  }

  removeItem(id: number) {
    if (confirm('Are You Sure You Want To Delete')) {
      this.crud.deleteEmployee(id).subscribe(result => {
        this.getEmployees(this.params);
        console.warn('result', result);
      }, error => {
        console.error('error caught in component');
        this.errorMessage = error;
        throw error;
      });
    }
  }

  onViewEmployee(id) {
    this.isEmployeeViewOpen = true;
    this.selectedEmployeeId = id;
  }

  onAddEmployee() {
    this.popupTitle = 'Add Employee';
    this.submitButtonName = 'Add';
    this.isEmployeeDetailsOpen = true;
    this.selectedEmployeeDetails = null;
  }

  closePopup() {
    this.isEmployeeDetailsOpen = false;
    this.isEmployeeViewOpen = false;
  }

  onSubmit(value) {
    if (this.selectedEmployeeDetails) {
      console.log(value);
      this.crud.editEmployee(this.selectedEmployeeId, value).subscribe(result => {
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

  onStatusSelected(val) {
    this.params = this.params.delete('status');
    if (val !== 'Select Status') {
      this.params = this.params.append('status', val);
    }
    this.getEmployees(this.params);
  }

}

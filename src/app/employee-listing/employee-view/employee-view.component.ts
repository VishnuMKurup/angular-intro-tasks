import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnChanges {
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  employeeDetails: any = {};
  @Input() selectedIndex: number;
  errorMessage: any;

  constructor(private crud: CrudService) {
  }

  ngOnChanges() {
    this.onViewEmployee(this.selectedIndex);
  }

  onViewEmployee(id) {
    this.crud.getEmployeeById(id).subscribe(result => {
      this.employeeDetails = result;
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
  }

  closePopup() {
    this.cancel.emit(true);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
  employeeDetails: any = {};
  errorMessage: any;

  constructor(private crud: CrudService, private route: ActivatedRoute, private router: Router) {
    this.getEmployeeDetails(this.route.snapshot.paramMap.get('id'));
  }

  getEmployeeDetails(id) {
    this.crud.getEmployeeById(id).subscribe(result => {
      this.employeeDetails = result;
    }, error => {
      console.error('error caught in component');
      this.errorMessage = error;
      throw error;
    });
  }

  goToPreviousPage() {
    this.router.navigate(['/employeelisting']);
  }

}

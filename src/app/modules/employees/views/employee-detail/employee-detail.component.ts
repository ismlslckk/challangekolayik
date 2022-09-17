import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from 'src/app/services/AppStateService';
import { Department, Employee, Location } from '../../models';
import { EmployeesService } from '../../services/EmployeesService';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  Employee: Employee;
  Departments: Array<Department> = [];
  Locations: Array<Location> = [];

  constructor(private activatedRoute: ActivatedRoute,
    private employeesService: EmployeesService,
    private stateService: AppStateService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id']
      if (id && id != '' && id != undefined) {
        this.getEmployee(id);
      }
    })

    this.employeesService.getListDepartments().subscribe((result: Array<Department>) => {
      this.Departments = result;
    });
    this.employeesService.getListLocations().subscribe((result: Array<Location>) => {
      this.Locations = result;
    });
  }

  getEmployee(id: number): void {
    this.employeesService.getEmployee(id).subscribe(
      (result: Employee) => {
        this.Employee = result;

        this.stateService.setEmployee(this.Employee);
      }
    )
  }

  ngOnDestroy() {
    this.stateService.unsetEmployee();
  }

}

import { Component, OnInit } from '@angular/core';
import { Department, Employee } from '../../models';
import { EmployeesService } from '../../services/EmployeesService';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';
import { AppStateService } from 'src/app/services/AppStateService';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  faSearch = faSearch

  searchControl = new FormControl();
  searchControlSub: Subscription

  public ListEmployees: Array<Employee> = [];
  public OriginalListEmployees: Array<Employee> = [];
  private colors: Array<string> =
    ['#E87373, #E8AD73', '#EF986C,#EFDD6C', '#BFE279,#8BE279', '#68DE8F,#68DECA', '#79D1E2,#79BFE2',
      '#7979E2,#AD79E2', '#C173E8,#E873D5', '#E873C1,#E87386', '#E87373,#E8AD73', '#EF986C,#EFDD6C',
      '#68DE8F,#68DECA', '#79D1E2,#79BFE2', '#86BBD5,#8693D5'];
  private userUsedColors = {};

  constructor(private employeesService: EmployeesService, private stateService: AppStateService) { }

  ngOnInit() {
    this.getListEmployees();
    this.searchControlSub = this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.filterEmployees(this.searchControl.value);
    });

    this.stateService.setActivePage('Employees');

  }

  ngOnDestroy() {
    this.searchControlSub.unsubscribe();
  }

  getListEmployees(): void {
    this.employeesService.getListEmployees().subscribe(
      (result: Array<Employee>) => {
        this.employeesService.getListDepartments().subscribe(
          (resultDepertments: Array<Department>) => {
            result.forEach((employee: Employee) => {
              this.setExtraInformation(employee, resultDepertments);
              this.setUserAvatarColors(employee);
            });
            this.OriginalListEmployees = result;
            this.ListEmployees = result;
          }
        )
      }
    )
  }

  setExtraInformation(employee: Employee, resultDepertments: Array<Department>): void {
    employee.avatarName = employee.firstName[0] + employee.lastName[0];
    employee.fullName = employee.firstName + " " + employee.lastName;
    const findedDepartment = resultDepertments.find(y => y.id == employee.departmentId);
    if (findedDepartment) {
      employee.departmentName = findedDepartment.name;
    }
  }

  setUserAvatarColors(employee: Employee): void {
    if (this.userUsedColors[employee.avatarName] === undefined) {
      const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.userUsedColors[employee.avatarName] = randomColor;
      employee.color = randomColor;
    }
    else {
      const usedColors = Object.keys(this.userUsedColors).map(key => this.userUsedColors[key]);
      const color = this.colors.find(employee => usedColors.includes(employee));
      employee.color = color;
    }
  }

  filterEmployees(text: string): void {
    if (text !== undefined && text !== null) {
      this.ListEmployees = this.OriginalListEmployees.filter(x => x.fullName.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    }
  }

}

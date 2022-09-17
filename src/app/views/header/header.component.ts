import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modules/employees/models';
import { AppStateService } from 'src/app/services/AppStateService';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faHamburger = faBars;

  Employee: Employee;
  Information: any;
  IsMobileActive: boolean;
  constructor(private stateService: AppStateService, private _location: Location) { }

  ngOnInit() {
    this.stateService.EmployeeBehavior.subscribe((employee: Employee) => {
      this.Employee = employee;
      if (employee)
        this.Information = employee.fullName;
    })

    this.stateService.ActivePageBehavior.subscribe((page: string) => {
      this.Information = page;
    })

    this.stateService.IsMobileActive.subscribe((value: boolean) => {
      this.IsMobileActive = value;
    })
  }

  setMobileActive(): void {
    this.stateService.setMobile(true);
  }

  goBack(): void {
    this._location.back();
  }

}

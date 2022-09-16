import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './views/list-employees/list-employees.component';


@NgModule({
  declarations: [ListEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployesModule { }

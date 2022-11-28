import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './views/list-employees/list-employees.component';
import { ComponentsModule } from '../components/components.module';
import { ListEmployeeItemComponent } from './views/list-employee-item/list-employee-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailComponent } from './views/employee-detail/employee-detail.component';
import { NestedtableComponent } from './views/nestedtable/nestedtable.component';
import { ItemnestedComponent } from './views/itemnested/itemnested.component';

@NgModule({
  declarations: [ListEmployeesComponent, ListEmployeeItemComponent, EmployeeDetailComponent, NestedtableComponent, ItemnestedComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployesModule { }

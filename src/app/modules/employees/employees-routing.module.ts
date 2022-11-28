import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './views/employee-detail/employee-detail.component';
import { ListEmployeesComponent } from './views/list-employees/list-employees.component';
import { NestedtableComponent } from './views/nestedtable/nestedtable.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: '',
        redirectTo: 'listemployees',
      },
      {
        path: 'listemployees',
        component: ListEmployeesComponent,
        data: {
          title: 'Employees',
        },
      },
      {
        path: 'nestedtable',
        component: NestedtableComponent,
        data: {
          title: 'nestedtable',
        },
      },
      {
        path: 'employeedetail/:id',
        component: EmployeeDetailComponent,
        data: {
          title: 'Employee Detail',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { EmployeeAvatarComponent } from './employee-avatar/employee-avatar.component';



@NgModule({
  declarations: [RowComponent, ColumnComponent,EmployeeAvatarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RowComponent, ColumnComponent, EmployeeAvatarComponent
  ],
  entryComponents: [RowComponent, ColumnComponent]
})
export class ComponentsModule { }

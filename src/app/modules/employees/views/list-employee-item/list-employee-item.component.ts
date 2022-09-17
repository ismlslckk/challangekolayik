import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models';

@Component({
  selector: 'list-employee-item',
  templateUrl: './list-employee-item.component.html',
  styleUrls: ['./list-employee-item.component.scss']
})
export class ListEmployeeItemComponent implements OnInit {

  @Input() employee: Employee
  constructor() { }

  ngOnInit() {
  }

}

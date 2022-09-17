import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'employee-avatar',
  templateUrl: './employee-avatar.component.html',
  styleUrls: ['./employee-avatar.component.scss']
})
export class EmployeeAvatarComponent implements OnInit {

  @Input() employee;
  backgroundImage: string;

  constructor() { }

  ngOnInit() {
    this.backgroundImage = `linear-gradient(135deg,${this.employee.color})`;
  }

}

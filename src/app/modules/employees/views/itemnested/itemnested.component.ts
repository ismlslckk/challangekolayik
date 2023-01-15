import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../models';

@Component({
  selector: 'itemnested',
  templateUrl: './itemnested.component.html',
  styleUrls: ['./itemnested.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        height: 125,
      })),
      state('final', style({
        height: 0
      })),
      transition('* => initial', animate(80))
    ]),
  ]
})
export class ItemnestedComponent implements OnInit {

  @Input() list;
  @Input() listHeader;
  @Input() isWriteHeader: boolean;
  @Output() rowExpandEvent = new EventEmitter<Employee>();

  expanded: { [key: string]: boolean } = {};


  constructor() { }

  ngOnInit() {

    // if the value of isWriteHeader is undefined then means this component called not from recursive. In this case table's header should written
    if (this.isWriteHeader === undefined)
      this.isWriteHeader = true;

    this.expanded = {};
  }

  expand(emp: Employee) {
    emp.isExpand = !emp.isExpand;
    this.rowExpandedEvent(emp);
  }

  rowExpandedEvent(emp: Employee) {
    if (emp.subItems && emp.subItems.length > 0)
      this.rowExpandEvent.emit(emp);
  }

}

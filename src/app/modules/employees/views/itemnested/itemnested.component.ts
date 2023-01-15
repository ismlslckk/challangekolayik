import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../models';

@Component({
  selector: 'itemnested',
  templateUrl: './itemnested.component.html',
  styleUrls: ['./itemnested.component.scss']
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
    if (emp.subItems) {
      emp.isExpand = !emp.isExpand;
      this.rowExpandedEvent(emp);
      emp.subItems.forEach(x => {
        if (x.tabsize === undefined)
          x.tabsize = 0;
        if (emp.tabsize === undefined)
          emp.tabsize = 0;

        x.tabsize = emp.tabsize + 1;
      });
    }
  }

  rowExpandedEvent(emp: Employee) {
    if (emp.subItems && emp.subItems.length > 0)
      this.rowExpandEvent.emit(emp);
  }

}

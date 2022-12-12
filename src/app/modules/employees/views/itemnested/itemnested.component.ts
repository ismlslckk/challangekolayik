import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() parentTable;
  @Input() deepth;

  expanded: {[key: string]: boolean} = {};


  constructor() { }

  ngOnInit() {
    this.expanded = {};
    if (!this.deepth)
      this.deepth = 1;
  }

  expand(emp: Employee) {
    emp.isExpand = !emp.isExpand;
  }

}

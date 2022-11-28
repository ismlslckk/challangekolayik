import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models';

@Component({
  selector: 'itemnested',
  templateUrl: './itemnested.component.html',
  styleUrls: ['./itemnested.component.scss']
})
export class ItemnestedComponent implements OnInit {

  @Input() list;
  @Input() listHeader;
  @Input() parentTable;


  constructor() { }

  ngOnInit() {
   
  }

  expand(emp:Employee){
    emp.isExpand=!emp.isExpand;
  }

}

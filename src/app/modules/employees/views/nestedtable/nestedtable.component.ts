import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models';

@Component({
  selector: 'app-nestedtable',
  templateUrl: './nestedtable.component.html',
  styleUrls: ['./nestedtable.component.scss']
})
export class NestedtableComponent implements OnInit {


  public items:Array<Employee>;

  public itemsHeader:Array<string>;

  constructor() { }

  ngOnInit() {
    this.items= [];
    this.itemsHeader=[];

    const emp1= new Employee();
    emp1.firstName='emp1';
    emp1.lastName='last1';

    const emp11= new Employee();
    emp11.firstName='emp1_1';
    emp11.lastName='last1_1';
    
    const emp12= new Employee();
    emp12.firstName='emp1_2';
    emp12.lastName='last1_2';

    const emp2= new Employee();
    emp2.firstName='emp2';
    emp2.lastName='last2';


    const emp111= new Employee();
    emp111.firstName='emp1_1_1';
    emp111.lastName='last1_1_1';
    
    const emp122= new Employee();
    emp122.firstName='emp1_2_1';
    emp122.lastName='last1_2_1';

    emp11.subItems=[emp111,emp122,emp111,emp122];

    emp1.subItems=[emp11,emp12];

    this.items=[emp1,emp2];


    this.itemsHeader=['Ad','Soyad']

  }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models';

@Component({
  selector: 'app-nestedtable',
  templateUrl: './nestedtable.component.html',
  styleUrls: ['./nestedtable.component.scss']
})
export class NestedtableComponent implements OnInit {


  public items:Array<Employee>;

  public itemsHeader:Array<any>;

  constructor() { }

  rowExpanded(emp:Employee){
    console.log(emp);
  }

  ngOnInit() {
    this.items= [];
    this.itemsHeader=[];

    const emp1= new Employee();
    emp1.firstName='emp1';
    emp1.lastName='last1';
    emp1.email="wefwj@gmail.com";
    emp1.departmentName="computer engineer";
    emp1.phone='+905389784444';
    emp1.position='senior';

    const emp11= new Employee();
    emp11.firstName='emp1_1';
    emp11.lastName='last1_1';
    emp11.email="wefwj@gmail.com";
    emp11.departmentName="computer engineer";
    emp11.phone='+905389784444';
    emp11.position='senior';
    
    const emp12= new Employee();
    emp12.firstName='emp1_2';
    emp12.lastName='last1_2';
    emp12.email="wefwj@gmail.com";
    emp12.departmentName="computer engineer";
    emp12.phone='+905389784444';
    emp12.position='senior';

    const emp2= new Employee();
    emp2.firstName='emp2';
    emp2.lastName='last2';
    emp2.email="wefwj@gmail.com";
    emp2.departmentName="computer engineer";
    emp2.phone='+905389784444';
    emp2.position='senior';

    const emp111= new Employee();
    emp111.firstName='emp1_1_1';
    emp111.lastName='last1_1_1';
    emp111.email="wefwj@gmail.com";
    emp111.departmentName="computer engineer";
    emp111.phone='+905389784444';
    emp111.position='senior';
    
    const emp122= new Employee();
    emp122.firstName='emp1_2_1';
    emp122.lastName='last1_2_1';
    emp122.email="wefwj@gmail.com";
    emp122.departmentName="computer engineer";
    emp122.phone='+905389784444';
    emp122.position='senior';

    emp11.subItems=[emp111,emp122,emp111,emp122];

    emp1.subItems=[emp11,emp12];

    this.items=[emp1,emp2];


    this.itemsHeader=
    [
      {header:'Name',columnName:'firstName'},
      {header:'Surname',columnName:'lastName'},
      {header:'E-mail',columnName:'email'},
      {header:'Department',columnName:'departmentName'},
      {header:'Phone',columnName:'phone'},
      {header:'Position',columnName:'position'}
    ]

  }

}

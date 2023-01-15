import { Injectable } from '@angular/core'
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators'
import { Employee, Department,Location } from '../models'

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  private employees: Array<Employee> = [
    {
      id: 978543,
      firstName: "Doğan",
      lastName: "Dipcin",
      email: "dogan@kolayhr.com",
      phone: "545 710 34 44",
      position: "Software Developer",
      locationId: 1,
      departmentId: 2,
      startDate: new Date(2020, 12, 12),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 243534,
      firstName: "Büşra",
      lastName: "Gümüşel",
      email: "busra@kolayhr.com",
      phone: "505 423 85 10",
      position: "Sn. Software Developer",
      locationId: 1,
      departmentId: 1,
      startDate: new Date(2018, 2, 10),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 982324,
      firstName: "Gizem",
      lastName: "Sevinç",
      email: "gizem@kolayhr.com",
      phone: "505 423 85 10",
      position: "Sn. Backend Developer",
      locationId: 1,
      departmentId: 3,
      startDate: new Date(2010, 3, 4),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 645664,
      firstName: "Andrea",
      lastName: "Buran",
      email: "andrea@kolayhr.com",
      phone: "503 461 23 92",
      position: "Head of Development Team",
      locationId: 2,
      departmentId: 3,
      startDate: new Date(2015, 12, 1),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 312398,
      firstName: "Ufukcan",
      lastName: "Erdur",
      email: "ufukcan@kolayhr.com",
      phone: "555 673 43 34",
      position: "Product Manager",
      locationId: 3,
      departmentId: 3,
      startDate: new Date(2013, 6, 1),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 945234,
      firstName: "Tunca",
      lastName: "Üçer",
      email: "tunca@kolayhr.com",
      phone: "545 932 63 30",
      position: "Sales Manager",
      locationId: 3,
      departmentId: 2,
      startDate: new Date(2019, 9, 11),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 122395,
      firstName: "Ezgi",
      lastName: "Kar",
      email: "ezgi@kolayhr.com",
      phone: "545 734 56 33",
      position: "Journalist",
      locationId: 1,
      departmentId: 4,
      startDate: new Date(2012, 2, 19),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 528293,
      firstName: "Dilara",
      lastName: "Gözübüyük",
      email: "dilara@kolayhr.com",
      phone: "544 210 64 94",
      position: "Astrophysics",
      locationId: 1,
      departmentId: 2,
      startDate: new Date(2011, 11, 30),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 696432,
      firstName: "Erbil",
      lastName: "Şilik",
      email: "erbil@kolayhr.com",
      phone: "534 140 56 74",
      position: "Creative Director",
      locationId: 2,
      departmentId: 4,
      startDate: new Date(2019, 4, 3),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 595974,
      firstName: "Deniz",
      lastName: "Diyarlı",
      email: "deniz@kolayhr.com",
      phone: "544 877 54 54",
      position: "HR Manager",
      locationId: 3,
      departmentId: 1,
      startDate: new Date(2014, 8, 25),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 713455,
      firstName: "Emre",
      lastName: "Kardan",
      email: "emre@kolayhr.com",
      phone: "555 307 12 38",
      position: "Product Manager",
      locationId: 2,
      departmentId: 1,
      startDate: new Date(2019, 4, 3),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
    {
      id: 554923,
      firstName: "Ahmet",
      lastName: "Baran",
      email: "ahmet@kolayhr.com",
      phone: "545 376 23 84",
      position: "Product Manager",
      locationId: 1,
      departmentId: 2,
      startDate: new Date(2013, 9, 8),
      departmentName: '',
      color: '',
      avatarName: '',
      fullName: '',
      baslik:'',
      subItems:null,
      isExpand:false,
      tabsize:0,
      deep:0
    },
  ];

  constructor() { }

  getListEmployees(): Observable<Array<Employee>> {
    return of(this.employees).pipe(delay(0))
  }

  getEmployee(id: number): Observable<Employee> {
    return of(this.employees.find(x => x.id == id)).pipe(delay(0))
  }

  getListDepartments(): Observable<Array<Department>> {
    let retVal: Array<Department> = new Array<Department>()
    retVal = [
      {
        id: 1,
        name: "Development"
      },
      {
        id: 2,
        name: "Product"
      },
      {
        id: 3,
        name: "Growth"
      },
      {
        id: 4,
        name: "Marketing"
      }
    ];

    return of(retVal).pipe(delay(0))
  }

  getListLocations(): Observable<Array<Location>> {
    let retVal: Array<Location> = new Array<Location>()
    retVal = [
      {
        id: 1,
        name: "İstanbul"
      },
      {
        id: 2,
        name: "Ankara"
      },
      {
        id: 3,
        name: "İzmir"
      }
    ];

    return of(retVal).pipe(delay(0))
  }
  
}

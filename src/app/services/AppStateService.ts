import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../modules/employees/models';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {

    public EmployeeBehavior: BehaviorSubject<Employee | null> = new BehaviorSubject<Employee>(null);
    public ActivePageBehavior: BehaviorSubject<string | null> = new BehaviorSubject<string>(null);
    public IsMobileActive: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean>(null);
    constructor() {
    }

    setEmployee(employee: Employee) {
        this.EmployeeBehavior.next(employee);
    }

    setActivePage(page: string) {
        this.ActivePageBehavior.next(page);
    }

    setMobile(value:boolean): void {
        this.IsMobileActive.next(value);
    }

    unsetEmployee() {
        this.EmployeeBehavior.next(null);
    }

}




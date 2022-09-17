import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators'
import { Holiday } from '../models/Holiday';

@Injectable({
    providedIn: 'root',
})
export class HolidayService {

    constructor() { }

    getListHolidays(): Observable<Array<Holiday>> {
        let retVal: Array<Holiday> = new Array<Holiday>()
        retVal = [
            {
                id: 1,
                name: "Yılbaşı",
                date: new Date(2021, 1, 1)
            },
            {
                id: 2,
                name: "Ulusal Egemenlik ve Çocuk Bayramı",
                date: new Date(2021, 4, 23)
            },
            {
                id: 3,
                name: "Emek ve Dayanışma Günü",
                date: new Date(2021, 5, 1)
            },
            {
                id: 4,
                name: "Atatürk' ü Anma Gençlik ve Spor Bayramı",
                date: new Date(2021, 5, 19)
            }
        ];

        return of(retVal).pipe(delay(0))
    }
}

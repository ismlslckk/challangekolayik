import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/AppStateService';
import { faChartColumn, faRotateRight, faEllipsisVertical, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { HolidayService } from '../../services/HolidayService';
import { Holiday } from '../../models/Holiday';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  faChartColumn = faChartColumn
  faRotateRight = faRotateRight
  faUmbrella = faUmbrella
  faEllipsisVertical = faEllipsisVertical
  Holidays: Array<Holiday>;
  constructor(private stateService: AppStateService, private holidayService: HolidayService) { }

  ngOnInit() {
    this.stateService.setActivePage('Home');
    this.getListHolidays();
  }

  getListHolidays(): void {
    this.holidayService.getListHolidays().subscribe((result: Array<Holiday>) => {
      this.Holidays = result;
    });

  }

}

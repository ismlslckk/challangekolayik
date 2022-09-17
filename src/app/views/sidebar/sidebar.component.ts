import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/AppStateService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  IsMobile: boolean;
  constructor(private stateService: AppStateService) { }

  ngOnInit() {
    this.stateService.IsMobileActive.subscribe((value: boolean) => {
      this.IsMobile = value;
    });
  }

  ngOnDestroy() {
    this.stateService.setMobile(false);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/AppStateService';


@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  @Input() title: string
  @Input() routerLink: string
  @Input() icon: string
  activePage: string
  constructor(private stateService: AppStateService) { }

  ngOnInit() {
    this.stateService.ActivePageBehavior.subscribe((page: string) => {
      this.activePage = page;
    })
  }



}

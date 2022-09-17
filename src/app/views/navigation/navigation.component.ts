import { Component, OnInit } from '@angular/core';
import { faHome,faUser } from '@fortawesome/free-solid-svg-icons';
import { AppStateService } from 'src/app/services/AppStateService';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  faHome = faHome;
  faUser = faUser;

  constructor(private stateService: AppStateService) { }

  ngOnInit() {
  }

  navigationItemClick():void{
    this.stateService.setMobile(false);
  }

}

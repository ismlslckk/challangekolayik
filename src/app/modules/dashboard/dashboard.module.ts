import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComponentsModule } from '../components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }

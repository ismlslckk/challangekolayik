import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ComponentsModule } from './modules/components/components.module';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { NavigationItemComponent } from './views/navigation/navigation-item/navigation-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppStateService } from './services/AppStateService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NavigationComponent,
    NavigationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ComponentsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

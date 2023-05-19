import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ConstructionContainerComponent } from './construction-container/construction-container.component';
import { ConstructionPresentationComponent } from './construction-container/construction-presentation/construction-presentation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ConstructionContainerComponent,
    ConstructionPresentationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ConstructionContainerComponent } from './construction-container/construction-container.component';

const routes: Routes = [
  { path: 'construction', component: ConstructionContainerComponent },
  {
    path: '',
    redirectTo: 'construction',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

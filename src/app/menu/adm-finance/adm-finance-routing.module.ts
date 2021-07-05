import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmFinanceComponent} from "./adm-finance.component";
import {ManageExpendituresComponent} from "./manage-expenditures/manage-expenditures.component";
import {CalculateSalaryComponent} from "./calculate-salary/calculate-salary.component";
import {ViewStatisticsComponent} from "./view-statistics/view-statistics.component";


const routes: Routes = [
  {

    path: '',
    component: AdmFinanceComponent,
    children: [

      {
        path: 'man-fin',
        component: ManageExpendituresComponent,
      },
      {
        path: 'cal-sal',
        component: CalculateSalaryComponent,

      },   {
        path: 'view-fin',
        component: ViewStatisticsComponent,

      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',

      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmFinanceRoutingModule { }

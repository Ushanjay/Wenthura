import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmFinanceRoutingModule } from './adm-finance-routing.module';
import { ManageExpendituresComponent } from './manage-expenditures/manage-expenditures.component';
import { CalculateSalaryComponent } from './calculate-salary/calculate-salary.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import {NbButtonModule, NbCardModule, NbInputModule} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [ManageExpendituresComponent, CalculateSalaryComponent, ViewStatisticsComponent],
    imports: [
        CommonModule,
        AdmFinanceRoutingModule,
        NbCardModule,
        Ng2SmartTableModule,
        NbInputModule,
        NbButtonModule,
        NgxEchartsModule
    ]
})
export class AdmFinanceModule { }

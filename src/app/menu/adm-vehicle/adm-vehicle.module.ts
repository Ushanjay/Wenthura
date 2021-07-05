import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmVehicleRoutingModule } from './adm-vehicle-routing.module';
import { VehicleStatsComponent } from './vehicle-stats/vehicle-stats.component';
import {ChartModule} from "angular2-chartjs";
import {NgxEchartsModule} from "ngx-echarts";
import {NbCardModule} from "@nebular/theme";


@NgModule({
  declarations: [VehicleStatsComponent],
  imports: [
    CommonModule,
    AdmVehicleRoutingModule,
    ChartModule,
    NgxEchartsModule,
    NbCardModule
  ]
})
export class AdmVehicleModule { }

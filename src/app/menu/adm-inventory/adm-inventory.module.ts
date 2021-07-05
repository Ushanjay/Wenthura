import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmInventoryRoutingModule } from './adm-inventory-routing.module';
import { RegisterVehicleComponent } from '../adm-vehicle/register-vehicle/register-vehicle.component';
import { RegisterInventoryComponent } from './register-inventory/register-inventory.component';
import { InventoryStatsComponent } from './inventory-stats/inventory-stats.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbSpinnerModule
} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ChartModule} from "angular2-chartjs";
import {NgxEchartsModule} from "ngx-echarts";
import {NzIconModule, NzUploadModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [RegisterVehicleComponent, RegisterInventoryComponent, InventoryStatsComponent],
  imports: [
    CommonModule,
    AdmInventoryRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    ChartModule,
    NgxEchartsModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NzUploadModule,
    NzIconModule,
    FormsModule,
    NbSpinnerModule,
    NbActionsModule
  ]
})
export class AdmInventoryModule { }

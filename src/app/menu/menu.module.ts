import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import {MenuRoutingModule} from './menu-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule, NbSelectModule, NbTabsetModule,
  NbUserModule
} from '@nebular/theme';
import {NbThemeModule} from '@nebular/theme';
import {EmployeeModule} from './employee/employee.module';
import { AdmServiceModule} from './admservices/admservice.module';
import { AdmEventComponent } from './adm-event/adm-event.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgZorroAntdModule, NzCarouselModule} from 'ng-zorro-antd';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { AdmvendorComponent } from './admvendor/admvendor.component';
import { SettingsComponent } from './settings/settings.component';
import {AdvendorModule} from './admvendor/advendor.module';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { AdmInventoryComponent } from './adm-inventory/adm-inventory.component';
import { AdmVehicleComponent } from './adm-vehicle/adm-vehicle.component';
import {ChartModule} from 'angular2-chartjs';
import { EditProfileComponent } from './vendor-profile/edit-profile/edit-profile.component';
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";
import {NgxEchartsDirective, NgxEchartsModule} from "ngx-echarts";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { AdmFinanceComponent } from './adm-finance/adm-finance.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AdmEventComponent,
    NotFoundComponent,
    AdmvendorComponent,
    SettingsComponent,
    VendorProfileComponent,
    AdmInventoryComponent,
    AdmVehicleComponent,
    EditProfileComponent,
    AdmFinanceComponent,

  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NgxChartsModule,
    MenuRoutingModule,
    NbThemeModule,
    AdmServiceModule,
    AdvendorModule,
    NbMenuModule,
    NbIconModule,
    EmployeeModule,
    NbCardModule,
    NbButtonModule,
    NzCarouselModule,
    NgZorroAntdModule,
    CarouselModule,
    ChartModule,
    NbListModule,
    NbInputModule,
    NbUserModule,
    NbSelectModule,
    NbTabsetModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    RatingModule,
    ButtonModule

  ]
})
export class MenuModule { }

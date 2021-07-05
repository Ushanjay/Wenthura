import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdmServicesComponent} from './admservices.component';
import { AdmServiceRoutingModule } from './admservice-routing.module';
import { ViewServicesComponent } from './view-services/view-services.component';
import { AddServicesComponent } from './add-services/add-services.component';
import {NbAccordionModule, NbCardModule, NbTabsetModule} from "@nebular/theme";


@NgModule({
  declarations: [
    ViewServicesComponent,
    AddServicesComponent,
    AdmServicesComponent
  ],

  imports: [
    CommonModule,
    AdmServiceRoutingModule,
    NbCardModule,
    NbTabsetModule,
    NbAccordionModule
  ]
})
export class AdmServiceModule { }

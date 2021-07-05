import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvendorRoutingModule } from './advendor-routing.module';
import { RegvendorComponent } from './regvendor/regvendor.component';


@NgModule({
  declarations: [RegvendorComponent],
  imports: [
    CommonModule,
    AdvendorRoutingModule
  ]
})
export class AdvendorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmEventRoutingModule } from './adm-event-routing.module';
import { AdmEventViewComponent } from './adm-event-view/adm-event-view.component';
import { AdmMeetingComponent } from './adm-meeting/adm-meeting.component';


@NgModule({
  declarations: [AdmEventViewComponent, AdmMeetingComponent],
  imports: [
    CommonModule,
    AdmEventRoutingModule
  ]
})
export class AdmEventModule { }

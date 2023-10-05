import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceDurationComponent } from './resource-duration/resource-duration.component';
import { ResourceNameComponent } from './resource-name/resource-name.component';
import { ResourceTypeComponent } from './resource-type/resource-type.component';
import { FormsModule } from '@angular/forms';
import { WeekDayComponent } from './resource-details/week-day/week-day.component';
import { TimeEntryComponent } from './resource-details/week-day/time-entry/time-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ResourceDetailsComponent,
    ResourceDurationComponent,
    ResourceNameComponent,
    ResourceTypeComponent,
    WeekDayComponent,
    TimeEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FormsModule,
    NgbNavModule,
    NgbTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

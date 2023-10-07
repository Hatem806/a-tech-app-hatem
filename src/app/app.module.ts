import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourceDurationComponent } from './components/resource-duration/resource-duration.component';
import { ResourceNameComponent } from './components/resource-name/resource-name.component';
import { ResourceTypeComponent } from './components/resource-type/resource-type.component';
import { FormsModule } from '@angular/forms';
import { WeekDayComponent } from './components/resource-details/week-day/week-day.component';
import { TimeEntryComponent } from './components/resource-details/week-day/time-entry/time-entry.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}, {}),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

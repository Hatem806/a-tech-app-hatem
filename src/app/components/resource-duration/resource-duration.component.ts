import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resource-duration',
  templateUrl: './resource-duration.component.html',
  styleUrls: ['./resource-duration.component.scss'],
})
export class ResourceDurationComponent {
  durationType = 'Weeks';
  durationOptions = ['Weeks', 'Months', 'Years'];
  resourceDuration = 50;
  attendeesCount = 1;
  isSpecificDuration = false;
  isMultipleAttendees = true;
}

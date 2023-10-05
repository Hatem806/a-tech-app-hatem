import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss'],
})
export class TimeEntryComponent {
  @Input() appointmentData: any;
}

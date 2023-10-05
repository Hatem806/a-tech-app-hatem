import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss'],
})
export class ResourceDetailsComponent {
  timeObj = {
    start: { hour: 15, minute: 15 },
    end: { hour: 15, minute: 15 },
    active: true,
  };

  appointments = [
    {
      day: 'Sun',
      ...this.timeObj,
    },
    {
      day: 'Mon',
      ...this.timeObj,
    },
    {
      day: 'Tues',
      ...this.timeObj,
    },
    {
      day: 'Wed',
      ...this.timeObj,
    },
    {
      day: 'Thu',
      ...this.timeObj,
    },
    {
      day: 'Fri',
      ...this.timeObj,
    },
    {
      day: 'Sat',
      ...this.timeObj,
    },
  ];

  toggleDay(event: any) {
    const appointment = this.appointments.find((app) => app.day == event.day);
    if (appointment) {
      appointment.active = !appointment.active;
    }
  }
}

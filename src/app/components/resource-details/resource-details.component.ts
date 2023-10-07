import { Component } from '@angular/core';
import { Weekday } from 'src/app/models/appointment';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss'],
})
export class ResourceDetailsComponent {
  appointments: Weekday[] = [
    {
      name: 'Sun',
      appointments: [],
      active: true,
    },
    {
      name: 'Mon',
      appointments: [],
      active: true,
    },
    {
      name: 'Tues',
      appointments: [],
      active: true,
    },
    {
      name: 'Wed',
      appointments: [],
      active: true,
    },
    {
      name: 'Thu',
      appointments: [],
      active: true,
    },
    {
      name: 'Fri',
      appointments: [],
      active: true,
    },
    {
      name: 'Sat',
      appointments: [],
      active: true,
    },
  ];

  toggleDay(event: Weekday) {
    const appointment = this.appointments.find((x) => x.name == event.name);
    if (appointment) {
      appointment.active = !appointment.active;
    }
  }
}

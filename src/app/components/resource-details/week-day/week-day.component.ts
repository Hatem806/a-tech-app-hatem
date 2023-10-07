import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weekday } from 'src/app/models/appointment';
import { Store } from '@ngrx/store';
import {
  addAppointment,
  removeAppointment,
} from 'src/app/state/weekday/weekday.actions';
import { selectAllAppointments } from 'src/app/state/weekday/weekday.selectors';
@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss'],
})
export class WeekDayComponent {
  @Input() day: Weekday = {
    name: '',
    appointments: [
      {
        start: { hour: 0, minute: 0 },
        end: { hour: 0, minute: 0 },
        i: 0,
      },
    ],
    active: true,
  };
  @Input() weekdayIndex: number = 0;
  @Output() toggleDayEmitter: EventEmitter<Weekday> =
    new EventEmitter<Weekday>();
  showToast = false;
  constructor(private store: Store) {}

  // public allData = this.store.select(selectAllAppointments);

  ngOnInit() {

    this.day.appointments.push({
      start: { hour: 0, minute: 0 },
      end: { hour: 0, minute: 0 },
      i: 0,
    });
  }
  addAppointment() {
    this.day.appointments.push({
      start: { hour: 0, minute: 0 },
      end: { hour: 0, minute: 0 },
      i: 0,
    });
    this.store.dispatch(
      addAppointment({
        Appointment: {
          start: { hour: 0, minute: 0 },
          end: { hour: 0, minute: 0 },
          i: 0,
        },
      })
    );
  }
  removeAppointment(index: number) {
    this.store.dispatch(
      removeAppointment({
        weekdayIndex: this.weekdayIndex,
        appointmentIndex: index,
      })
    );
    this.day.appointments.splice(index, 1);
  }
  onToggleDay() {
    this.toggleDayEmitter.emit(this.day);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(this.day));
  }
}

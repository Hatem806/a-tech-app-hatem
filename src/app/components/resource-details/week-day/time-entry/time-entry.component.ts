import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';


@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss'],
})
export class TimeEntryComponent {
  @Input() appointment: Appointment = {
    start: { hour: 0, minute: 0 },
    end: { hour: 0, minute: 0 },
    i: 0,
  };
  currentTime = new Date();
  minuteStep = 5;
  meridian = true;

  ngOnInit() {
    this.formatTime(this.appointment.start, 'start');
    this.formatTime(this.appointment.end, 'end');
  }

  formatTime(
    timeObj: { hour: number; minute: number },
    position?: string
  ): void {
    const { hour, minute } = timeObj;

    let period = 'AM';
    // Determine AM or PM based on the hour
    if (hour >= 12) {
      period = 'PM';
    }

    // Convert to 12-hour format
    const formattedHour = hour % 12 || 12;
    const res = `${formattedHour}:${minute < 10 ? '0' : ''}${minute} ${period}`;
    if (position) {
      if (position === 'start') {
        this.appointment[position] = timeObj;
        this.appointment[position].formatted = res;
      } else if (position === 'end') {
        this.appointment[position] = timeObj;
        this.appointment[position].formatted = res;
      }
    }
  }

  setNow(position: string) {
    this.formatTime(
      {
        hour: this.currentTime.getHours(),
        minute: this.currentTime.getMinutes(),
      },
      position
    );
  }
}

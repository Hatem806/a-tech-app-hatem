import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss'],
})
export class WeekDayComponent {
  @Input() appointmentData: any;
  @Input() i: number = 0;
  @Output() toggleDayEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  startTime = { hour: 0, minute: 0 };
  endTime = { hour: 0, minute: 0 };
  minuteStep = 5;
  meridian = true;
  formattedStartTime = '';
  formattedEndTime = '';
  appointments = 1;
  currentTimeObj = new Date();
  currentHour = this.currentTimeObj.getHours();
  currentMin = this.currentTimeObj.getMinutes();

  ngOnInit() {
    this.formatTime(this.startTime, 'start');
    this.formatTime(this.endTime, 'end');
  }

  formatTime(
    timeObj: { hour: number; minute: number },
    position?: string
  ): string {
    const { hour, minute } = timeObj;
    const day = this.appointmentData.find(
      (app: any) => app.day === this.appointmentData[this.i].day
    );
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
        this.formattedStartTime = res;
        day[position] = timeObj;
        day[position].formatted = res;
        delete day[position].second;
      } else {
        this.formattedEndTime = res;
        day[position] = timeObj;
        day[position].formatted = res;
        delete day[position].second;
      }
    }
    return res;
  }

  setNow(position: string) {
    this.formatTime(
      { hour: this.currentHour, minute: this.currentMin },
      position
    );
  }

  addAppointment() {}
  onToggleDay() {
    this.toggleDayEmitter.emit(this.appointmentData.active);
  }
}

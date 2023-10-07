import { createSelector } from '@ngrx/store';
import { AppointmentState } from './weekday.reducer';
import { AppState } from '../app.state';

export const selectAppointments = (state: AppState) => state.allWeekdays;

export const selectAllAppointments = createSelector(
    selectAppointments,
  (state: AppointmentState) => state.Weekdays
);

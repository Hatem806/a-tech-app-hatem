import { createAction, props } from '@ngrx/store';
import { Appointment } from '../../models/appointment';

export const addAppointment = createAction(
  '[Appointments] Add',
  props<{ Appointment: Appointment }>()
);

export const removeAppointment = createAction(
  '[Appointments] Remove',
  props<{ weekdayIndex: number; appointmentIndex: number }>()
);

export const resetDay = createAction('[Appointments] Reset day');

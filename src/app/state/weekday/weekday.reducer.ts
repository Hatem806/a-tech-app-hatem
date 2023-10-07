import { createReducer, on } from '@ngrx/store';
import { Appointment, Weekday } from '../../models/appointment';
import { addAppointment, removeAppointment } from './weekday.actions';

export interface AppointmentState {
  Weekdays: Weekday[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: AppointmentState = {
  Weekdays: [
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
  ],
  error: 'null',
  status: 'pending',
};

export const weekdayReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new todo to the Weekdays array
  on(addAppointment, (state, { Appointment: Appointment }) => ({
    ...state,
    Weekdays: state.Weekdays.map((weekday, index) =>
      index === Appointment.i
        ? {
            ...weekday,
            appointments: [...weekday.appointments, Appointment],
          }
        : weekday
    ),
  })),
  // Remove the todo from the Weekdays array
  on(removeAppointment, (state, { weekdayIndex, appointmentIndex }) => ({
    ...state,
    Weekdays: state.Weekdays.map((weekday, index) =>
      index === weekdayIndex
        ? {
            ...weekday,
            appointments: weekday.appointments.filter(
              (_, i) => i !== appointmentIndex
            ),
          }
        : weekday
    ),
  }))
  // // Trigger loading the Weekdays
  // on(loadWeekdays, (state) => ({ ...state, status: 'loading' })),
  // // Handle successfully loaded Weekdays
  // on(loadWeekdaysSuccess, (state, { Weekdays }) => ({
  //   ...state,
  //   Weekdays: Weekdays,
  //   error: null,
  //   status: 'success',
  // })),
  // // Handle Weekdays load failure
  // on(loadWeekdaysFailure, (state, { error }) => ({
  //   ...state,
  //   error: error,
  //   status: 'error',
  // }))
);

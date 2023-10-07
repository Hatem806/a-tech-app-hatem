export interface Appointment {
  start: { hour: number; minute: number; formatted?: string };
  end: { hour: number; minute: number; formatted?: string };
  i: number;
}

export interface Weekday {
  name: string;
  appointments: Appointment[];
  active: boolean;
}

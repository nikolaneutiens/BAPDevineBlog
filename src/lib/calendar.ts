/**
 * Fixed moments in the planning, like meetings and deadlines. They are shown on top of a day in the calendar.
 *
 * The tasks themselves are not in this file: they live in the database, so everyone can add, assign,
 * tick off and time them straight from the Calendar page.
 *
 * Example:
 *   { date: '2026-11-17', time: '11:30', title: 'Meetup with client' },
 */
export interface CalendarEvent {
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM
  title: string;
}

/** The three tracks of the planning, in the order the calendar shows them. */
export const TRACKS = [
  { id: 'design', label: 'Design', tag: 'Design' },
  { id: 'ux', label: 'UX', tag: 'Research' },
  { id: 'develop', label: 'Development', tag: 'Development' },
] as const;

export const EVENTS: CalendarEvent[] = [
  { date: '2026-11-10', time: '11:30', title: 'Meetup with client' },
  { date: '2026-11-11', title: 'Day off (holiday)' },
  { date: '2026-11-12', time: '09:30', title: 'Meetup with coach' },
  { date: '2026-11-17', time: '11:30', title: 'Meetup with client' },
  { date: '2026-11-20', title: 'Project pitch' },

  // Add new events here.
];

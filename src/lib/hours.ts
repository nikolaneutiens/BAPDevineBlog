import type { MemberId } from './team';

/**
 * Time tracking: one line per person per day (or per task).
 * The hours overview on the team page is built from this list automatically.
 *
 * Example:
 *   { date: '2026-11-04', person: 'ximen', hours: 6, task: 'Modelled KRABBEL and PUK' },
 *
 * person is one of: 'lomme', 'ximen', 'nicolas'
 */
export interface HourEntry {
  date: string; // YYYY-MM-DD
  person: MemberId;
  hours: number;
  task: string;
}

export const HOURS: HourEntry[] = [
  // Add your hours here.
];

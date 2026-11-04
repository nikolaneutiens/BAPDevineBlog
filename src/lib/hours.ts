import type { MemberId } from './team';

/**
 * Time tracking: one line per person per day (or per task).
 * The hours on the team page and on everyone's own page are built from this list automatically.
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

/** Hour statistics for one person, or for the whole team when no person is given. */
export function hourStats(person?: MemberId) {
  const entries = person ? HOURS.filter((h) => h.person === person) : HOURS;
  const total = entries.reduce((sum, h) => sum + h.hours, 0);
  const days = [...new Set(entries.map((h) => h.date))].sort();
  const perDay = days.map((date) => ({
    date,
    hours: entries.filter((h) => h.date === date).reduce((sum, h) => sum + h.hours, 0),
    tasks: entries.filter((h) => h.date === date).map((h) => h.task),
  }));
  const best = perDay.reduce((a, b) => (b.hours > a.hours ? b : a), { date: '', hours: 0, tasks: [] as string[] });
  return {
    entries,
    total,
    days,
    perDay,
    average: days.length ? total / days.length : 0,
    best,
  };
}

export const fmtHours = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

export const dayLabel = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

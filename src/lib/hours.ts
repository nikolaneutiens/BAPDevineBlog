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

/** The same entry for every team member (things we did together). */
const together = (date: string, hours: number, task: string): HourEntry[] =>
  (['lomme', 'ximen', 'nicolas'] as const).map((person) => ({ date, person, hours, task }));

export const HOURS: HourEntry[] = [
  // ---- together
  ...together('2026-10-27', 3, 'Kick-off at school (9:00–12:00)'),
  ...together('2026-10-28', 2, 'Team call'),
  ...together('2026-10-29', 6.25, 'Working on campus (9:00–16:00, 45 min lunch break)'),
  ...together('2026-10-30', 5, 'Working together (10:00–15:00)'),

  // ---- Ximen
  { date: '2026-10-28', person: 'ximen', hours: 2.5, task: 'Extra work after the call' },
  { date: '2026-10-31', person: 'ximen', hours: 2.5, task: 'Texturing RITS, cap study, first blog post' },
  { date: '2026-11-01', person: 'ximen', hours: 5.75, task: 'Rigging, weights, running cycle, idle and dust clouds for RITS' },
  { date: '2026-11-02', person: 'ximen', hours: 0.5, task: 'Blog post about the RITS animations' },
  { date: '2026-11-03', person: 'ximen', hours: 3.5, task: 'Designing SPRIET, KRABBEL and PUK' },
  { date: '2026-11-04', person: 'ximen', hours: 1.25, task: 'Final KRABBEL and PUK, organising files, blog pages' },

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

export const fmtHours = (n: number) => String(Math.round(n * 100) / 100);

export const dayLabel = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

import { fetchFinishedTimeEntries } from './supabase';
import { TEAM, type MemberId } from './team';

/**
 * Time tracking: one line per person per day (or per task).
 * The hours on the team page and on everyone's own page are built from this list automatically.
 *
 * Example:
 *   { date: '2026-11-04', person: 'ximen', hours: 6, task: 'Modelled KRABBEL and PUK' },
 *
 * person is one of: 'lomme', 'ximen', 'nikola'
 */
export interface HourEntry {
  date: string; // YYYY-MM-DD
  person: MemberId;
  hours: number;
  task: string;
}

/** The same entry for every team member (things we did together). */
const together = (date: string, hours: number, task: string): HourEntry[] =>
  (['lomme', 'ximen', 'nikola'] as const).map((person) => ({ date, person, hours, task }));

/** Hours logged by hand. Use getHours() to also get the hours timed with the work timer. */
const MANUAL_HOURS: HourEntry[] = [
  // ---- together
  ...together('2026-10-27', 3, 'Kick-off at school (9:00–12:00)'),
  ...together('2026-10-28', 2, 'Team call'),
  ...together('2026-10-29', 6.25, 'Working on campus (9:00–16:00, 45 min lunch break)'),
  ...together('2026-10-30', 5, 'Working together (10:00–15:00)'),

  // ---- Ximen
  { date: '2026-10-28', person: 'ximen', hours: 2.5, task: 'Extra work after the call' },
  { date: '2026-10-31', person: 'ximen', hours: 2.5, task: 'Texturing RITS, cap study, first blog post' },
  { date: '2026-11-01', person: 'ximen', hours: 5.75, task: 'Rigging, weights, running cycle, idle and dust clouds for RITS' },
  { date: '2026-11-02', person: 'ximen', hours: 1.5, task: 'Blog post about the RITS animations' },
  { date: '2026-11-03', person: 'ximen', hours: 3.5, task: 'Designing SPRIET, KRABBEL and PUK' },
  { date: '2026-11-04', person: 'ximen', hours: 2.75, task: 'Final KRABBEL and PUK, organising files, blog pages, first Unity prototype' },
  { date: '2026-11-06', person: 'ximen', hours: 3.75, task: 'Falling objects (duck, box, cone, barrel), modelling, colour and rig of TIPPER, two blog posts' },
  { date: '2026-11-07', person: 'ximen', hours: 6.25, task: 'Scene1 environment (cardboard trees, pencils, planks, backdrop, lighting, grass), colour-blind readability check, Feedback section of the blog' },
  { date: '2026-11-10', person: 'ximen', hours: 6.5, task: 'Packed textures into all Blender files, styleboard and moodboard in Figma, cardboard texture references, blog posts on the pitch, styleboard and storyboard, blog colours, client and teacher feedback reports' },

  // Add your hours here.
];

/**
 * All hours: the ones above plus everything timed with the work timer (read fresh from the database
 * every time, so new timed hours show up on the next page load in dev and on the next build online).
 */
export async function getHours(): Promise<HourEntry[]> {
  return [...MANUAL_HOURS, ...(await timedHours())];
}

/**
 * Turns the timed sessions from the database into hour entries: one per person, per day, per task.
 * The day is the day in Belgium when the work started. If the database can't be reached, the build goes on without them.
 */
async function timedHours(): Promise<HourEntry[]> {
  let rows;
  try {
    rows = await fetchFinishedTimeEntries();
  } catch (error) {
    console.warn(`[hours] Timed hours skipped: ${(error as Error).message}`);
    return [];
  }
  const day = (t: string) => new Date(t).toLocaleDateString('en-CA', { timeZone: 'Europe/Brussels' });
  const grouped = new Map<string, HourEntry>();
  for (const r of rows) {
    const date = day(r.started_at);
    const hours = (Date.parse(r.ended_at!) - Date.parse(r.started_at)) / 3_600_000;
    const task = r.note || 'Work session';
    const key = `${date}|${r.person}|${task}`;
    const entry = grouped.get(key) ?? { date, person: r.person, hours: 0, task };
    entry.hours += hours;
    grouped.set(key, entry);
  }
  // Round to the minute, and leave out sessions shorter than a minute.
  return [...grouped.values()]
    .map((e) => ({ ...e, hours: Math.round(e.hours * 60) / 60 }))
    .filter((e) => e.hours > 0);
}

/** Hour statistics for one person, or for the whole team when no person is given. */
export function hourStats(hours: HourEntry[], person?: MemberId) {
  const entries = person ? hours.filter((h) => h.person === person) : hours;
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

/** Hours as hours and minutes: 16.25 -> "16h 15m", 6 -> "6h", 0.75 -> "45m". */
export const fmtHours = (n: number) => {
  const total = Math.round(n * 60);
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (!h) return m ? `${m}m` : "0h";
  // A non-breaking space keeps hours and minutes on one line.
  return m ? `${h}h\u00a0${String(m).padStart(2, '0')}m` : `${h}h`;
};

const DAY = 86_400_000;
const toIso = (t: number) => new Date(t).toISOString().slice(0, 10);

export interface Week {
  number: number; // 1 = the week we started
  label: string; // "26 Oct – 1 Nov"
  days: string[]; // Monday to Sunday, YYYY-MM-DD
}

/** Today in Belgium, as YYYY-MM-DD. */
export const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Brussels' });

/**
 * Every week (Monday to Sunday) from the first logged day up to the current week,
 * including weeks without hours.
 */
export function weeksOf(dates: string[]): Week[] {
  if (dates.length === 0) return [];
  const sorted = [...dates, today()].sort();
  const monday = (d: string) => {
    const t = Date.parse(d + 'T00:00:00Z');
    return t - ((new Date(t).getUTCDay() + 6) % 7) * DAY;
  };
  const first = monday(sorted[0]);
  const last = monday(sorted[sorted.length - 1]);
  const weeks: Week[] = [];
  for (let t = first, n = 1; t <= last; t += 7 * DAY, n++) {
    const days = Array.from({ length: 7 }, (_, i) => toIso(t + i * DAY));
    weeks.push({ number: n, label: `${dayLabel(days[0])} – ${dayLabel(days[6])}`, days });
  }
  return weeks;
}

export const weekdayLabel = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { weekday: 'short', timeZone: 'UTC' });

export const dayLabel = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

// ---- What the Team pages show. Used when the page is built and again in the browser for live updates.

/** Everything the Team overview shows: totals, hours per person and a stacked chart per week. */
export function teamSummary(hours: HourEntry[]) {
  const total = hours.reduce((sum, h) => sum + h.hours, 0);
  const perPerson = TEAM.map((m) => ({
    ...m,
    hours: hours.filter((h) => h.person === m.id).reduce((sum, h) => sum + h.hours, 0),
  }));
  const days = [...new Set(hours.map((h) => h.date))].sort();
  const dayOf = (date: string) => {
    const parts = TEAM.map((m) => ({
      ...m,
      hours: hours.filter((h) => h.date === date && h.person === m.id).reduce((sum, h) => sum + h.hours, 0),
    }));
    return { date, parts, sum: parts.reduce((s, p) => s + p.hours, 0) };
  };
  const weeks = weeksOf(days).map((w) => {
    const wd = w.days.map(dayOf);
    const sum = wd.reduce((s, d) => s + d.sum, 0);
    return { ...w, days: wd, title: `Week ${w.number} · ${w.label} · ${fmtHours(sum)}` };
  });
  return {
    total,
    perPerson,
    maxPerson: Math.max(1, ...perPerson.map((p) => p.hours)),
    days,
    average: days.length ? total / days.length : 0,
    maxDay: Math.max(1, ...days.map((d) => dayOf(d).sum)),
    weeks,
  };
}

/** Everything one member's page shows: their stats and their chart per week (lined up with the team's weeks). */
export function memberSummary(hours: HourEntry[], person: MemberId) {
  const stats = hourStats(hours, person);
  const weeks = weeksOf(hours.map((h) => h.date)).map((w) => {
    const days = w.days.map((date) => stats.perDay.find((d) => d.date === date) ?? { date, hours: 0, tasks: [] as string[] });
    const total = days.reduce((s, d) => s + d.hours, 0);
    return { ...w, days, title: `Week ${w.number} · ${w.label} · ${fmtHours(total)}` };
  });
  return { stats, weeks, maxDay: Math.max(1, ...stats.perDay.map((d) => d.hours)) };
}

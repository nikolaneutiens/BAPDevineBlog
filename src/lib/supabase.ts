import type { MemberId } from './team';

/**
 * Connection to our Supabase database (project "bap-blog"), where the calendar tasks and timed hours live.
 *
 * The publishable key is meant to be public: visitors can only read. Every change goes through a
 * database function that checks the team password first (see the README).
 */
export const SUPABASE_URL = 'https://qlpspgpmemumyafhtoow.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_5aR5pMXiLtgOfb6ptm9Cvw_cbeFCPMO';

export type TrackId = 'design' | 'ux' | 'develop';

export interface Task {
  id: string;
  date: string; // YYYY-MM-DD
  track: TrackId;
  title: string;
  assignee: MemberId | null;
  done: boolean;
  created_at: string;
}

export interface TimeEntry {
  id: string;
  task_id: string | null;
  session: string;
  person: MemberId;
  /** What was worked on. */
  note: string;
  track: TrackId | null;
  started_at: string;
  ended_at: string | null;
}

/** A running or paused work session of one person. No row means that person isn't working. */
export interface WorkTimer {
  person: MemberId;
  session: string;
  note: string;
  started_at: string;
}

/** Reads finished time entries straight from the REST API (used while building the site). */
export async function fetchFinishedTimeEntries(): Promise<TimeEntry[]> {
  const url = `${SUPABASE_URL}/rest/v1/time_entries?select=*&ended_at=not.is.null&order=started_at`;
  const res = await fetch(url, { headers: { apikey: SUPABASE_KEY } });
  if (!res.ok) throw new Error(`Supabase answered ${res.status}`);
  return res.json();
}

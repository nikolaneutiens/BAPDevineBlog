/**
 * Browser-side helpers shared by the Calendar and Team pages: one database client, and the team password
 * that unlocks editing. The password is kept in this browser only (localStorage) until "Log out".
 */
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY, SUPABASE_URL } from './supabase';

export const db = createClient(SUPABASE_URL, SUPABASE_KEY);

const KEY = 'bap-team-password';
let password: string | null = (() => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
})();

const listeners = new Set<() => void>();
function save(value: string | null) {
  password = value;
  try {
    value ? localStorage.setItem(KEY, value) : localStorage.removeItem(KEY);
  } catch {}
  listeners.forEach((fn) => fn());
}

export const canEdit = () => !!password;

/** Runs `fn` now and every time someone logs in or out. */
export function onAuthChange(fn: () => void) {
  listeners.add(fn);
  fn();
}

export async function login(value: string): Promise<string | null> {
  const { data, error } = await db.rpc('check_team_password', { pw: value });
  if (error) return 'Could not reach the database.';
  if (!data) return 'That password is not right.';
  save(value);
  return null;
}

export const logout = () => save(null);

/** Calls a database function with the team password. Returns an error message, or null when it worked. */
export async function teamCall(fn: string, args: Record<string, unknown>): Promise<string | null> {
  const { error } = await db.rpc(fn, { pw: password, ...args });
  if (!error) return null;
  if (/password/i.test(error.message)) save(null);
  return error.message;
}

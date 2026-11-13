/**
 * Feedback categories. `id` is used in the content files and in the filter,
 * `filter` is the label of the filter button, `label` is shown on cards and detail pages.
 */
export const FEEDBACK_CATEGORIES = [
  { id: 'client', filter: 'Client', label: 'Client Feedback' },
  { id: 'coach', filter: 'Coach', label: 'Coach Feedback' },
  { id: 'peer', filter: 'Peer Feedback', label: 'Peer Feedback' },
  { id: 'experts', filter: 'Experts', label: 'Expert Feedback' },
] as const;

export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number]['id'];

export const CATEGORY_IDS = FEEDBACK_CATEGORIES.map((c) => c.id) as [FeedbackCategory, ...FeedbackCategory[]];

export const categoryLabel = (id: FeedbackCategory) => FEEDBACK_CATEGORIES.find((c) => c.id === id)!.label;

/**
 * Status of an action that came out of a feedback session.
 * - planned: something we intend to do (not done yet)
 * - decided: a decision that was validated in the session
 * - done: only when we have actually finished it
 */
export const ACTION_STATUS = {
  planned: 'Planned',
  decided: 'Decided',
  done: 'Done',
} as const;

export type ActionStatus = keyof typeof ACTION_STATUS;

/** "30 October 2026", or "November 2026" when only the month is known. */
export function feedbackDate(date: Date, monthOnly: boolean) {
  return date.toLocaleDateString('en-GB', {
    ...(monthOnly ? {} : { day: 'numeric' }),
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

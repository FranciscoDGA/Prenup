/**
 * Newsletter / lead capture configuration — SINGLE POINT OF TRUTH.
 *
 * One Kit form serves all placements; the `next` hidden field controls where
 * each placement redirects after submission (set per source below).
 *
 * Form ID: 9981147 (template "Clare", inline) — Embed → copy action URL to update.
 * Kit form settings: "When a visitor subscribes" → Redirect to an external page.
 */
export const kitFormAction = 'https://app.kit.com/forms/9981147/subscriptions';

const redirects: Record<string, string> = {
  'lead-checklist': 'https://www.prenupanswers.com/free/thank-you/prenup-checklist/',
  'lead-scripts': 'https://www.prenupanswers.com/free/thank-you/money-talk-script/',
};

export const redirectToFor = (source: string): string =>
  redirects[source] || 'https://www.prenupanswers.com/free/';

export const isSubscribedConfigured = (): boolean => kitFormAction.length > 0;

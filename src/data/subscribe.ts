/**
 * Newsletter / lead capture configuration — SINGLE POINT OF TRUTH.
 *
 * MailerLite (free plan) — one embedded form serves all placements; the site's
 * own JS POSTs here and navigates to the per-source thank-you page below.
 *
 * Form: Embedded "Newsletter" (slug TaZb1Z, id 200044458910156443), account 2673118.
 * To update: MailerLite → Forms → Newsletter → Share → Embed → copy the form action URL.
 */
export const formEndpoint =
  'https://assets.mailerlite.com/jsonp/2673118/forms/200044458910156443/subscribe';

const redirects: Record<string, string> = {
  'lead-checklist': 'https://www.prenupanswers.com/free/thank-you/prenup-checklist/',
  'lead-scripts': 'https://www.prenupanswers.com/free/thank-you/money-talk-script/',
};

export const redirectToFor = (source: string): string =>
  redirects[source] || 'https://www.prenupanswers.com/free/';

export const isSubscribedConfigured = (): boolean => formEndpoint.length > 0;

/**
 * Newsletter / lead capture configuration — SINGLE POINT OF TRUTH.
 *
 * Create 3 Kit forms (see setup guide), then paste each form's embed action URL:
 *   e.g. 'https://app.kit.com/forms/1234567/submissions'
 *
 * Form → "After submission → Redirect to":
 *   newsletter          → https://www.prenupanswers.com/free/
 *   lead-checklist      → https://www.prenupanswers.com/free/thank-you/prenup-checklist/
 *   lead-scripts        → https://www.prenupanswers.com/free/thank-you/money-talk-script/
 *
 * Any source not listed here falls back to `default` (the newsletter form).
 * Empty string = not configured yet → forms render as plain GET (no-op).
 */
export const kitFormActions: Record<string, string> = {
  default: '',
  'lead-checklist': '',
  'lead-scripts': '',
};

export const kitFormActionFor = (source: string): string =>
  kitFormActions[source] || kitFormActions.default || '';

export const isSubscribedConfigured = (): boolean =>
  Object.values(kitFormActions).some((a) => a.length > 0);

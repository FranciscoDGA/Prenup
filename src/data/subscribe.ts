/**
 * Newsletter / lead capture configuration — SINGLE POINT OF TRUTH.
 *
 * After creating your Kit account and form (see setup guide), paste the form's
 * embed action URL here, e.g.:
 *   kitFormAction: 'https://app.kit.com/forms/1234567/submissions',
 *
 * Kit form settings must also point "after submission" redirect to:
 *   https://www.prenupanswers.com/free/thank-you/prenup-checklist/
 *   https://www.prenupanswers.com/free/thank-you/money-talk-script/
 * (create one form per lead magnet, or one form with a single redirect to /free/)
 */
export const subscribe = {
  kitFormAction: '',
};

export const isSubscribedConfigured = (): boolean => subscribe.kitFormAction.length > 0;

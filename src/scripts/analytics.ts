/**
 * Minimal analytics bridge for funnel events (Sprint 3).
 *
 * Cloudflare Web Analytics (cookieless) is loaded at the platform level and has
 * no public custom-event API, so events are:
 *   1. pushed to window.paQueue (inspectable, testable, no PII), and
 *   2. forwarded to window.cf.beacon when/if the beacon is present.
 *
 * Never send personal data here — only ids and context flags (FASE 26).
 */
type TrackProps = Record<string, string | undefined>;

declare global {
  interface Window {
    paQueue?: Array<Record<string, unknown>>;
  }
}

export function track(event: string, props?: TrackProps): void {
  try {
    const safe: Record<string, string> = {};
    if (props) {
      for (const [key, value] of Object.entries(props)) {
        if (typeof value === 'string' && value.length > 0) safe[key] = value.slice(0, 64);
      }
    }
    (window.paQueue = window.paQueue ?? []).push({ event, ...safe });

    const cf = (window as unknown as { cf?: { beacon?: (...args: unknown[]) => void } }).cf;
    if (typeof cf?.beacon === 'function') cf.beacon('event', event, safe);
  } catch {
    /* analytics must never break the page */
  }
}

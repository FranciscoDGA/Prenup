/**
 * Partner data model — SINGLE POINT OF TRUTH for commercial partners (Sprint 4).
 *
 * Rules (FASE 42): never invent partners, programs, commission rates, or reviews.
 * Only configure partners with a real, verifiable affiliate relationship.
 * To retire a partner: set status to 'paused' or 'removed' — every commercial
 * placement disappears from the site on the next build (FASE 40/60).
 */
import { AFF } from './affiliate';

export type PartnerStatus = 'active' | 'paused' | 'removed';

export interface Partner {
  /** Stable id used in analytics (never the raw URL). */
  id: string;
  name: string;
  description: string;
  url: string;
  /** True when the URL carries an affiliate parameter. */
  affiliate: boolean;
  status: PartnerStatus;
  /**
   * Optional state-coverage list (US postal abbreviations).
   * undefined = no verified coverage data — never render state-specific claims (FASE 41).
   */
  states?: string[];
}

export const PARTNERS: Partner[] = [
  {
    id: 'helloprenup',
    name: 'HelloPrenup',
    description: 'Online prenup service with state-specific documents and flat-fee pricing.',
    url: AFF.helloPrenup,
    affiliate: true,
    status: 'active',
  },
  {
    id: 'first',
    name: 'First',
    description: 'Online prenup service positioning itself on plain-language agreements.',
    url: AFF.first,
    affiliate: true,
    status: 'active',
  },
];

/**
 * Failsafe (FASE 60/61): returns the URL only when the partner is active,
 * the URL exists, and (if configured) the state is covered.
 * Every caller must handle `undefined` by falling back to editorial content —
 * never render a broken or inactive commercial CTA.
 */
export const activePartnerUrl = (id: string, state?: string): string | undefined => {
  const partner = PARTNERS.find((p) => p.id === id);
  if (!partner || partner.status !== 'active' || !partner.url) return undefined;
  if (state && partner.states && !partner.states.includes(state.toUpperCase())) return undefined;
  return partner.url;
};

export const partnerById = (id: string | null | undefined): Partner | undefined =>
  PARTNERS.find((p) => p.id === id);

/** Hostnames used for affiliate-click tracking (FASE 29). */
export const AFFILIATE_HOSTS: { host: string; partnerId: string }[] = [
  { host: 'helloprenup.com', partnerId: 'helloprenup' },
  { host: 'thisfirst.com', partnerId: 'first' },
];

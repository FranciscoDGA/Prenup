/**
 * Commercial tracking (Sprint 4, FASE 28–30).
 *
 * - commercial_cta_view      → a <aside class="cta-box"> commercial box becomes visible
 * - commercial_resource_view → a CommercialResource becomes visible
 * - affiliate_click          → any affiliate link is clicked (components AND inline md links)
 *
 * Properties are context only (partner_id, page_type, content_id, situation_id, state).
 * NEVER send email, income, assets, debt, or any other PII (FASE 29).
 */
import { track } from './analytics';
import { AFFILIATE_HOSTS } from '../data/partners';

const pageTypeFor = (path: string): string => {
  if (path.startsWith('/guides/')) return 'guide';
  if (path.startsWith('/states/')) return 'state';
  if (path.startsWith('/tools/')) return 'tool';
  if (path.startsWith('/start')) return 'situation';
  if (path.startsWith('/free/')) return 'lead';
  if (path === '/' || path === '/index.html') return 'home';
  return 'page';
};

const contentIdFor = (path: string): string => {
  const parts = path.split('/').filter(Boolean);
  if (parts.length >= 2) return parts.slice(0, 2).join('/');
  return parts[0] ?? '';
};

const partnerForHref = (href: string): string | undefined => {
  try {
    const host = new URL(href, location.origin).hostname.replace(/^www\./, '');
    return AFFILIATE_HOSTS.find((h) => host === h.host || host.endsWith(`.${h.host}`))?.partnerId;
  } catch {
    return undefined;
  }
};

const situationFor = (el: Element): string | undefined => {
  const box = el.closest('[data-result-id]') as HTMLElement | null;
  if (box?.dataset.resultId) return box.dataset.resultId;
  const withSit = el.closest('[data-situation-id]') as HTMLElement | null;
  return withSit?.dataset.situationId;
};

export function initCommercialTracking(): void {
  if (typeof window === 'undefined') return;
  const path = location.pathname;
  const pageType = pageTypeFor(path);
  const contentId = contentIdFor(path);
  const seenView = new Set<Element>();

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seenView.has(entry.target)) continue;
          seenView.add(entry.target);
          const el = entry.target as HTMLElement;
          const event = el.classList.contains('commercial-resource')
            ? 'commercial_resource_view'
            : 'commercial_cta_view';
          track(event, {
            partner_id: el.dataset.partnerId || undefined,
            page_type: pageType,
            content_id: contentId,
            situation_id: situationFor(el),
            state: el.dataset.state || undefined,
          });
          io.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('[data-commercial-view]').forEach((el) => io.observe(el));
  }

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      const link = target instanceof Element ? target.closest('a[href]') : null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      let partnerId = (link as HTMLAnchorElement).dataset.partnerId;
      if (!partnerId) partnerId = partnerForHref(href);
      if (!partnerId) return;
      track('affiliate_click', {
        partner_id: partnerId,
        page_type: pageType,
        content_id: contentId,
        situation_id: situationFor(link),
        state: link.getAttribute('data-state') || undefined,
      });
    },
    { capture: true }
  );
}

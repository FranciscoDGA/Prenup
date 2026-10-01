# PrenupAnswers Operating Manual

The single source of truth for running this site. Written after the 10-sprint build
(Sep 2026). After Sprint 10 the core is **FROZEN**: this manual is what you operate,
maintain, and feed — not something you rebuild.

If a decision is not covered here, the default answer is: **don't change the core;
log the idea in `FUTURE-IDEAS.md` (NOW / LATER / IGNORE) and keep operating.**

---

## 1. Mission

Honest, plain-English answers about prenuptial agreements for engaged and committed
couples in the United States — costs, state rules, checklists, and the difficult
conversations — with zero legalese and zero fear marketing.

**What we are not:** a law firm, a lawyer directory, a legal advice service, or a
lead-generation mill. Every page must be useful even if the reader never clicks
anything commercial.

## 2. Audience

- Primary: engaged/considering couples in the US, researching on mobile, mid-funnel
  ("do I need one", "what does it cost", "my partner asked for one").
- Secondary: people protecting business/inheritance/children from a prior marriage.
- Matched to 8 `primarySituation` states on `/start/`; every article must map to a
  real question one of these people would type.
- US English, US law, US context. No non-English expansion (IGNORE).

## 3. Editorial voice (FASE 74)

- **Author:** Francisco Gomes Alves — real person: pastor in Brazil, law school
  class of 2027, **not a US attorney**. The About page, author page, and every
  required location carry this disclosure. Never imply or invent US legal
  credentials; no invented co-authors, experts, or reviewers (FASE 75).
- **Honesty rules (hard):**
  - Never fabricate statistics, citations, prices, or outcomes.
  - Never claim what we cannot prove (banned: *guaranteed, legally valid without,
    lawyer required, airtight, water-tight, waterproof, cannot be challenged,
    automatically enforceable/invalidate, second-leading, 29% regret* — enforced by
    `npm run lint`).
  - No "#1/best/most" claims unless sourced; rhetorical uses must be plain facts.
  - No fear marketing, urgency, fake scarcity, fake reviews, fake testimonials.
- **Writing standard:** answer in the opening lines (first-answer rule), American
  English, active voice, short paragraphs, headings that scan. Full rules:
  `editorial/WRITING-STANDARD.md` + `editorial/ARTICLE-TEMPLATE.md`.

## 4. Content workflow (FASE 56 — 15 steps for every new article)

1. Pick from `BACKLOG.md` / `NEXT-BATCH.md` (cluster gap? unique value?).
2. Research: search intent, competing gaps, **sources collected first** (govt/law
   school/primary where possible).
3. Brief per `CONTENT-BRIEF-TEMPLATE.md` (unique value required).
4. Draft from `WRITE-ARTICLE-PROMPT.md` + `ARTICLE-TEMPLATE.md` →
   `src/content/guides/<slug>.md` (frontmatter schema only).
5. **Legal review** — `LEGAL-REVIEW.md` claim checklist; disclaim state-law variance.
6. **American-native edit** — voice, grammar, filler, AI-tells.
7. **Source check** — named, primary-first, `## Sources` section (see §7).
8. **SEO check** — intent, title ≤ ~60 chars, description, H1, no stuffing.
9. Frontmatter decisions: `commercialIntent`, `primarySituation`, `faq`, CTA fields.
10. **Internal linking** — ≥2 natural inbound from existing guides, 3–6 relevant
    outbound, descriptive anchors (`INTERNAL-LINKING.md`).
11. **Conversion review** — ONE primary CTA, gated per §12 rules.
12. Gates: `npm run build && npm run typecheck && npm run lint`
    (lint reads `dist/` — always build first).
13. Publish: commit + push to `main` → Vercel deploys automatically.
14. Live verify: 200, title/description/canonical (www), FAQ JSON-LD present,
    CTA renders per gating, links work.
15. Log in `CONTENT-INVENTORY.md`, run distribution step
    (`README.md` → Distribution), queue refresh triggers.

## 5. Checklists (FASE 57–60)

### 5.1 New article (FASE 57)
- [ ] Brief with unique value
- [ ] Sources gathered before drafting
- [ ] Frontmatter schema complete (title, description, keyword, cluster, dates, intent, faq)
- [ ] Answers in first lines
- [ ] Legal pass (LEGAL-REVIEW) · American-English pass · SEO pass
- [ ] `## Sources` section with named, working links
- [ ] ≥2 inbound internal links created; no orphan after publish
- [ ] ONE CTA correct for intent (editorial vs affiliate, §12)
- [ ] build + typecheck + lint green; inventory + distribution updated

### 5.2 State article / state page touch (FASE 58)
- [ ] Content reflects the state's actual regime (community vs equitable), costs, and
      signing/notarization rules — verified against a primary source this year
- [ ] `Updated <Month Year>` refreshed; year-dependent claims re-checked
- [ ] State-specific caveats present ("law changes; verify with an attorney")
- [ ] Links to the calculator + related state + relevant guide
- [ ] No copy-paste paragraph shared with another state (states differ by law, not wording)

### 5.3 Update / refresh (FASE 59)
- [ ] Trigger valid per `REFRESH-QUEUE.md` (decay rule, price change, factual change, GSC CTR)
- [ ] Re-verify every fact/source in the touched section (never partial edits of claims)
- [ ] `updated` frontmatter bumped; numbers carry a date ("as of <Month Year>")
- [ ] Do **not** touch content <90 days old without data (FASE 54)
- [ ] Gates + live re-verify

### 5.4 Consolidation / retirement (FASE 60)
- [ ] Confirmed overlap (cannibalization) with evidence, not vibes
- [ ] Winner keeps the strongest URL; losers 301 to it (core change → §15 rules)
- [ ] Inbound links updated; sitemap re-submitted after deploy
- [ ] Inventory + clusters updated; idea parked in `FUTURE-IDEAS.md`, not half-built

## 6. Legal review policy

- Every publishable claim passes `editorial/LEGAL-REVIEW.md`: no advice-style
  phrasing ("you should file X"), educational framing, jurisdiction called out
  where law differs, disclaimers intact site-wide (footer + About + Terms +
  `src/data/author.ts`).
- Never present the author as a licensed US attorney. Never publish a "will your
  prenup hold up" guarantee or state-by-state ruling prediction.
- Legal pages (privacy, terms, disclosure, cookies) change **only** with an
  external reason (new tool/cookie/partner/regulation) — never for style.

## 7. Source policy

- Government, court, law-school, and industry sources first (e.g. state statutes,
  Cornell LII, NCSL, NCSC, AAML cost surveys). No "experts say", no aggregator
  blogs as sole support.
- Every guide should carry `## Sources`: **currently 9 of 27 do — the other 18 are
  in the UPDATE queue (see §17 IMPORTANT).** New guides must include Sources.
- External links checked on maintenance runs; automated HEAD failures (403 from
  bot-protected hosts like NCSL/NY Senate) are re-checked by hand in a browser
  before being called broken.
- Never invent or cite a URL we have not opened.

## 8. State content policy

- 51 pages (`/states/<slug>/`, index `/states/`) are substantive: regime, costs,
  timing, signing rules, consequences of no prenup — verified against primary law,
  not generated from one template (Sprint 8/9 audits: PASS; word-count similarity
  between states is structural, content differs).
- State pages exist **only where we maintain them**: edits require a current-year
  source. No bulk state-page expansion (IGNORE).

## 9. SEO policy

- One H1 per page; self-referencing canonical on **www** host; title ~≤60 chars,
  natural; no keyword stuffing, no sitewide-year tricks (revisit dates once/year).
- Structured data: `WebSite` everywhere; `Article` + `FAQPage` on guides (must
  match visible content); `BreadcrumbList` on states. Never emit schema for
  content that is not on the page.
- Sitemap: 90 URLs — `/free/` hub, 2 freebies, 2 thank-you pages excluded by
  design (noindex where noted). `robots.txt`: allow all + sitemap pointer.
- Indexing health: `AUDIT-INDEXING.md`. Search performance: **Google Search
  Console is not connected — report UNKNOWN, never invent metrics** (§17).

## 10. Internal linking policy

- Hubs: `/guides/` (links all 27 — no orphans allowed) and `/states/` feed every
  new page; clusters defined in `EDITORIAL-CLUSTERS.md`.
- Every new article: ≥2 natural inbound from older guides (descriptive anchor,
  same reader intent), 3–6 outbound. Cannibalization check before any new URL
  targeting an existing keyword (`CONTENT-HUBS.md`).
- Situational links (`/start/` selector) and calculator "next steps" route only to
  existing paths — lint fails the build on broken internal links.

## 11. Distribution policy

- Organic search first; internal discovery second; email (`EMAIL-DISTRIBUTION.md`,
  The Prenup Brief — 1 honest email/week) and social (`SOCIAL-DISTRIBUTION.md`,
  manual, no automation/fake accounts) only where genuinely useful.
- Log every send/post in `DISTRIBUTION-MATRIX.md`. No link buying, no mass
  posting, no ranking promises.

## 12. Monetization policy (FASE 76)

- **Partners: exactly two — HelloPrenup and First** (`?via=francisco`,
  `src/data/partners.ts`, status active). No new partner/offer without a
  monetization-trust review (`MONETIZATION-TRUST-AUDIT.md`).
- Affiliate links: inline only in the 3 commercial guides with page-level
  transparency footnotes, always `rel="sponsored noopener"`; affiliate CTA box
  shows the visible disclosure everywhere else. Never in other article bodies.
- **CTA gating** (`guides/[...slug].astro`): intent `none` + no `ctaHref` → no
  CTA · `none` + `ctaHref` → editorial CTA · intent + no `ctaHref` → affiliate box
  with disclosure · intent + `ctaHref` → editorial override.
- Affiliate clicks only render when `CommercialResource` is actually displayed;
  commercial links must never appear on the homepage, About, author page, or
  legal pages. Disclosure page live at `/disclosure/`.
- Prices/rankings quoted must carry "as of <Month Year>" and be re-checked on the
  maintenance schedule (§16).

## 13. Analytics policy (FASE 77)

- **What exists:** cookieless Cloudflare Web Analytics intent + a local event
  bridge (`src/scripts/analytics.ts`) with 9 funnel events pushed to
  `window.paQueue` (no PII): `situation_selector_view`, `situation_selected`,
  `situation_result_view`, `situation_resource_click`, `newsletter_view`,
  `newsletter_signup`, `calculator_started`, `calculator_completed`,
  `affiliate_click`.
- **Current gap (top action, §17):** no CF beacon is present in served HTML —
  events queue but are not collected. Until the token is installed, the only
  real measurement is server-side (Vercel) + manual checks. When installed, the
  cookie banner/policy wording ("Cloudflare Web Analytics") becomes accurate.
- **GSC: not connected.** No impressions/CTR/rank data exists. Never write a metric
  without a named data source (`intelligence/README.md`).
- MailerLite delivery/unsubscribe lives in their dashboard — verify there
  monthly, not from the repo.

## 14. Content refresh policy

- Triggers and rules: `REFRESH-QUEUE.md`. Queue owners: `BACKLOG.md` (UPDATE
  section) + `editorial/intelligence/` (CTR/refresh queues).
- Standing updates: 18 guides missing Sources; 2 guides with price claims older
  than the freshness window. Seasonal re-check once/year (pricing tables,
  "2026" references).
- Fresh content (<90 days) is left alone without data (FASE 54).

## 15. Technical change policy (FASE 62–64 — the freeze)

- **Core is frozen:** home, `/start/`, guide/state layouts, calculator, free
  funnel, legal pages, design system, routing. No redesigns, no framework/CMS/
  dashboard/search/RSS/video "improvements", no new features (all parked in
  `FUTURE-IDEAS.md` = IGNORE).
- Allowed changes: (a) new content through §4–5, (b) factual/price/source updates,
  (c) security or build-breaking fixes, (d) partner/CTA changes that keep §12.
- Every technical change needs a written reason + how to revert; run
  `build + typecheck + lint`; spot-check the live site after push.
- Dependencies: **no upgrades** unless a security advisory or build break forces
  it (current `npm audit` prod: 0 vulnerabilities). No new dependencies, ever,
  outside explicit authorization.
- Secrets: none in the repo (no `.env`, no API keys) — keep it that way.
  `.gitignore` covers `.env`, `dist/`, `.vercel/`.

## 16. Operating routine (FASE 61)

**Every session (before writing):** `git status` clean start · `git pull` · read
`BACKLOG.md` next item · run gates after any change.

**Weekly:** publish 1–3 excellent articles (3 great > 10 mediocre; no quotas) ·
walk one opportunity through all 15 steps · check live site + 404s after deploys.

**Monthly:** maintenance pass — one UPDATE item (Sources or price freshness) ·
external source links re-check (browser for 403s) · analytics review (CF data when
live; GSC when connected; `paQueue` in devtools) · MailerLite health (delivery,
unsubscribes) · inventory ↔ sitemap reconciliation · log decisions in
`intelligence/decisions.md`.

**Quarterly:** full gate run on a fresh checkout · `npm audit` · legal/price claims
sweep on commercial guides · review `FUTURE-IDEAS.md` (only to move items between
NOW/LATER/IGNORE — building still needs authorization) · verify author/disclaimer
statements unchanged.

## 17. Final action list (FASE 80)

**CRITICAL — none found.** (Site up, HTTPS, canonical/robots/sitemap correct,
404 works, forms handle errors, no secrets, legal pages live, gates green.)

**IMPORTANT (do these next; each needs external access or is content work):**
1. **Install the Cloudflare Web Analytics beacon** (token from CF dashboard) —
   until then analytics claims in the cookie banner are aspirational; either add
   the token or adjust that wording. [needs CF account]
2. **Connect Google Search Console** (verify domain) — unlocks CTR/keyword data
   that currently drives the title-refresh queue. [needs Google account]
3. **Add `## Sources` sections to the 18 guides missing them** (UPDATE queue —
   first maintenance pass).
4. **Price-freshness review** on the 2 guides flagged in the Sprint 9 audit.
5. **Hand-verify the 2 source URLs returning 403 to bots** (NCSL, NY Senate) in a
   real browser; swap if actually broken.

**OPTIONAL (parked — do not schedule):** favicon.ico for legacy browsers · title
truncation fixes (wait for GSC data) · rewriting 3 rhetorical "#1" facts · any
content beyond the NOW backlog · anything in `FUTURE-IDEAS.md` IGNORE.

## 18. Frozen core & definition of done (FASE 79, 82)

- Author/disclaimer · marketing/CTA copy · affiliate/disclosure · free funnel ·
  build/typecheck/lint gates · operational workflows = **stable; changes only
  when the maintenance routine demands them.**
- Build stopped: all 10 sprints delivered, audits passed, every gap either fixed
  or recorded above with a named owner (mostly external accounts).
- **Build is complete. Everything else is operation.**

---

*Sources of truth referenced above live in `editorial/` (this file = entry point),
`src/` (code), and `scripts/lint.mjs` (enforcement). When docs disagree, this
manual wins; then fix the doc.*

# MONETIZATION & TRUST AUDIT (Sprint 9) — internal, no dashboard

**Date:** 2026-10-01 · **Scope:** audit only + minimum-necessary fixes (FASE 61/62).
**Scores are CATEGORIES only** (PASS / NEEDS ATTENTION / MISSING / UNKNOWN) — never a fabricated trust score (FASE 57).

---

## 1. Monetization inventory (FASE 1) — what actually exists

| Element | Exists? | Where / evidence |
|---|---|---|
| Affiliate links | YES | `src/data/affiliate.ts` — HelloPrenup + First, both `?via=francisco`. Component placements (CTA, CommercialResource) + 7 inline links in 3 guide pages |
| Affiliate disclosure (page) | YES | `/disclosure/` — FTC-framed, names both partners, states what commissions do NOT change |
| Affiliate disclosure (in-context) | YES | `CTA.astro` + `CommercialResource.astro` render "Affiliate link — we may earn a commission… How we make money" on every external CTA; page-level transparency footnotes on all 3 comparison guides + inline note in first-vs |
| Commercial CTAs | YES | Guides (commercialIntent gate in `[...slug].astro`), state pages (partner failsafe), calculator next-steps card, `/start/` ×2 |
| Partner links / partners | YES (2) | `partners.ts` — only real, verifiable relationships; `status: active`; failsafe → editorial fallback if retired |
| Calculator | YES | `/tools/prenup-cost-calculator/` — value-first (estimate → next steps), assumptions notice present |
| Lead forms | YES | `/free/prenup-checklist/`, `/free/money-talk-script/` (MailerLite, noindex by design) |
| Newsletter | YES | The Prenup Brief — MailerLite embed; fine print: weekly promise, one-click unsubscribe, no selling, privacy link |
| Sponsored elements | NONE | No paid placements exist; disclosure page states paid links "appear after the editorial answer — never inside it" |
| Advertising | NONE | `/disclosure/` says ads are future-tense ("Once traffic warrants it, we may") — honest, not fake |
| Monetized tools | YES | Calculator → CommercialResource only AFTER the result (never before value) |
| Commercial pages | 3 | `first-vs-helloprenup`, `legalzoom-prenup-review`, `lawyer-vs-online-prenup` |
| Analytics | YES | Cloudflare Web Analytics + 10 custom events (`commercial.ts`/`analytics.ts`); no PII sent |

**Conclusion:** monetization is real, narrow (2 partners), and disclosed. Nothing fake to remove (FASE 2: nothing invented).

## 2. Affiliate audit (FASE 3/4)

| Placement | Partner | Destination | Disclosure | Context / user benefit | Verdict |
|---|---|---|---|---|---|
| Guide CTA box (affiliate variant) | HelloPrenup | `helloprenup.com/?via=francisco` | In-box, `rel="sponsored noopener"` | Post-article "flat-fee route" suggestion when intent ≥ low | PASS |
| State page CTA | HelloPrenup | same | In-box, sponsored | State-rule context → service option; failsafe to editorial CTA | PASS |
| Calculator result card | HelloPrenup | same | In-card, sponsored | Shown only after user gets their estimate | PASS |
| `/start/` result cards | HelloPrenup | same | In-card, sponsored | After situation selection | PASS |
| Inline md links ×7 (3 pages) | both | both | Page footnote ×3 + `rel="sponsored noopener"` (added this sprint) | Inside comparison verdicts, after editorial analysis | PASS (fixed) |
| `who-keeps-the-house` CTA copy | HelloPrenup | same | In-box | **Was: label promised state rules → affiliate destination** | FIXED this sprint |

## 3. Trust audit (FASE 9/16/17) — categories

| Item | Verdict | Evidence |
|---|---|---|
| About page | PASS | `/about/` 200 — mission, research sources, editorial standards, contact email |
| Author info | PASS | `author.ts` — pastor, not attorney, law school 2027 framed as aspiration; author page 200 with disclaimers + research method |
| Editorial transparency | PASS | Research method (5 principles) published on About + author page |
| Legal disclaimer | PASS | 4 "not a lawyer / not a firm / not a review service / not advice" points |
| Sources (guides) | NEEDS ATTENTION | 9/27 guides have `## Sources`; 18 lack them → existing UPDATE queue (no bulk fix, FASE 55) |
| Sources (state pages) | PASS | `SourceList` + statutes (e.g., Cal. Fam. Code §1615) + "last template review: September 2026" + verification caveat |
| Contact | PASS | hello@prenupanswers.com on About/Disclosure/Cookies/Author; footer "About & Contact" (no physical address — correct) |
| Privacy | PASS | `/privacy/` 200, linked in form fine print |
| Terms | PASS | `/terms/` 200, in footer |
| Affiliate disclosure | PASS | `/disclosure/` 200, footer-linked, per-link |
| Cookie consent | PASS | `CookieBanner` present, `/cookies/` 200 |
| AI-production disclosure | UNKNOWN | No policy exists on site; no false "written by attorneys" claims either → WATCH (add only if editorial policy adopts one) |

## 4. Source trust & presentation (FASE 10/11)

- Statutes/government first wherever a claim is statutory: Cal. Fam. Code §1615 (leginfo), Minn. Stat. §519.11, Ohio Rev. Code §3103.06, Tex. Fam. Code §7.001, Wex — verified this cycle.
- Secondary-but-authoritative (Nolo, FindLaw, Clio, Knot) used for process/cost claims, labeled with publisher name.
- Presentation: current format is `Publisher — [Title](url)` — has name + document, NOT "what it supports" → **NEEDS ATTENTION (minor)**: add support context only when each article is next touched, never as a bulk pass (FASE 55).

## 5. Legal freshness (FASE 12)

| Category | Items |
|---|---|
| CURRENT | All 27 guides (published 2026-09-08 → 2026-10-01, all ≤ 23 days); state pages "last template review: September 2026" |
| REVIEW NEEDED | `first-vs-helloprenup`, `legalzoom-prenup-review` (price freshness — flagged UPDATE_REQUIRED since Sprint 7) |
| OUTDATED | None found |
| UNKNOWN | None — every page shows a visible date |
| Rule applied | No "law changed" claims made anywhere without a verified statute check |

## 6. Commercial intent classification (FASE 6/33) — 27 guides

| Class | Count | Guides |
|---|---|---|
| INFORMATIONAL (`commercialIntent: none` — no affiliate box) | 6 | what-is, how-does-work, bring-up, partner-refuses, does-mean-trust, when-asks (editorial CTAs) |
| INFORMATIONAL+ (`low` — affiliate box allowed, gentle) | 8 | do-i-need, inheritance, debt-protection, postnup, checklist, second-marriage, what-does-cover, debt-marriage |
| CONSIDERATION (`medium`) | 7 | how-long, is-worth, is-online-legal, 30-days, divorce-without, business, who-keeps |
| DECISION (`high`) | 6 | do-you-need-lawyer, how-much, lawyer-vs, first-vs, legalzoom, ask-lawyer |

CTA gating verified live in Sprint 9 build: `none` → no affiliate; `none + ctaHref` → editorial; `≠none + no ctaHref` → affiliate w/ disclosure; `≠none + ctaHref` → editorial override (FASE 7 matching).

## 7. CTA audit (FASE 34/35)

- Copy style: default affiliate CTA is "Skip the $350/hr learning curve" (restrained, contextual); editorial CTAs name real resources; no "Buy now / limited offer / countdown" anywhere (FASE 8 PASS).
- Custom ctaHeading/ctaText coherent with destination: ask-lawyer (mentions HelloPrenup ✓), spouse-debt (debt guide ✓), what-is (timeline ✓), when-asks (script ✓), how-does (timeline ✓).
- `who-keeps-the-house`: **mismatch found → FIXED** (copy now matches affiliate destination).
- `how-much-does-a-prenup-cost` custom CTA pre-existing — left untouched (working, minimum change).

## 8. Unsupported claims sweep (FASE 21/70)

Fixed this sprint (3): `prenup-checklist` "#1 factor courts check" + "#1 reason prenups get tossed", `what-happens-to-debt` "#1 debt conversation".
Remaining (WATCH — rhetorical editorial voice, not product/superiority claims): `is-an-online-prenup-legal` "the #1 killer" (heading), `lawyer-vs-online` "#1 complaint about hourly billing", `partner-refuses` "#1 predictor of divorce", `is-a-prenup-worth-it` "cheapest fight", `statePages` SD "cheapest states to file in" (plausible, unverified → revisit on state refresh).
Banned-phrase lint still green (guaranteed/airtight/best-site claims etc. blocked at build).

## 9. Commercial pages (FASE 20/22/23)

- Objective criteria only: First vs HelloPrenup (price, attorney tier, state coverage, cash flow); LegalZoom (price, 12-state availability, limits); lawyer-vs (7-point decision test).
- No fake testimonials, ratings, reviews, or user counts anywhere (grep-verified; site has no testimonial section).
- Alternatives always presented (FASE 46): every verdict names the other option or "hire an attorney instead".
- Limitations disclosed (LegalZoom "confirm at checkout"; calculator "for planning — not a quote").

## 10. Funnel map (FASE 30/32) — existing paths only

SEARCH → Guide (answer-first) → related guides → Cost Calculator / State pages / Checklist / Situation selector → affiliate CTA (intent-gated) or newsletter.
No path forces a commercial step (FASE 31 PASS): `none`-intent readers get editorial next steps or nothing; newsletter is the only universal ask.

## 11. Priority queue (FASE 60)

### FIX NOW (done this sprint)
1. `who-keeps-the-house` CTA label promised "state rules" but linked to HelloPrenup → copy realigned to affiliate destination.
2. 7 inline affiliate links missing `rel="sponsored noopener"` (3 comparison/guide pages) → added.
3. Unsourced "#1" claims ×3 (checklist ×2, debt guide) → reworded qualitatively.

### OPTIMIZE (not now — minimum change discipline)
- Sources "what it supports" context: add per-article on next touch (extends existing UPDATE queue).
- State-page CTA copy personalization by state (needs template care — one state first, test).
- Price refresh for `first-vs` + `legalzoom` (already UPDATE_REQUIRED).
- AI/editorial-production disclosure: create only if/when the editorial policy adopts one.

### WATCH (insufficient data — never act blind)
- Affiliate click/conversion performance (CF events exist; GSC not connected).
- Rhetorical "#1" holds listed in §8.
- Ads section stays future-tense until real traffic justifies it.

## 12. Monetization opportunities (FASE 69/42/43 — value first)

| # | User need | Existing content | Commercial opportunity | Why relevant | Required change | Risk |
|---|---|---|---|---|---|---|
| 1 | "How do I choose between online prenup services?" | first-vs (2 products), lawyer-vs (routes) | Neutral chooser article with affiliate links + decision questions (FASE 24/25) | HIGH-intent query class with only product-vs-product coverage | NEW article (Sprint 10 candidate) | Must avoid "best" claims; needs objective criteria only |
| 2 | State-specific reassurance | 51 state pages (affiliate CTA already) | State-flavored CTA copy ("CA's 7-day rule → build early") | High-intent CA/TX/NY/FL traffic | Template copy param, 1 state pilot | Over-commercializing legal pages |
| 3 | Cost-anxiety after calculator result | Calculator + cost guide | Attorney-review hybrid explainer link in next-steps | Matches "online + review" sweet spot readers | Add one editorial card (external research first) | Unverified pricing claims |
| 4 | Post-signing life | how-does-work, 30-days | CHANGE/AMEND + WHO PAYS articles (promoted S8) → natural CTAs | SERP gaps confirmed | Already in BACKLOG NEXT | None — editorial-first |
| 5 | Newsletter relationship | Prenup Brief (weekly) | MailerLite welcome sequence (external tool) | Trust compounding without site changes | MailerLite-side only (outside repo) | Email fatigue — keep editorial balance (FASE 28) |

## 13. Commercial content queue (FASE 71)

| Class | Items |
|---|---|
| CREATE | choose-an-online-prenup-service (opportunity #1); questions-before-choosing (#4 support) |
| OPTIMIZE | state CTA copy pilot; sources context on next touch; 2 price-freshness reviews |
| UPDATE | 18 guides missing Sources (existing queue — no bulk date-bump) |
| NO ACTION | 3 comparison pages, calculator, freebies, newsletter, About/Privacy/Terms/Disclosure |

## 14. Definition of done (FASE 74)

- [x] Monetization inventory completed (§1)
- [x] Affiliate links audited (§2)
- [x] Disclosures audited (§2, §7)
- [x] Commercial CTAs audited (§7)
- [x] Trust architecture audited (§3)
- [x] Source trust audited (§4)
- [x] Authorship audited (§3 — no invented attorneys; disclaimers intact)
- [x] Legal freshness reviewed (§5)
- [x] Commercial intent classified (§6)
- [x] CTA relevance reviewed (§7)
- [x] No fake testimonials / reviews / partnerships / unsupported claims (§8, §9 — 3 fixed)
- [x] No dark patterns / aggressive sales changes (§10 — none found, none added)
- [x] Monetization opportunities documented (§12)
- [x] Trust issues documented (§3, §8)
- [x] First optimization batch selected (§11 FIX NOW — 3 changes)
- [x] No redesign, no major features (§11 — edits only)
- [x] Existing site functional · build/typecheck/lint green (see report §13)

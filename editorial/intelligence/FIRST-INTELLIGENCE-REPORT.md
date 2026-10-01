# FIRST INTELLIGENCE REPORT — 2026-10-01 (FASE 62–71)

Snapshot. Quantitative fields show real values only; everything else is **NOT AVAILABLE**
(FASE 49). Primary data source (GSC) is not connected — see README audit.

## 1. SEARCH PERFORMANCE (FASE 62)
- Clicks / Impressions / CTR / Position / Queries / Pages / Countries / Devices: **NOT AVAILABLE** (GSC not connected).
- Cloudflare Web Analytics (pageviews, geography): exists at platform level — **data external**, not accessible from repo.
- Custom events (newsletter_signup, calculator_completed, situation_selected, affiliate_click…): tracked via bridge — **data external** (CF dashboard).
- Time-period comparison (FASE 3): impossible until a source exists.

## 2. TOP QUERIES (FASE 63)
Real observed queries only (`[SERP]` = live search, not GSC):

| Query (observed) | Intent | Existing page | Opportunity | Action |
|---|---|---|---|---|
| can you change a prenup after signing | informational | none | high (no authority owns SERP) | NEW ARTICLE → NEXT tier |
| who pays for a prenup | informational | cost guide (prices only) | medium-high | NEW ARTICLE → NEXT tier |
| do i need a prenup if i have no assets | informational | do-i-need (angle absent) | high | EXPAND do-i-need |
| california prenup requirements / 7 day rule | state | /states/california/ | covered | NO ACTION (verified vs statute) |
| how does a prenup work | informational | none | high | NEW ARTICLE (BRIEF-011) |
| questions to ask a prenup lawyer | commercial-investigation | none | high | NEW ARTICLE (BRIEF-012) |

## 3. TOP TRACTION CONTENT (FASE 18/19)
Categories available: TRACTION / GROWING / EMERGING / NEEDS REVIEW / INSUFFICIENT DATA.
**All 21 guides = INSUFFICIENT DATA** (published 2026-09-08→10-01; all <30 days, FASE 21;
no search metrics). No traction content can be named honestly yet. Reassess at monthly review.

## 4. QUERY OPPORTUNITIES
See §2 (same table — observed queries classified FASE 7).

## 5. CTR OPPORTUNITIES (FASE 64)
| URL | Query | Impressions | CTR | Position | Possible issue | Recommended action |
|---|---|---|---|---|---|---|
| — | — | NOT AVAILABLE | NOT AVAILABLE | NOT AVAILABLE | pending GSC | fill `ctr-queue.md` when connected |

Static pre-audit: descriptions unique across 21 guides; 8 titles >65 chars (truncation risk).

## 6. CONTENT GAPS (FASE 65)
Full matrix in `content-gaps.md`. Top rows: how-does-a-prenup-work · ask-a-lawyer · postnup ·
receiver-side conversation · house · spouse's debt · change-after-signing · who-pays ·
no-assets expansion · Sources sections on 18 guides.

## 7. CANNIBALIZATION (FASE 66)
| Query cluster | Competing URLs | Intent | Recommended action |
|---|---|---|---|
| prenup cost [state] | cost guide state table ↔ state pages | same question, two depths | KEEP SEPARATE (watch — cross-linked, distinct territories) |
| prenup checklist | `/guides/prenup-checklist/` ↔ `/free/prenup-checklist/` | guide vs downloadable | KEEP SEPARATE (each links the other) |
| do i need / worth it | do-i-need ↔ is-a-prenup-worth-it | need vs value — split verified | NO ACTION YET (monitor when GSC lands) |

## 8. REFRESH QUEUE (FASE 67)
Active entries in `refresh-queue.md`: 18 guides missing Sources (HIGH) · 2 review freshness (MED) ·
51 state pages law-watch (MED) · CA 7-day rule verified current (LOW).

## 9. CLUSTER HEALTH (FASE 32/68)
Caveat: "search signals" component = pending GSC for every cluster; statuses below reflect
static architecture + observed evidence only.

| Cluster | Status | Reason |
|---|---|---|
| Prenup Basics | DEVELOPING | hub+supporting exist, but lifecycle core missing until BRIEF-011 ships |
| Prenup Cost | STRONG | cost guide hub + reviews + calculator + state coverage |
| Relationship & Conversation | DEVELOPING | 3 guides; receiver-side (BRIEF-006) pending |
| Assets & Property | EARLY | only partial coverage; BRIEF-007 pending |
| Business | EARLY | 1 guide; business-after-marriage pending |
| Children & Family | DEVELOPING | 2 guides; custody angle (BRIEF-009) pending |
| Debt | EARLY | 1 guide; protection angle (BRIEF-008) pending |
| State Law | STRONG | 51 substantive hubs + statute sources + cross-links |
| High-Intent / Practical | STRONG | 6 guides + calculator + /start/ path |

## 10. CONVERSION SIGNALS (FASE 42/43/69)
Event taxonomy exists (10 event types — see README); **event data external (CF dashboard) — NOT
AVAILABLE here**. Language rule when data arrives: "associated with / observed alongside /
appears to contribute" — no causal claims from small samples (FASE 43). Pageviews alone are
not the goal (FASE 42).

## 11. NEXT 10 CONTENT OPPORTUNITIES (FASE 70)
| # | Title/Topic | Intent | Evidence | Cluster | Audience | Situation | Sources | Action |
|---|---|---|---|---|---|---|---|---|
| 1 | How Does a Prenup Work? | informational | SERP gap (S7) | Basics | R1 beginner | researching | Nolo, Wex, statutes | PRODUCE (NOW) |
| 2 | What Should I Ask a Prenup Lawyer? | commercial-investigation | SERP gap (S7) | High-Intent | R3 pragmatist | researching | Nolo, FindLaw | PRODUCE (NOW) |
| 3 | Prenup After Marriage (postnup) | informational | SERP gap (S7) | Basics | R1/R2 | researching | Nolo, statutes | PRODUCE (NOW) |
| 4 | When Your Partner Asks | informational | static gap (S7) | Relationship | R4 | partner-wants-prenup | Nolo | PRODUCE (NOW) |
| 5 | Who Keeps the House | informational | static gap (S7) | Assets | R3 | researching | Nolo, statutes | PRODUCE (NOW) |
| 6 | Protect Me From Spouse's Debt | informational | static gap (S7) | Debt | R3 | debt | Nolo, statutes | PRODUCE (NOW) |
| 7 | Can I Change a Prenup After Signing? | informational | **SERP 10-01** | Basics | R1 | researching | statutes (UPAA §5), Nolo | PRODUCE → NEXT |
| 8 | Who Pays for a Prenup? | informational | **SERP 10-01** | Cost | R3 | cost | Nolo, firm explainers | PRODUCE → NEXT |
| 9 | Do I Need One If We Have No Assets? | informational | **SERP 10-01** + grep gap | Basics | R1 | researching | Nolo, NPR | EXPAND do-i-need (not new page) |
| 10 | When Should You Get a Prenup? | informational | static gap (S7) | High-Intent/Relationship | R2 | getting-married | Nolo, state timing | PRODUCE → NEXT |

## 12. FIRST OPTIMIZATION BATCH (FASE 71)
Small set — **selected, execution gated on a measurement baseline** (FASE 72):

| URL | Change | Reason | Expected signal |
|---|---|---|---|
| /guides/second-marriage-prenup-protect-kids/ | title 90→≤65 ch | truncation risk (static) | fuller SERP title; CTR measurable once GSC connects |
| /guides/first-vs-helloprenup/ | title 74→≤65 ch | truncation risk (static) | same |
| /guides/how-to-bring-up-a-prenup/ | title 73→≤65 ch | truncation risk (static) | same |

All other optimization (content, CTA, links, descriptions): **WATCH** — corpus <30 days,
zero search data (FASE 60/61).

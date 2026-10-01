# Content Intelligence System (Sprint 8) — internal, no dashboard

The site is built. The engine is built. This is the **DATA → INSIGHT → CONTENT DECISION →
OPTIMIZATION** loop. Everything here is structured files — no dashboard (FASE 53).

## Data sources — living audit (FASE 1)

| Source | Status | Where data lives |
|---|---|---|
| Google Search Console | **NOT AVAILABLE** (not connected — no verification file/tag in repo) | external (requires Google account) |
| Google Analytics | **NOT AVAILABLE** (not present) | — |
| Cloudflare Web Analytics | exists at **platform level** (loaded externally, cookieless) | CF dashboard (external login — not accessible from repo) |
| Custom event bridge (`src/scripts/analytics.ts` → `paQueue` → `cf.beacon`) | exists: `newsletter_view`, `newsletter_signup`, `calculator_started`, `calculator_completed`, `situation_selector_view`, `situation_selected`, `situation_result_view`, `situation_resource_click`, `affiliate_click`, commercial CTA views | CF dashboard (external) |
| Newsletter (MailerLite) | external dashboard | MailerLite account |
| Affiliate (HelloPrenup/First) | external partner dashboards | partner portals |
| SERP observation (live web search) | **available** — used for query/format discovery | `intelligence/queries.md` (labeled as observed) |

**Rule:** if a source isn't in this table with "available", its numbers are **NOT AVAILABLE** (FASE 49).
Never fabricate search volume, CTR, rankings, traffic, conversions (FASE 49).

## The loop (FASE 41 / 73)

```
PUBLISH → COLLECT DATA → UNDERSTAND QUERIES → CLASSIFY INTENT →
IDENTIFY GAPS → OPTIMIZE → CREATE NEW CONTENT → INTERNAL LINK →
DISTRIBUTE → MEASURE AGAIN
```

Every decision made in this system starts with **evidence that actually exists** and ends
in `decisions.md`. Changes to titles/meta/CTAs/links go through `experiments.md` (one change → measure → learn).

## Files

| File | What it holds |
|---|---|
| `queries.md` | Query discovery, classification (EXISTING/EXPANSION/NEW/STATE/COMMERCIAL/TOOL), clustering, search-language intelligence |
| `content-gaps.md` | Gap matrix (FASE 33) |
| `ctr-queue.md` | CTR optimization queue (FASE 16) |
| `refresh-queue.md` | Active update queue (FASE 34/67) — rules live in `../REFRESH-QUEUE.md` |
| `decisions.md` | Editorial decision log (FASE 50) |
| `experiments.md` | Experiment log (FASE 51) |
| `FIRST-INTELLIGENCE-REPORT.md` | Snapshot report (FASE 62–71) |

## Data quality check — before every decision (FASE 48)
[ ] tracking working? [ ] duplicates? [ ] bot traffic? [ ] sampling? [ ] same time period?
[ ] attribution sane? — If data is insufficient: **SAY SO** (never paper over gaps).

## Period comparison rule (FASE 3)
Always compare like with like: last 28 days vs previous 28 days, or last 3 months vs
previous 3 months. Never mix incompatible windows. Prioritize United States data when
available — don't blend foreign traffic into a US-audience reading (FASE 2).

## Monthly review (FASE 54) — simple, no dashboard
1. TOP TRACTION 2. NEW QUERIES 3. CONTENT GAPS 4. CTR OPPORTUNITIES
5. REFRESH QUEUE 6. CONVERSION SIGNALS 7. NEXT CONTENT
Record outcomes in `decisions.md`.

## Feeds production, not a parallel system (FASE 55)
Intelligence outputs feed the existing content engine: `../NEXT-BATCH.md` (batch selection),
`../BACKLOG.md` (portfolio), `../briefs/` (briefs). No second pipeline.

## No site tinkering (FASE 74)
"Redesign / rebuild / another feature / homepage change" → log in `../FUTURE-IDEAS.md`
and return to intelligence. Technical fixes only if something is broken (FASE 75).

## Indexing ≠ ranking (FASE 5)
Technical indexing issues and content/search-performance issues are different problems.
Never fix ranking by touching robots.txt. Never change technical SEO without evidence.

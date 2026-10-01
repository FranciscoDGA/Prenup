# Content Decay, Refresh Queue & Data Rules (FASE 11, 12, 15–17, 20, 43–45, 56, 58, 59)

## FASE 11 — Decay concept (simple)
- Structured data already emits `datePublished` + `dateModified` (`updated ?? published`) on every guide — **update the `updated:` frontmatter field only when the content genuinely changed.**
- Never touch dates to fake freshness. A stale-but-correct article stays untouched.

## FASE 12 — Source updates (legal content)
When a cited source changes (statute, Clio rate, poll, state rule): re-read the article's claim; if the claim still holds, do nothing; if not, fix the claim **and then** set `updated`. Never edit solely to bump the date.

## FASE 15/16/17 — Title/meta principles (for future edits)
- Title must answer "What will I learn if I click?" — weak: "Prenups: Everything You Need to Know"; better: "How Much Does a Prenup Cost? What Couples Usually Pay".
- Numbers/values only when backed by a real source.
- Meta description: benefit + honest reflection of content; no keyword stuffing; no promises the article doesn't keep.
- Apply only when there's a reason (impressions/CTR data), not speculatively (FASE 44).

## FASE 20/56 — REFRESH QUEUE (review later — do not act now)

| Item | Trigger to review | Why queued |
|---|---|---|
| how-much-does-a-prenup-cost | Annual (prices/Clio hourly) or platform pricing change | Price data decays fastest. |
| first-vs-helloprenup, legalzoom-prenup-review | Vendor pricing/feature change (semi-annual check) | Compare cluster must stay accurate; affiliate integrity. |
| is-an-online-prenup-legal | Statute/rule change in any major state | Validity is law-dependent. |
| prenup-30-days-before-wedding | Any new state timing rule surfaced | Timing claims are state-specific. |
| do-i-need-a-prenup | New poll/statistic (Axios/Harris figures are 2026-era) | Stats age. |
| All 3 Sprint 5 articles | **First GSC data available** | FASE 44: give them time — "no data yet" ≠ "failed." |
| Briefs 4–10 (unpublished) | As published | Add to queue at publish. |

## FASE 43 — Performance review (only with enough data)
Once GSC/CF data accumulates (weeks, not days): top impressions, top clicks, top CTR, queries, low-CTR pages, unindexed pages, gaps. No strong conclusions from small numbers.

## FASE 44/58 — Decision rules (hypotheses, not verdicts)
| Signal | Investigation |
|---|---|
| High impressions + low CTR | title/meta (FASE 16/17 principles) |
| Low impressions | search intent / topic / internal links |
| High CTR + low impressions | demand & coverage → maybe expand |
| High clicks | expand the cluster |
| Unexpected queries on an existing article (FASE 45) | update the article / add a section / new article / state content — decide by intent |

## FASE 59 — Forbidden statements
No "this will rank", "page one", "guaranteed keyword". Ever — in reports, content, or outreach.

## FASE 56/57 — Consolidation & retirement
- **Consolidate** when two pages share the same intent, audience, AND answer — pick the stronger page, merge, and redirect or replace internal links. Never let two pages compete for one question (current watch pairs listed in BACKLOG.md → CONSOLIDATE and EDITORIAL-CLUSTERS.md FASE 8).
- **Retire** only after checking: backlinks · traffic · rankings · internal links · intent. Options: update · consolidate · redirect · archive. Never delete blind.
- Both actions require a real reason (overlap or decay) — never date-driven fakery.

**Active queue entries** live in `intelligence/refresh-queue.md` (URL · reason · source · priority · action) — this file holds the rules only.

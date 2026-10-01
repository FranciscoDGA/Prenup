# PrenupAnswers Content Production Engine

The workflow that turns a content opportunity into a publishable article.

**The website is the product. This engine exists to feed it — not to change it.**

## Workflow (Sprint 7 — full editorial scale engine)

```
OPPORTUNITY
↓   (BACKLOG.md — in a cluster? completes a map gap? unique value?)
RESEARCH
↓   (search intent + SERP gaps + batch sources — EDITORIAL-CLUSTERS.md)
BRIEF
↓   (CONTENT-BRIEF-TEMPLATE.md — includes UNIQUE VALUE, required)
DRAFT
↓   (WRITE-ARTICLE-PROMPT.md + WRITING-STANDARD.md)
LEGAL REVIEW        ← Level 2 (LEGAL-REVIEW.md: claim checklist, sources, jurisdictions)
↓
AMERICAN-NATIVE EDIT ← Level 1 (WRITING-STANDARD.md: voice, reader, human-edit pass)
↓
SOURCE CHECK        ← Level 2 (source-first, named, primary-first, no "experts say")
↓
SEO CHECK           ← Level 3 (intent, title, metadata, H1, no stuffing)
↓
INTERNAL LINKING    ← (≥2 natural inbound; cannibalization check; map completion)
↓
CONVERSION REVIEW   ← Level 4 (ONE CTA, most useful next step, situation, tool fit)
↓
PUBLISHING GATE (all 4 levels below) → PUBLISH → DISTRIBUTE (Sprint 6 docs)
→ MEASURE (data when available; FAE 54: don't touch fresh content)
→ UPDATE (REFRESH-QUEUE.md rules only)
```

## Review levels (FASE 39) + Publishing gate (FASE 40)

**Level 1 — Editorial:** clarity · grammar · American English · structure (→ WRITING-STANDARD.md)
**Level 2 — Legal:** claims · sources · jurisdiction · dates (→ LEGAL-REVIEW.md)
**Level 3 — SEO:** intent · title · metadata · internal links
**Level 4 — Conversion:** CTA · next step · situation · tool fit

Publish only when ALL pass:

- [ ] Editorial pass
- [ ] Legal pass
- [ ] Source pass
- [ ] SEO pass
- [ ] Internal-link pass
- [ ] CTA pass

## Quality Gate — an article is NOT ready until all pass

- [ ] Clear search intent
- [ ] Clear answer (first-answer rule: answer in the opening lines, not after 800 words)
- [ ] Natural American English
- [ ] Original structure
- [ ] No AI-like filler
- [ ] Legal claims supported (source identified before finalizing)
- [ ] State distinctions handled ("state law can differ" where applicable)
- [ ] Internal links relevant (3–6, descriptive anchors)
- [ ] CTA relevant (ONE primary next step)
- [ ] SEO metadata complete (title, description, keyword, cluster, H1)
- [ ] Sources included where needed
- [ ] No fabricated claims
- [ ] No fake authority

Run after publishing: `npm run build && npm run typecheck && npm run lint`
plus the regression spot-check in BACKLOG.md.

## How a new article actually gets published (existing system — do not replace)

1. Copy `ARTICLE-TEMPLATE.md` → `src/content/guides/<slug>.md`
2. Fill frontmatter (schema fields only — see template for the exact list)
3. Write the body per the template structure
4. Frontmatter decisions that control rendering:
   - `commercialIntent: none` → NO affiliate CTA box (use `ctaHref` for an editorial CTA)
   - `commercialIntent: low|medium|high` → affiliate CTA box with visible disclosure
   - `primarySituation` → connects the article to the Situation funnel (optional)
   - `faq` → renders FAQ section + FAQPage JSON-LD (only genuinely relevant questions)
5. Build. The article appears in `/guides/`, the sitemap, and the JSON-LD automatically.
6. Run the Quality Gate.

There is no CMS, no new engine, no new API. Markdown in, static HTML out — same as the
18 guides that shipped before this sprint.

## Distribution (after publish — Sprint 6)

CONTENT → ORGANIC SEARCH → INTERNAL DISCOVERY → EMAIL → SOCIAL → RETURN VISITS

1. Internal links: ≥2 natural inbound links from existing pages (see `INTERNAL-LINKING.md`)
2. Verify sitemap inclusion (automatic) + indexing health (`AUDIT-INDEXING.md`)
3. Check the article's row in `DISTRIBUTION-MATRIX.md`: Email? Social? State? Tool?
4. Newsletter only if Email=YES and criteria pass (`EMAIL-DISTRIBUTION.md`)
5. Social adaptation only where genuinely useful (`SOCIAL-DISTRIBUTION.md`)
6. Log the action in the distribution table; queue refresh triggers (`REFRESH-QUEUE.md`)

Organic search stays the primary channel. No mass automation, no manufactured links,
no ranking guarantees.

## File map

| File | Purpose |
|---|---|
| `README.md` (this file) | Workflow + quality gate + distribution entry point |
| `CONTENT-BRIEF-TEMPLATE.md` | Brief format every opportunity passes through |
| `ARTICLE-TEMPLATE.md` | Article structure + frontmatter contract |
| `WRITE-ARTICLE-PROMPT.md` | Reusable writing prompt for any new article |
| `BACKLOG.md` | First 20 opportunities, top 10, calendar, priority rules |
| `briefs/BRIEF-###-*.md` | Completed briefs (one per prioritized opportunity) |
| `AUDIT-INDEXING.md` | Sitemap/robots/canonical/meta/analytics audit + fixes |
| `CONTENT-HUBS.md` | Cluster hub→spoke maps + state-hub + network diagram |
| `INTERNAL-LINKING.md` | Inbound/outbound/next-step audit, orphan fixes |
| `DISTRIBUTION-MATRIX.md` | First-10 channel matrix, cycle, UTM/naming, log |
| `EMAIL-DISTRIBUTION.md` | The Prenup Brief selection, format, subjects, reuse |
| `SOCIAL-DISTRIBUTION.md` | Channels, Reddit rules, core ideas, link-earning policy |
| `REFRESH-QUEUE.md` | Decay rules, refresh queue, title/meta + data decision rules |
| `CONTENT-INVENTORY.md` | Editorial inventory with content_id/status (FASE 2 spec) |
| `EDITORIAL-CLUSTERS.md` | 9 strategic clusters, topical maps, gaps, intent groups, cannibalization |
| `WRITING-STANDARD.md` | American-native voice, reader model, edit passes, content types |
| `LEGAL-REVIEW.md` | Claim checklist, source-first rules, state discipline |
| `NEXT-BATCH.md` | Selected next 6 articles + cadence + batching protocol |
| `FUTURE-IDEAS.md` | Parked non-editorial ideas — nothing built from here without a sprint |

**Cadence (FASE 34/35):** 1–3 strong articles/week as capacity allows; 3 excellent > 10 mediocre; no volume quotas.

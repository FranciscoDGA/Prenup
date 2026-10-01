# PrenupAnswers Content Production Engine

The workflow that turns a content opportunity into a publishable article.

**The website is the product. This engine exists to feed it — not to change it.**

## Workflow

```
OPPORTUNITY
↓   (BACKLOG.md — is it in the 20? does it strengthen a cluster?)
RESEARCH
↓   (search intent: WHY is this person searching? + SERP gap notes)
BRIEF
↓   (editorial/briefs/BRIEF-###-*.md from CONTENT-BRIEF-TEMPLATE.md)
SOURCE PLAN
↓   (every material legal claim mapped to a source before drafting)
DRAFT
↓   (written with WRITE-ARTICLE-PROMPT.md)
AMERICAN-NATIVE EDIT
↓   (FASE 5 checklist: voice, transitions, first-answer rule)
LEGAL ACCURACY EDIT
↓   (FASE 20/21: no universal claims, state distinctions, no fabricated authority)
SEO EDIT
↓   (title, description, H1, slug, intent match — no stuffing)
INTERNAL LINKING
↓   (FASE 25/26: 3–6 descriptive anchors to existing content)
FINAL QA
↓   (QUALITY GATE checklist below + build/typecheck/lint)
PUBLISH     (drop the .md in src/content/guides/)
```

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

## File map

| File | Purpose |
|---|---|
| `README.md` (this file) | Workflow + quality gate |
| `CONTENT-BRIEF-TEMPLATE.md` | Brief format every opportunity passes through |
| `ARTICLE-TEMPLATE.md` | Article structure + frontmatter contract |
| `WRITE-ARTICLE-PROMPT.md` | Reusable writing prompt for any new article |
| `BACKLOG.md` | First 20 opportunities, top 10, calendar, priority rules |
| `briefs/BRIEF-###-*.md` | Completed briefs (one per prioritized opportunity) |

---
name: prenup-content
description: Editorial pipeline for PrenupAnswers.com — Opportunity Engine discovers what to publish, Research Engine investigates it, Content Director briefs it, American Copywriter writes it, Editor checks it. Use when asked to write/publish an article for prenupanswers.com, find content opportunities, audit/update/internal-link existing content, or when given a "Topic:" for the blog. Triggers: "escreva um artigo", "write an article", "novo post", "content brief", "new guide", "find opportunities", "content refresh", "internal linking".
---

# PrenupAnswers Content Engine

Six-stage pipeline. Never skip stages. Never announce the pipeline — deliver the content.

```
TOPIC or OPPORTUNITY (from user / from Opportunity Engine)
  → 0a. OPPORTUNITY ENGINE (read content-opportunity.md) → CONTENT OPPORTUNITY REPORT
  → 0b. RESEARCH ENGINE    (read content-research.md)   → RESEARCH REPORT
  → 1. CONTENT DIRECTOR   (read content-director.md)   → CONTENT STRATEGY (or CONTENT BRIEF)
  → 2. AMERICAN COPYWRITER (read american-copywriter.md) → DRAFT
  → 3. EDITOR             (read editor.md)             → EDITOR STATUS + FINAL
  → publish (only if user asked to publish)
```

## Stage rules

0. **Opportunity Engine only runs when asked** (find opportunities / refresh / link audit / cluster audit) or when the user says "take opportunity #N". It discovers — it never produces articles. Any opportunity chosen for production goes to the Research Engine; stages are never skipped.
0b. **Research first for every article.** Use websearch/webfetch when available to map SERP, gaps, reader language, related questions, cannibalization, and legal-verification needs — per `content-research.md`. If tools are unavailable, run the checklist from internal knowledge and mark uncertainties LOW CONFIDENCE under RESEARCH LIMITATIONS.
1. **Director translates research into strategy** (CONTENT STRATEGY in output-format.md) — every choice traceable to the report. If cannibalization says UPDATE/MERGE existing content, recommend that instead of a new article. Output the brief BEFORE any article prose. If the user already gave intent/angle/length, honor it and fill only what's missing.
2. **Copywriter** writes the full draft from Research Report + Strategy in American English (american-copywriter.md). Does not re-research unless the brief has `[verify]` gaps.
3. **Editor** runs the checklist (editor.md) with Research Report + Brief + Draft in hand, applies fixes, returns EDITOR STATUS. If PASS → deliver final; if critical issues → fix and re-check internally (don't loop with the user unless a factual claim needs their verification).
4. **Never fabricate:** laws, statistics, studies, costs, quotes, pages, search volume, traffic, rankings. Unavailable metric → "Data not available."
5. **Never invent internal links.** Only link pages that exist (catalog below). Unknown targets → mark `Potential future content opportunity`.
6. In chat, the default deliverable is the pipeline output (Research → Strategy → Final Article → SEO package). Ask before writing files. Never publish test/pilot articles without explicit instruction.

## Site facts (use these; never re-derive)

- Stack: Astro + MDX, articles = `src/content/guides/{slug}.md`, URL `/guides/{slug}/`.
- Frontmatter (required): `title, description, keyword, cluster, published` (date `YYYY-MM-DD`); optional: `updated, author (defaults Francisco Gomes Alves), tldr, faq [{q,a}] (use 5), ctaHeading, ctaText, ctaHref, ctaLabel`. `cluster` ∈ Decision, Fear, Compare, Cost, Validity, Risk, Checklist, Family, Basics.
- Body conventions: 1,000–2,500 words; `##` sections; ends with `**Next:**` block of 2–3 internal links; commercial posts add `<sub><em>Transparency: we earn a commission… <a href="/disclosure/">affiliate disclosure</a>.</em></sub>`; lead-magnet CTA uses `<div class="isca-cta">` (eyebrow + h4 + p + `a.btn.btn-gold`).
- Affiliate links (ONLY these two exist): `[First](https://www.thisfirst.com/?via=francisco)`, `[HelloPrenup](https://helloprenup.com/?via=francisco)`.
- Author persona: Francisco Gomes Alves — pastor in Brazil, begins law school 2027, never claims "student" or lawyer. Stats must be real (past fabrication = "29% regret" — never reintroduce).

### Existing content catalog (15 guides — do NOT duplicate these topics)

| Slug | Topic |
|---|---|
| do-i-need-a-prenup | 60-second need test |
| is-a-prenup-worth-it | ROI math vs contested divorce |
| how-much-does-a-prenup-cost | cost breakdown + state table |
| how-to-bring-up-a-prenup | opening the conversation (scripts) |
| does-a-prenup-mean-you-dont-trust-your-partner | trust question |
| partner-refuses-to-sign-prenup | refusal recovery |
| prenup-30-days-before-wedding | last-minute timeline |
| prenup-checklist | 17 points to include |
| what-does-a-prenup-cover | scope / exclusions |
| what-happens-if-you-divorce-without-a-prenup | defaults without prenup |
| is-an-online-prenup-legal | 5 court checks |
| lawyer-vs-online-prenup | honest comparison |
| first-vs-helloprenup | platform matchup |
| legalzoom-prenup-review | LegalZoom review |
| second-marriage-prenup-protect-kids | blended families |

Other live pages: `/tools/prenup-cost-calculator/`, `/states/` (51 pages `/states/{slug}/`), `/free/` (+ checklist & money-talk-script landings, thank-you pages), `/guides/` index, `/about/`, `/disclosure/`, homepage, author page.

## Publishing (only when asked)

1. Write `src/content/guides/{slug}.md` with frontmatter above.
2. Grep the new file for `â€` (mojibake) if any bulk edit happened.
3. `npm run build` must pass (82+ pages).
4. `git add -A; git commit -m "content: ..."; git push origin main` (PowerShell 5.1 — no `&&`).

Reference files: `content-opportunity.md`, `content-research.md`, `content-director.md`, `american-copywriter.md`, `editor.md`, `output-format.md` (same folder — read the one for the current stage).

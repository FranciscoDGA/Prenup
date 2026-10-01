# ARTICLE TEMPLATE (PrenupAnswers)

> Copy → `src/content/guides/<slug>.md`. Structure is a default, not a cage: every section
> must earn its place (FASE 59 — "somente usar se fizer sentido").

## Frontmatter (the real schema — all that exists)

```yaml
---
title: "…"                     # exact H1; include year only if content is year-specific
description: "…"               # ≤160 chars; the SERP snippet, written for humans
keyword: …                     # primary search query (researched, not guessed)
cluster: …                     # Basics | Cost | Decision | Risk | Fear | Compare | Validity | Family | Checklist
published: 2026-10-01          # real date — never invent
updated: …                     # only when real
# author: defaults to Francisco Gomes Alves (the real system — no fake experts)
tldr: "…"                      # 1–3 sentences: the whole answer in miniature
primarySituation: …            # optional: one of the 8 situations
commercialIntent: none|low|medium|high
faq:                           # only genuinely relevant questions (max ~5)
  - q: "…"
    a: "…"
# Optional editorial CTA (renders instead of the affiliate box; use with commercialIntent: none):
# ctaHeading / ctaText / ctaLabel / ctaHref: /guides/…
---
```

## Body structure

```markdown
Short answer: **the direct answer, in one or two sentences.**
(one line of context)

## Main explanation          ← the substance, H2s as needed

## What can affect this?     ← factors (omit if the answer doesn't have any)

## What about state law?     ← only when state law actually differs

## Common questions          ← only if genuinely common (frontmatter faq renders
                                its own section — don't duplicate)

## What to do next           ← ONE primary next step, descriptive link anchors

## Sources                    ← only when material legal claims need them

## Related resources          ← only if it adds orientation beyond the What-to-do-next links
```

Rules that are not negotiable:

- **First-answer rule:** the answer appears in the first lines, never after 800 words.
- **State law:** never generalize one state's rule nationally. Use "state law can differ",
  "generally", "courts may consider" — not "always", "never", "every state requires".
- **Links:** 3–6 internal links, descriptive anchors ("how much a prenup can cost",
  "prenup laws in Texas") — never "click here" or bare "learn more".
- **CTA:** one primary next step. No banner stacking.
- **Voice:** clear, natural, conversational, professional, calm, specific, human.
  Short paragraphs. Concrete examples. Plain American English.
  Avoid: "Furthermore", "Moreover", "In today's fast-paced world", "It is important to
  note", "When it comes to", "Whether you are...", "Navigating the complexities of...".

## Required frontmatter decisions

| Reader stage | commercialIntent | CTA behavior |
|---|---|---|
| Just learning (definition, basics) | `none` + `ctaHref` → editorial link to the next guide | no affiliate box |
| Evaluating / planning | `low` or `medium` | affiliate box, visible disclosure |
| Near a decision (cost, attorney, services) | `high` | affiliate box, visible disclosure |

## Before calling it done

Run the Quality Gate in `editorial/README.md`, then:
`npm run build && npm run typecheck && npm run lint`

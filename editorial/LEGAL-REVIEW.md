# Legal Review & Source Standard (FASE 17–23, 55)

Level 2 of the review workflow. A draft cannot pass the publishing gate without this.

## FASE 17 — Legal accuracy checklist (per relevant claim)
For every material legal claim ask:
- [ ] **Is this true?**
- [ ] **What jurisdiction?** (state-specific or national?)
- [ ] **What date?** (law changes — is this current?)
- [ ] **What source?** (named, verifiable)
- [ ] **Is there an exception?** (state or situational)
- [ ] **General or state-specific?** — never present a state rule as national (FASE 21)

## FASE 18 — Source-first, not source-after
Order of work: **SOURCE → UNDERSTANDING → WRITING.**
Never write a significant legal claim first and hunt for a citation to dress it up. If no source exists, soften, narrow, or cut the claim.

## FASE 19 — Source priority
1. **Primary:** state statutes · official state resources · courts · government resources · official legal publications
2. **Authoritative secondary:** bar associations · Nolo · ABA · Cornell Wex · reputable legal publications
3. Complementary: reputable explanatory sources
The repo has `src/data/sources.ts` (tiered registry, T1–T4, used by `SourceList.astro`) — register statute-level sources there when a page should list them.

## FASE 20 — Transparency
Forbidden without a verifiable source: "Experts say…" · "Studies show…" · "According to lawyers…" · "Research proves…".
Every article's sources must be identifiable (Sources section or named inline citation). **Gap noted in FASE 6: 18/21 current guides lack a Sources section — new content must not repeat this; those 18 sit on the UPDATE queue.**

## FASE 21 — State law discipline
- Never generalize one state's rule into "the law says."
- Where the answer varies by state: explain the variation and link the relevant `/states/<slug>/` page.
- Statutes cited by name (e.g., Cal. Fam. Code § 1615) unless the URL is verified.

## FASE 22 — Disclaimers
One appropriate disclaimer (footer carries the global one + per-article as designed). Don't stack legal hedges until the article is unreadable. Readability is part of accuracy.

## FASE 23 — Examples
Hypotheticals are welcome — label them ("Imagine Alex owns a business before getting married…"). Never present invented stories as real cases or real people.

## FASE 55 — Update triggers (when legal content changes)
Update (and only then set `updated:`) when: law changes · a cited source changes · important information becomes outdated · search intent shifts · significant new queries appear · a genuine weakness is found.
Never update to fake freshness. See `REFRESH-QUEUE.md` for the standing queue.

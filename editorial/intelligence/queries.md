# Query Discovery, Classification & Clustering (FASE 6–9, 23–26)

**Evidence policy:** entries labeled `[SERP]` come from live search observation (available now —
see README data audit). Entries labeled `[GSC]` come from Search Console (**NOT AVAILABLE yet** —
when connected, real queries land here first and replace/extend [SERP] inference).

## FASE 7 — Classification codes
`EXISTING INTENT` (adequate page) · `CONTENT EXPANSION` (page exists, must answer better) ·
`NEW ARTICLE` (no adequate page) · `STATE CONTENT` (jurisdiction-dependent) ·
`COMMERCIAL` (commercial intent) · `TOOL OPPORTUNITY` (existing tool serves it)

## FASE 8 — Clustering rule
Never one article per query. Queries sharing one intent collapse into one cluster → one page.

## Observed query inventory (real observations, 2026-10-01)

| Query cluster (FASE 8) | Example queries observed | Classification | Notes |
|---|---|---|---|
| CHANGE/AMEND | "can you change a prenup after signing" ` [SERP]` | **NEW ARTICLE** | SERP = firm blogs + HelloPrenup + thisfirst; no top-tier authority owns it. Our coverage: none |
| WHO PAYS | "who pays for a prenup" ` [SERP]` | **NEW ARTICLE** | SERP = firm blogs + NPR Life Kit; our coverage: none |
| NEED / NO ASSETS | "do i need a prenup if i have no assets" ` [SERP]` | **CONTENT EXPANSION** → `do-i-need-a-prenup` | "no assets" objection NOT found in the guide (grep-verified) |
| STATE RULES (CA) | "california prenup requirements", "7 day rule" ` [SERP]` | **EXISTING INTENT** | `/states/california/` + cost guide cover §1615 7-day rule |
| COST | "prenup cost", "how much does a prenup cost" ` [SERP S7]` | **EXISTING** (+ TOOL) | `how-much-does-a-prenup-cost` + calculator — format matches guide+tool SERP |
| HOW DOES IT WORK (S7) | "how does a prenup work" ` [SERP S7]` | **NEW ARTICLE** (BRIEF-011, NOW batch) | Beginner lifecycle gap |
| LAWYER QUESTIONS (S7) | "questions to ask a prenup lawyer" ` [SERP S7]` | **NEW ARTICLE** (BRIEF-012, NOW batch) | Consultation-prep gap |
| POSTNUP (S7) | "prenup after marriage" ` [SERP S7]` | **NEW ARTICLE** (BRIEF-004, NOW batch) | Neutral explainer gap |
| LEGALITY DIY | "is an online prenup legal" ` [SERP S7]` | **EXISTING** | `is-an-online-prenup-legal` |

## Patterns to keep hunting when GSC connects (FASE 6/25)
- "can a prenup protect [business I already own / inheritance / house / retirement]"
- "do i need a prenup if..." (no assets, student debt, already married)
- "what happens if..." (sign and divorce, no prenup)
- conversational/long-tail questions (full sentences)
- state-specific: group per state, never auto-create pages (FASE 26)

## FASE 9 — Intent mismatch watch
Query `can a prenup protect inheritance` landing on `what-is-a-prenup` (hypothetical until GSC)
= content gap signal → check which page actually answers it (we have
`can-a-prenup-protect-an-inheritance` — a mismatch would mean internal linking/metadata issue,
not necessarily a new page). Log confirmed cases in `decisions.md`.

## FASE 23/24 — Search-language intelligence
Real vocabulary feeds titles/headings/FAQs — naturally, never copied verbatim:
- Users say **"prenup after marriage"**; content says "postnuptial agreement" → explain BOTH terms (BRIEF-004).
- Users say **"change/cancel a prenup"**; content rarely says "amend/revocation" → new page should bridge both.
- Users say **"who pays"**; content says "fee allocation" → plain English first.

## FASE 27 — State priority (no public ranking)
When GSC exists: prioritize states by impressions + clicks + legal distinctiveness + existing depth.
Static starting point (legal distinctiveness, pre-data): CA, TX, NY, FL, WA (community property + volume),
then remaining community-property states (AZ, ID, LA, NV, NM, WI). **Private planning only.**

# Editorial Clusters, Topical Maps & Gap Analysis (FASE 3–8)

## FASE 3 — The 9 strategic clusters (fixed — deepen, don't proliferate)

| # | Strategic cluster | Site `cluster` labels involved | Existing pieces |
|---|---|---|---|
| 1 | Prenup Basics | Basics, Validity | what-is-a-prenup, what-does-a-prenup-cover, what-happens-to-debt, is-an-online-prenup-legal, prenup-checklist |
| 2 | Prenup Cost | Cost, Compare | how-much-does-a-prenup-cost, lawyer-vs-online, legalzoom-review, first-vs-helloprenup |
| 3 | Relationship & Conversation | Fear | how-to-bring-up, does-mean-dont-trust, partner-refuses |
| 4 | Assets & Property | Risk (partial) | what-does-a-prenup-cover (partial), can-a-prenup-protect-an-inheritance, divorce-without-prenup |
| 5 | Business | Risk (partial) | can-a-prenup-protect-a-business |
| 6 | Children & Family | Family | second-marriage-prenup-protect-kids, can-a-prenup-protect-an-inheritance |
| 7 | Debt | Basics (partial) | what-happens-to-debt-when-you-get-married |
| 8 | State Law | — (51 state pages) | /states/* + state sections inside guides |
| 9 | High-Intent / Practical Decisions | Decision, Risk | do-i-need, is-a-prenup-worth-it, do-you-need-a-lawyer, how-long, 30-days |

Rules: new content must land in one of these 9. No new clusters without retiring one.
Frontmatter `cluster` labels stay as-is (existing system); this file is the strategic layer.

## FASE 4 — Questions per cluster

### 1. Prenup Basics
- **CORE:** What is a prenup and how does it work?
- Supporting: what does it cover / not cover; how does it work step by step; is it worth it; when should you get one; change/cancel after signing.
- State: formalities (writing/notary/witnesses), what each state allows in the agreement.
- Practical: first conversation; where to start; checklist.
- Commercial: none here by design (trust cluster).

### 2. Prenup Cost
- **CORE:** How much does a prenup cost?
- Supporting: what drives cost up; who pays; how lawyers bill; budget routes; online vs attorney pricing.
- State: cost-by-state ranges (already in cost guide + each state page).
- Practical: calculator; timing → cost link; negotiation to cut billable hours.
- Commercial: legitimate — routes to pricing tools/partners (medium/high).

### 3. Relationship & Conversation
- **CORE:** How do we bring up a prenup without a fight?
- Supporting: is asking bad news; what if they say no; does it mean distrust; money talk before marriage; when partner asks (receiver's side).
- State: n/a (universal) — except support-waiver conversations (California).
- Practical: scripts, questions to ask each other, free money-talk script.
- Commercial: none (fear cluster stays clean).

### 4. Assets & Property
- **CORE:** How do we decide who keeps what?
- Supporting: the house; inheritance; retirement/401k; separate vs marital property; commingling; what divorce-without-prenup does.
- State: community property vs equitable distribution (12 states) — the single biggest state variance.
- Practical: disclosure worksheet; deed/title questions.
- Commercial: medium (calculator, state pages).

### 5. Business
- **CORE:** Can a prenup protect my business?
- Supporting: growth-during-marriage clauses; valuation; business started after marriage; equity/RSUs; what a business owner should ask.
- State: business valuation approaches vary; separate-property treatment.
- Practical: what documents to gather; questions for attorney.
- Commercial: medium/high (calculator + attorney paths).

### 6. Children & Family
- **CORE:** How do we protect kids from a previous marriage?
- Supporting: college costs; inheritance priority; second marriage dynamics; what prenups cannot decide (custody/support).
- State: support limits; estate-planning intersection.
- Practical: wills/trusts coordination; beneficiary designations.
- Commercial: low (trust cluster).

### 7. Debt
- **CORE:** How do we handle debt in a marriage?
- Supporting: can a prenup protect me from spouse's debt; student loans; who pays what during marriage; debt disclosure.
- State: community debt rules (AZ/CA/etc.), creditor rights vs spouse.
- Practical: debt inventory.
- Commercial: low.

### 8. State Law
- **CORE:** What are the prenup rules in my state?
- Supporting per state: enforceability, timing, counsel, support waivers, cost, default divorce rules.
- State: IS the cluster (51 hubs).
- Practical: state → cost calculator, state → relevant guides.
- Commercial: state pages already route to calculator + affiliate CTAs (medium).

### 9. High-Intent / Practical Decisions
- **CORE:** Should I get a prenup, and how do I get it done right?
- Supporting: do I need one; worth it; how long; do I need a lawyer; 30-day window; find an attorney; questions to ask a lawyer.
- State: timing/counsel rules per state.
- Practical: calculator; checklist; /start/ situation path.
- Commercial: high (both monetization paths legitimate here).

## FASE 5 — Topical map template (used for every cluster)
```
HUB (/guides/ + state pages)
  └ CORE ARTICLE (answers the cluster's core question)
      ├ SUPPORTING ARTICLES (derived questions)
      ├ FAQ / LONG-TAIL (inline FAQs + small guides)
      ├ STATE CONTENT (/states/<slug>/ where law differs)
      ├ TOOL (/tools/prenup-cost-calculator/ or /start/)
      └ SITUATION PATH (one of the 8 existing situations)
```
Rule: create content to complete a map gap — never just because a keyword exists.

## FASE 6 — Content gaps (classified)

**CRITICAL**
1. "How does a prenup work?" — beginner core missing entirely (cluster 1 core question unanswered as a process walkthrough). FASE 28 base content.
2. Sources coverage: 18/21 guides make legal/practical claims with **no identifiable Sources section** (only the 3 Sprint 5 articles + scattered inline links). Authority depends on this.
3. "What should I ask a prenup lawyer?" — high-intent decision content missing (cluster 9).

**IMPORTANT**
4. "When should you get a prenup?" — timing-decision beginner (cluster 1/9).
5. Assets & Property depth: no dedicated house/separate-property guides (cluster 4) — briefs 007 + candidates.
6. Postnup after marriage (brief 004) — opens cluster 1 sub-area.
7. Conversation receiver-side (brief 006) — cluster 3 half-empty.
8. Debt protection angle (brief 008) — cluster 7 thin (1 piece).
9. Business started after marriage (backlog #15) — cluster 5 half-covered.

**OPTIONAL**
10. Red flags (backlog #11), who pays (#7), college costs (#17), student loans (#19), budget routes (#8), how lawyers bill (#9), retirement accounts (#14), change/cancel (#6), money-talk (#12), find attorney (brief 010), custody (brief 009 — cluster 6 support).

## FASE 7 — Search-intent grouping (never one article per query)
| Intent group (one page only) | Example queries |
|---|---|
| Cost level | "prenup cost", "how much is a prenup", "average prenup cost", "how expensive is a prenup" → `how-much-does-a-prenup-cost` |
| Need/value | "do i need a prenup", "should i get a prenup", "is a prenup worth it" → do-i-need (need) + is-worth-it (value) — split verified: different questions |
| DIY legality | "is an online prenup legal", "are online prenups enforceable", "is helloprenup legit" → is-an-online-prenup-legal |
| Route choice | "lawyer vs online prenup", "should i hire a lawyer" → lawyer-vs-online + do-you-need-a-lawyer (decision vs comparison — split verified) |
| Timeline | "how long does a prenup take", "prenup timeline", "how far before wedding" → how-long (+ 30-days for the extreme case) |
| State rules | "prenup laws in [state]", "[state] prenup requirements" → /states/<slug>/ only |

## FASE 8 — Cannibalization audit

| Pair | Verdict | Action |
|---|---|---|
| do-i-need vs is-a-prenup-worth-it | **Split OK** — need vs value are different questions | Keep both; each links to the other with distinct anchors |
| what-is-a-prenup vs what-does-a-prenup-cover | **Split OK** — definition vs scope | Already cross-linked |
| how-long vs 30-days | **Split OK** — normal timeline vs compressed window | Cross-linked (S6) |
| lawyer-vs-online vs do-you-need-a-lawyer | **Split OK** — comparison vs decision framework | Cross-linked (S6) |
| lawyer-vs-online vs legalzoom-review vs first-vs-helloprenup | **Split OK** — category vs product pages | Keep; reviews must stay product-specific |
| cost guide "Cost by state" table vs state pages "cost in [state]" | **WATCH** — overlapping answer to "prenup cost [state]" | Both exist and cross-link (state → cost guide + calculator). Keep table as national ranges; state page as state detail. Do NOT expand either into the other's territory |
| prenup-checklist guide vs /free/prenup-checklist/ PDF | **WATCH** — same keyword, different formats | Guide = editorial "17 things"; free = downloadable worksheet. Ensure each links the other, distinct titles |
| does-mean-dont-trust vs how-to-bring-up | **Split OK** — perception vs initiation | Keep |
| New article rule | Before any draft: "Is a page already answering this exact intent?" — if yes: improve/extend/consolidate; new page only for a genuinely different intent |

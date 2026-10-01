# Content Hubs & Hub → Spoke Map (FASE 7, 8, 46, 47, 48)

Goal: topical depth per cluster, not article count. Hubs = `/guides/` (universal index) + cluster anchors; state pages are geographic hubs.

## Cluster maps (current, after Sprint 5 + Sprint 6 links)

### BASICS (hub anchor: what-is-a-prenup)
```
/guides/ (hub)
  └ what-is-a-prenup ──────────── (anchor)
       ├→ what-does-a-prenup-cover
       ├→ do-i-need-a-prenup → what-is-a-prenup (backlink added S6)
       ├→ what-happens-to-debt-when-you-get-married
       └→ tool: /start/ + /tools/prenup-cost-calculator/
```

### COST (hub: how-much-does-a-prenup-cost)
```
/guides/
  └ how-much-does-a-prenup-cost
       ├→ do-you-need-a-lawyer-for-a-prenup (backlink added S6)
       ├→ how-long-does-a-prenup-take (backlink added S6)
       ├→ lawyer-vs-online-prenup
       └→ tool: /tools/prenup-cost-calculator/
```

### DECISION (hub: do-i-need-a-prenup + do-you-need-a-lawyer-for-a-prenup)
```
/guides/
  ├ do-i-need-a-prenup → what-is-a-prenup
  ├ do-you-need-a-lawyer-for-a-prenup
  │    ← lawyer-vs-online-prenup (S6)
  │    ← is-an-online-prenup-legal (S6)
  │    ← how-much-does-a-prenup-cost (S6)
  ├ is-a-prenup-worth-it
  └ future spoke: how-to-find-a-prenup-attorney (BRIEF-010)
```

### RISK (hub: how-long + 30-days + divorce-without)
```
/guides/
  ├ how-long-does-a-prenup-take
  │    ← prenup-30-days-before-wedding (S6)
  │    ← how-much-does-a-prenup-cost (S6)
  ├ what-happens-if-you-divorce-without-a-prenup
  ├ can-a-prenup-protect-a-business
  └ state spokes: /states/<state>/ for timing + enforceability rules
```

### COMPARE / VALIDITY / FEAR / FAMILY / CHECKLIST
- Compare: lawyer-vs-online-prenup, first-vs-helloprenup, legalzoom-prenup-review
- Validity: is-an-online-prenup-legal → do-you-need-a-lawyer (S6)
- Fear: how-to-bring-up-a-prenup, does-a-prenup-mean-you-dont-trust, partner-refuses-to-sign
- Family: second-marriage-prenup-protect-kids, can-a-prenup-protect-an-inheritance
- Checklist: prenup-checklist (free tool entry point)

## Hub → spoke rules
- Hub points to every spoke (via `/guides/` listing + anchor links in body).
- Spokes point **back** to hub anchors when contextually natural (added in S6 where missing; never artificial).
- Spokes cross-link siblings within the same intent stage (e.g., Cost → Decision).

## State pages as hubs (FASE 46)
State pages already act as geographic hubs — `/states/texas/` links 6 guides (business, do-i-need, cost, worth-it, checklist, divorce-without). Growth direction: link **state-relevant** spokes only (timing rules → how-long; counsel rules → do-you-need-a-lawyer). Do NOT clone each article per state (FASE 47): only state-specific content where law actually differs; same article serves all states.

## Content network (FASE 48)
```
          HOMEPAGE
              |
      PRENUP BASICS (what-is-a-prenup)
      /     |      \
   COST   ASSETS   FAMILY
    |       |        |
 ARTICLES ARTICLES ARTICLES
    \       |       /
     \      |      /
      STATE PAGES
           |
      CALCULATOR
           |
     SITUATION PATH (/start/)
           |
         EMAIL (The Prenup Brief)
```
Existing pieces all present: homepage, 21 guides, 51 state pages, calculator, /start/, footer newsletter form. No new structural pages created.

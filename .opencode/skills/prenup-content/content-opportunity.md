# Content Opportunity Engine — Stage 0a (runs before the Research Engine)

Decides: "What should PrenupAnswers create next?" It NEVER writes articles and NEVER replaces the Content Director. It discovers opportunities and hands them to the Research Engine. No app, no dashboard, no DB, no auto-publishing — intelligence only.

## Commands this skill answers

- "Find N new content opportunities for PrenupAnswers."
- "Take opportunity #N and create the article." → hand off to `content-research.md` with the OPPORTUNITY block; do not skip stages.
- "Find articles that should be updated." → UPDATE OPPORTUNITY blocks only; never edit automatically.
- "Find internal linking opportunities." → SOURCE/TARGET/ANCHOR/REASON for existing pages only.
- "Audit PrenupAnswers topical coverage." → STRONG / PARTIAL / MISSING / PILLARS / SUPPORTING sections.

## 1. Site content inventory

Scan `src/content/guides/*.md`, `src/pages/**` (states, tools, free) — for each page record: URL · Title · Primary topic · Search intent · Content type · Related topics · Internal links · Potential cluster. (SKILL.md carries the current guide catalog; re-verify against the filesystem when executing.)

## 2. Content coverage map

Group everything under major themes (e.g. Prenuptial Agreements · Marriage & Finances · Business Owners · Divorce · Families & Estates). Only real existing content — never invent topics.

## 3. Topic cluster analysis

Per cluster: Covered topics · Missing topics · Supporting topics · Potential pillar · Potential supporting articles · Potential FAQ topics.

## 4. Content gap discovery

- **TYPE A** Missing topic · **TYPE B** Missing question (existing article answers only partially) · **TYPE C** Missing audience (business owners, second marriages, student-debt couples, HNW, young couples…) · **TYPE D** Missing scenario · **TYPE E** Outdated content · **TYPE F** Weak/superficial coverage.

## 5–7. Search & audience discovery + Question Mining

Mine external signals (SERP, related questions, Reddit/forums, competitor content, authoritative resources — reuse the web tools as in `content-research.md`). Check each candidate for relevance · uniqueness · overlap · existing coverage before it enters the QUESTION BANK:

```
Question: …  | Related cluster: …  | Potential article: …  | Search intent: …
```

## 8. Cannibalization check

Per opportunity: NO / LOW / MODERATEATE / HIGH overlap with an existing page's intent. HIGH → consider UPDATE / EXPAND / MERGE / RESTRUCTURE instead of CREATE.

## 9. Update opportunities

```
UPDATE OPPORTUNITY
Existing URL:
Current topic:
Why update:
Missing information:
Recommended changes:
```

## 10. Internal link opportunities

```
SOURCE ARTICLE: …   TARGET ARTICLE: …   Suggested anchor: …   Why: …
```
Never list nonexistent URLs as published pages.

## 11. Authority / topical depth

Map pillar + supporting pieces; identify which pieces are missing for the cluster to be considered authoritative.

## 12–15. Types, format, prioritization

Types: NEW ARTICLE · UPDATE EXISTING · EXPAND EXISTING · MERGE CONTENT · INTERNAL LINKING · FAQ · PILLAR CONTENT · SUPPORTING CONTENT.

Each opportunity:

```
OPPORTUNITY
Topic: / Type: / Target audience: / Search intent: / Primary question:
Why this opportunity exists: / Current PrenupAnswers coverage: / External content landscape:
Content gap: / Potential angle: / Potential title: / Related cluster:
Internal linking opportunities: / Research required: / Legal verification required:
```

Prioritization = descriptive only (HIGH PRIORITY / MEDIUM PRIORITY / LOWER PRIORITY with reasons). No artificial 1–100 scores, no invented search volume, difficulty, traffic, rankings, or backlinks — if a metric is unavailable, state "Data not available."

Matrix: `| Opportunity | Type | Audience | Intent | Gap | Cluster | Action |`

## 16. Editorial queue

```
EDITORIAL QUEUE
HIGH PRIORITY: 1…2…3…   (each with a one-line reason)
MEDIUM PRIORITY: 4…5…6…
SUPPORTING CONTENT: 7…8…
UPDATE OPPORTUNITIES: 9…10…
```

## 17. Main output — CONTENT OPPORTUNITY REPORT

```
CONTENT OPPORTUNITY REPORT
Research date:
CURRENT CONTENT LANDSCAPE
TOPIC CLUSTERS
CONTENT GAPS
QUESTION BANK
AUDIENCE GAPS
UPDATE OPPORTUNITIES
INTERNAL LINK OPPORTUNITIES
NEW ARTICLE OPPORTUNITIES
PILLAR OPPORTUNITIES
SUPPORTING CONTENT
CANNIBALIZATION RISKS
EDITORIAL QUEUE
RECOMMENDED NEXT ACTION
```

## Integration

`OPPORTUNITY → content-research.md (Research Report) → content-director.md → american-copywriter.md → editor.md → FINAL`. The Opportunity Engine stops at the opportunity.

## Safety rules (hard)

Never invent: search volume, keyword difficulty, traffic, backlinks, rankings, statistics, legal requirements, citations, competitor data. Unavailable metric → "Data not available." Always state RESEARCH LIMITATIONS (e.g. "SERP analysis was limited to the available search results"). Never copy competitor headlines/paragraphs/structures/lists — research feeds ORIGINAL strategy. Legal tiers: never present community content as law — mark GENERAL INFORMATION / STATE-SPECIFIC LAW / SOURCE-BACKED FACT / EDITORIAL INTERPRETATION / COMMUNITY EXPERIENCE.

# Indexing & Metadata Audit — Sprint 6 (FASE 1–5, 13, 14, 51, 57)

Audit performed 2026-10-01 against `dist/` and live `https://www.prenupanswers.com`.

## 1. Audit results

| Item | Status | Finding |
|---|---|---|
| sitemap.xml | ✅ works | `@astrojs/sitemap` → `sitemap-index.xml` + `sitemap-0.xml`, 84 URLs. Excludes `/free/thank-you/*` (3), `/free/prenup-checklist/`, `/free/money-talk-script/` by design (noindex'd). 89 HTML files = 84 indexed + 5 intentionally out (incl. 404.html). |
| robots.txt | ✅ fixed | `public/robots.txt`: `User-agent: * / Allow: /` + Sitemap line. **Fixed:** Sitemap URL was bare domain (308s to www) → now `https://www.prenupanswers.com/sitemap-index.xml`. No accidental blocks; no private/admin areas exist. |
| canonical | ✅ fixed | **Real problem found:** `site` in astro.config was `https://prenupanswers.com` while the bare domain 308-redirects to `www`. All canonicals, og:url and sitemap locs pointed at a host that redirects. **Fixed:** `site → https://www.prenupanswers.com`. Trailing-slash pattern consistent (`/path/`). No HTTP/HTTPS mismatch (HTTPS only). |
| metadata | ✅ | Every page: `<title>`, `meta description`, canonical. Guides: Article JSON-LD with datePublished/dateModified (falls back to published). |
| Open Graph | ✅ | og:site_name, og:type, og:title, og:description, og:url, og:image (default `/images/hero-couple.jpg`, exists), og:image:alt. |
| Twitter/X | ✅ | twitter:card `summary_large_image`, title, description, image, image:alt. |
| RSS | ⚪ none | Does not exist. Not required by sprints; not created (FASE 30: don't build new systems). |
| structured data | ✅ | WebSite LD (all pages, url updated to www), Article + Breadcrumb + FAQPage (guides), FAQPage (calculator, states), author Person LD. |
| internal links | ✅ | Lint-enforced (0 broken). Inbound gaps for Sprint 5 articles fixed this sprint — see `INTERNAL-LINKING.md`. |
| article URLs | ✅ | `/guides/<slug>/` — stable, descriptive, no dates. |
| state page URLs | ✅ | `/states/<slug>/`, 51 pages, hub outbound verified. |
| Google Search Console | ❌ unavailable | No `google-site-verification` meta, no verification file in `public/`, not inferable from repo. **Search Console data unavailable — not connected (or not verifiable from this repo). Do not fabricate metrics.** |
| analytics | ✅ partial | Cloudflare Web Analytics (cookieless) loaded **at platform level** (not in repo) + `src/scripts/analytics.ts` bridge: custom funnel events pushed to `window.paQueue` and forwarded to `cf.beacon` (situation_view, newsletter_signup, calculator events, commercial_cta_view, affiliate_click, etc.). Observability: article views (CF Analytics pages), internal CTA clicks + situation + calculator + signup + affiliate (paQueue/beacon). No GA/Plausible/Vercel Analytics installed. |
| email integration | ✅ external | Kit → MailerLite (Sprint 4). SubscribeForm + webhook — dashboard tasks (welcome automation, tagging) run outside the repo. |
| social sharing metadata | ✅ | OG + Twitter complete (above). `og:type` is `website` even on articles — acceptable; not changed (only fix what's missing/broken). |

## 2. Fixes applied this sprint (real problems only)

1. `astro.config.mjs` → `site: 'https://www.prenupanswers.com'` (canonical + og:url + sitemap host).
2. `public/robots.txt` → Sitemap URL on www.
3. `Base.astro` WebSite JSON-LD url → www.
4. All hardcoded structured-data URLs → www (`author.ts`, `guides/[...slug].astro`, `states/index.astro`, `states/[slug].astro`, `prenup-cost-calculator.astro`).

Result: canonical, og:url, sitemap, robots, and JSON-LD URLs all agree with the served host (www, 200). Bare domain 308 → www remains the canonical entry redirect.

## 3. Indexability sweep (FASE 2)

All checked live: `/`, `/guides/`, 3 new articles, key guides, `/states/`, `/states/texas/`, `/states/california/`, calculator, `/start/`, `/about/`, `/free/`, author page, robots.txt, sitemap-index, sitemap-0 → **all 200**, canonical paths correct. `/free/thank-you/` root = intentional 404 (child pages `[which]` exist). Unknown URLs → 404 (correct).

## 4. Indexing vs ranking (FASE 14) + data rules (FASE 57)

- No GSC data available → no impression/CTR/position claims. Record: **"Search Console data unavailable."**
- Decision rules when data arrives (FASE 58): high impressions + low CTR → title/meta review; low impressions → intent/topic/internal links; high CTR + low impressions → demand/coverage; high clicks → expand cluster. Hypotheses, not conclusions.
- FASE 44: do not rewrite freshly published articles for lack of traffic. "No data yet" ≠ "content failed."
- FASE 59: never claim "this will rank / page one / guaranteed."

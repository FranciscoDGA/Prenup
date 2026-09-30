# The Prenup Brief — Welcome Sequence (MailerLite)

**Platform:** MailerLite free (account 2673118) · **Status:** LIVE (activated Sept 30, 2026).
**Structure:** 1 Automation "Welcome — Prenup Brief" — trigger = completes form **Newsletter** → Email 1 → Delay 2d → Email 2 → Delay 2d → Email 3 → Delay 3d → Email 4.
**Sender:** Francisco · PrenupAnswers / hello@prenupanswers.com (domain `prenupanswers.com` verified via Cloudflare/Entri — SPF record replaced by MailerLite's).
**Reply-to:** hello@prenupanswers.com (forwards to fc_go@hotmail.com via Cloudflare Email Routing).
**Double opt-in:** ON (default) — confirmation email is ML's standard.
**Content files:** `email1.html` … `email4.html` (+ .zip) in this folder — imported via Custom HTML editor → "Import HTML code". Merge tag used in bodies: `{{unsubscribe}}` (required — ML blocks saving without it). Greeting is plain "Hi there —" (name field optional).
**Email 1 subject:** Your download's ready (and the one rule of this site) · **Email 2:** The three questions couples ask at 1 a.m. · **Email 3:** "Do you think we'll fail?" (the answer that lands) · **Email 4:** Your first Sunday (do this, not that)

---

## Email copy (source of record — bodies live in MailerLite)

**Merge tags below use Kit syntax from the original draft; in MailerLite the bodies have no name tag ("Hi there —").**

---

## Email 1 — immediate (0 delay) · delivery + trust

**Subject:** Your download's ready (and the one rule of this site)
**Preview text:** Checklist inside — plus how we stay honest.

Hi {{ subscriber.first_name | default: "there" }} —

Your worksheet is ready:

- **The 17-Point Prenup Checklist:** https://www.prenupanswers.com/free/thank-you/prenup-checklist/
- **The Money Talk Script Kit:** https://www.prenupanswers.com/free/thank-you/money-talk-script/

Print one copy each. Work through it one layer per sitting: disclosure first (the part that kills prenups when skipped), then the terms, then the signing details.

**Who's writing to you:** Francisco — a pastor in Brazil who got obsessed with how American couples navigate prenups, and built PrenupAnswers as the honest, source-checked version of what he kept finding at 2 a.m. Not a lawyer, never pretends to be. Full story: https://www.prenupanswers.com/about/

**The one rule here:** when we link to an online prenup service and you buy something, we may earn a commission — and it never changes what we recommend. If the cheap path is the right path for you, that's what we'll say.

This weekly email will carry cost data, state-law changes, and the conversations couples actually have. One a week. Unsubscribe in one click.

— Francisco

---

## Email 2 — delay 2 days · best content

**Subject:** The three questions couples ask at 1 a.m.
**Preview text:** Start here — 10 minutes total.

Hi {{ subscriber.first_name | default: "there" }} —

Every couple ends up in the same 1 a.m. spiral. These three pages answer most of it:

1. **Do I need a prenup?** — six questions, 60 seconds, no guilt trip: https://www.prenupanswers.com/guides/do-i-need-a-prenup/
2. **Is a prenup worth it?** — the actual math (prenup vs. contested divorce): https://www.prenupanswers.com/guides/is-a-prenup-worth-it/
3. **What does one cost in your state?** — the calculator, five seconds, no email: https://www.prenupanswers.com/tools/prenup-cost-calculator/

Read #1 first if you're still deciding. Skip to the calculator if you already know you're doing it and just need the number.

Hit reply and tell me which state you're in — I read every reply.

— Francisco

---

## Email 3 — delay 4 days · the hard conversation

**Subject:** "Do you think we'll fail?" (the answer that lands)
**Preview text:** Four sentences for the twelve seconds you're dreading.

Hi {{ subscriber.first_name | default: "there" }} —

The scariest part of a prenup isn't the document. It's the twelve seconds after you open your mouth.

Here's the sentence that survives them:

> *"I want to talk about it now — while we still like each other."*

The full playbook — timing rules, four copy-paste scripts (including what to say if you earn more, or if they carry debt or a business), and exact recovery lines if it goes badly — is here:

https://www.prenupanswers.com/guides/how-to-bring-up-a-prenup/

And your printable copy of the scripts: https://www.prenupanswers.com/free/money-talk-script/

Pick a boring Sunday morning. Never during a fight. Never the final week.

— Francisco

---

## Email 4 — delay 7 days · action + honest nudge

**Subject:** Your first Sunday (do this, not that)
**Preview text:** The order of operations — and when an online service is enough.

Hi {{ subscriber.first_name | default: "there" }} —

If you did nothing else this week, do this tonight — one hour, honestly:

1. **Each of you lists assets and debts.** Every account, every loan. No rounding, no "I'll find that later."
2. **Agree on the big four:** the house, the business, support, inheritance.
3. **Get your state's number:** https://www.prenupanswers.com/tools/prenup-cost-calculator/

Then the honest fork:

- **Straightforward finances** (two earners, one house, no business, no kids from before)? An online service does exactly what an expensive lawyer does for a fraction of the price. We compare the two main ones here: https://www.prenupanswers.com/guides/first-vs-helloprenup/ *(affiliate links — same price for you, and it keeps the lights on.)*
- **A business, multiple properties, big income gap, or kids from a prior marriage?** Talk to a licensed family-law attorney in your state. A few hundred dollars of advice up front is cheap insurance for a document that governs your finances for life.

Start 3–6 months before the wedding. That's the whole game.

— Francisco

---

## Setup notes (MailerLite dashboard — done)

1. **Form:** one ML form "Newsletter" (id 200044458910156443) serves all 3 site placements — endpoint `https://assets.mailerlite.com/jsonp/2673118/forms/200044458910156443/subscribe`, params `fields[email]`, `fields[name]`, `ml-submit=1`, `anticsrf=true`. Thank-you redirect is client-side via `src/data/subscribe.ts` → `redirectToFor(source)`.
2. **Automation:** "Welcome — Prenup Brief" — trigger = completes form Newsletter; 4 emails + 3 Delay rules (0 / 2 / 4 / 7 days cumulative). Content = Custom HTML editor import of `email1–4.html`. Subject/Preview set per step.
3. **Sender:** domain `prenupanswers.com` verified (Cloudflare DNS authorized via Entri); default sender + all 4 steps = hello@prenupanswers.com. Account login email remains esesdec@gmail.com.
4. **Broadcasts:** weekly newsletter issues are sent manually via Campaigns (unlimited on free). Free plan: 250 subscribers / 2,500 emails per month.
5. **Test subscribers to delete:** fc_go+ml-teste, fc_go+ml-nome-teste, and today's end-to-end test address (Subscribers → delete).

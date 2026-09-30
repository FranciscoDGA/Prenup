export type SituationId =
  | 'getting-married'
  | 'partner-wants-prenup'
  | 'business-owner'
  | 'children-family-assets'
  | 'debt'
  | 'remarriage'
  | 'cost'
  | 'researching';

export interface SituationRec {
  label: string;
  title: string;
  description: string;
  href: string;
}

export interface Situation {
  id: SituationId;
  title: string;
  description: string;
  primary: SituationRec;
  secondary: SituationRec;
  tool: SituationRec;
  articleHeading: string;
  articleText: string;
  articleCta: string;
}

export const SITUATIONS: Situation[] = [
  {
    id: 'getting-married',
    title: "I'm getting married",
    description: "I'm starting to think about a prenup and don't know where to begin.",
    primary: {
      label: 'Start Here',
      title: 'Do I Need a Prenup? The Brutally Honest 60-Second Test',
      description: 'Six questions that cut through the guilt and the awkwardness, so you can decide with a clear head.',
      href: '/guides/do-i-need-a-prenup/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'The Prenup Checklist: 17 Things to Include Before You Sign',
      description: 'Seventeen things couples forget between “yes” and the wedding day.',
      href: '/guides/prenup-checklist/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Cost Calculator',
      description: 'A realistic price range for your state in five seconds. No email required.',
      href: '/tools/prenup-cost-calculator/',
    },
    articleHeading: "If you're just getting started…",
    articleText:
      "Here's the rest of the starting path — what to decide, what to put in writing, and what it costs.",
    articleCta: 'Explore the Getting Married Path →',
  },
  {
    id: 'partner-wants-prenup',
    title: 'My partner wants a prenup',
    description: "I'm not sure what it means for me or what questions I should ask.",
    primary: {
      label: 'Start Here',
      title: 'Does a Prenup Mean You Don’t Trust Your Partner? (The Honest Answer)',
      description: 'What it actually means for your relationship — and what it doesn’t.',
      href: '/guides/does-a-prenup-mean-you-dont-trust-your-partner/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'What Does a Prenup Cover? (and What It Can’t Touch)',
      description: 'The real list of decisions couples put in writing before the wedding.',
      href: '/guides/what-does-a-prenup-cover/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'The Money-Talk Script Kit',
      description: 'Word-for-word scripts for the money conversation, including what to ask before you sign.',
      href: '/free/money-talk-script/',
    },
    articleHeading: "If your partner is the one who brought it up…",
    articleText:
      'Understand what it means for you, what to ask, and how to talk it through without it turning into a fight.',
    articleCta: 'Explore the Partner Wants a Prenup Path →',
  },
  {
    id: 'business-owner',
    title: 'I own a business',
    description: 'I want to understand how a prenup can relate to business ownership and finances.',
    primary: {
      label: 'Start Here',
      title: 'Can a Prenup Protect a Business? What Actually Works',
      description: 'How ownership, growth, and valuation get handled when the company existed before the marriage.',
      href: '/guides/can-a-prenup-protect-a-business/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'What Does a Prenup Cover? (and What It Can’t Touch)',
      description: 'Where business interests sit next to property, debt, and support clauses.',
      href: '/guides/what-does-a-prenup-cover/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Cost Calculator',
      description: 'See what drafting costs in your state — and how complexity moves the number.',
      href: '/tools/prenup-cost-calculator/',
    },
    articleHeading: "If you own a business…",
    articleText:
      'See how business ownership, marital property, and state law can interact — and what couples put in writing.',
    articleCta: 'Explore the Business Owner Path →',
  },
  {
    id: 'children-family-assets',
    title: 'I have children or family assets',
    description: "I'm thinking about inheritance, children, or protecting family wealth.",
    primary: {
      label: 'Start Here',
      title: 'Can a Prenup Protect an Inheritance? (Even One You Haven’t Received Yet)',
      description: 'How inherited money and family wealth stay separate — and where the exceptions are.',
      href: '/guides/can-a-prenup-protect-an-inheritance/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'Second Marriage? How to Protect Your Kids With a Prenup',
      description: 'Keeping what passes to your children on your side of the family.',
      href: '/guides/second-marriage-prenup-protect-kids/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Cost Calculator',
      description: 'Plan the cost before the conversation — price ranges for your state, no email.',
      href: '/tools/prenup-cost-calculator/',
    },
    articleHeading: "If you're thinking about kids or family assets…",
    articleText:
      'Inheritance, children from a previous marriage, and family wealth each deserve their own set of clauses.',
    articleCta: 'Explore the Family Assets Path →',
  },
  {
    id: 'debt',
    title: 'I have significant debt',
    description: "I'm concerned about how debt and financial obligations may affect our marriage.",
    primary: {
      label: 'Start Here',
      title: 'What Happens to Debt When You Get Married?',
      description: 'How “yours and mine” debt turns into “ours” — and where it doesn’t.',
      href: '/guides/what-happens-to-debt-when-you-get-married/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'What Happens If You Divorce Without a Prenup?',
      description: 'Your state’s defaults take over — here’s what that means for assets and debt.',
      href: '/guides/what-happens-if-you-divorce-without-a-prenup/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Laws by State',
      description: 'Community property or equitable distribution — how your state treats what you owe and own.',
      href: '/states/',
    },
    articleHeading: "If debt is what's keeping you up…",
    articleText:
      'How debt becomes marital, what a prenup can assign, and what your state does when there is no prenup.',
    articleCta: 'Explore the Debt Path →',
  },
  {
    id: 'remarriage',
    title: "I'm getting married again",
    description: "This isn't my first marriage, and my financial situation is different this time.",
    primary: {
      label: 'Start Here',
      title: 'Second Marriage? How to Protect Your Kids With a Prenup',
      description: 'Protecting the children you already have — without poisoning the engagement.',
      href: '/guides/second-marriage-prenup-protect-kids/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'Can a Prenup Protect an Inheritance? (Even One You Haven’t Received Yet)',
      description: 'Keeping family wealth in the family — for the next generation.',
      href: '/guides/can-a-prenup-protect-an-inheritance/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Cost Calculator',
      description: 'Second marriages often mean more assets — price it out for your state.',
      href: '/tools/prenup-cost-calculator/',
    },
    articleHeading: "If this isn't your first marriage…",
    articleText:
      'Second marriages come with different math — kids, assets, and ex-spouse dynamics all factor in.',
    articleCta: 'Explore the Remarriage Path →',
  },
  {
    id: 'cost',
    title: "I'm mainly worried about cost",
    description: 'I want to understand what a prenup can cost and what affects the price.',
    primary: {
      label: 'Start Here',
      title: 'How Much Does a Prenup Cost in 2026? Real Numbers by State',
      description: 'Attorney hourly rates, online service pricing, and state-by-state ranges.',
      href: '/guides/how-much-does-a-prenup-cost/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'Lawyer vs Online Prenup: The Honest Comparison (2026)',
      description: 'When a flat-fee service is enough — and when you genuinely need a lawyer.',
      href: '/guides/lawyer-vs-online-prenup/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Cost Calculator',
      description: 'Your state, your path, your complexity — a real range in five seconds.',
      href: '/tools/prenup-cost-calculator/',
    },
    articleHeading: 'If cost is the question…',
    articleText: 'Real ranges by state and path, plus what actually moves the number.',
    articleCta: 'Explore the Cost Path →',
  },
  {
    id: 'researching',
    title: "I'm just researching",
    description: "I'm learning about prenups and want the basics before making decisions.",
    primary: {
      label: 'Start Here',
      title: 'What Does a Prenup Cover? (and What It Can’t Touch)',
      description: 'The basics without the legalese: what couples actually decide in writing.',
      href: '/guides/what-does-a-prenup-cover/',
    },
    secondary: {
      label: 'Go Deeper',
      title: 'Is a Prenup Worth It? Run the Math Nobody Runs',
      description: 'The honest math — what one costs versus what not having one can cost.',
      href: '/guides/is-a-prenup-worth-it/',
    },
    tool: {
      label: 'Use This Tool',
      title: 'Prenup Laws by State',
      description: 'Browse the rules for all 50 states and D.C. — one size fits nobody.',
      href: '/states/',
    },
    articleHeading: "If you're still in research mode…",
    articleText:
      'The basics without the legalese — what prenups do, what they cost, and what states require.',
    articleCta: 'Explore the Researching Path →',
  },
];

export const SITUATION_IDS: SituationId[] = SITUATIONS.map((s) => s.id);

export const getSituation = (id: string | null | undefined): Situation | undefined =>
  SITUATIONS.find((s) => s.id === id);

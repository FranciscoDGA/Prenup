import { STATES } from './states';

export interface StatePage {
  name: string;
  titleName: string;
  abbr: string;
  slug: string;
  low: number;
  high: number;
  regime: 'community' | 'equitable';
  note: string;
}

const COMMUNITY = new Set(['AZ', 'CA', 'ID', 'LA', 'NV', 'NM', 'TX', 'WA', 'WI']);

const NOTES: Record<string, string> = {
  AL: 'Alabama applies equitable-distribution factors — and below-average attorney rates keep drafted prenups toward the affordable end.',
  AK: 'Alaska defaults to equitable distribution, but it is one of the few states where couples can opt into community property by written agreement.',
  AZ: 'Arizona is a community-property state: without a prenup, marital property is generally divided 50/50.',
  AR: 'Arkansas divides marital property equitably — and it is one of the few states where marital fault can still influence the split.',
  CA: 'California is community property and home to the country’s highest family-law rates — landmark cases like Marvin v. Marvin also shaped cohabitation rights.',
  CO: 'Colorado uses equitable distribution with strict full-disclosure expectations — a prenup sharply narrows what is left to argue about.',
  CT: 'Connecticut divides property equitably with a strong eye toward the length of the marriage; attorney rates run above the national average.',
  DE: 'Delaware follows equitable distribution — and proximity to the Philadelphia–Wilmington corridor pushes hourly rates up a tier.',
  DC: 'The District of Columbia divides property equitably; like every big-city market, attorney rates sit at the top of the national range.',
  FL: 'Florida is equitable distribution: courts start from a 50/50 split of marital assets, then adjust — a prenup usually keeps the split where you left it.',
  GA: 'Georgia applies equitable-distribution factors; clean records of what stayed “separate” before the wedding are worth their weight.',
  HI: 'Hawaii divides property equitably — with a small attorney pool island-wide, booking early keeps costs in the mid-range.',
  ID: 'Idaho is community property: marital earnings default to an equal split unless a prenup says otherwise.',
  IL: 'Illinois divides marital property equitably under its dissolution statute — statutory factors, not guesswork.',
  IN: 'Indiana requires a “just division” of property — broad discretion for the court is exactly why written terms matter.',
  IA: 'Iowa divides property equitably, weighing how each asset was acquired and each spouse’s contribution.',
  KS: 'Kansas uses equitable division — and because it recognizes common-law marriage, some couples are legally married before they think they are.',
  KY: 'Kentucky divides marital property equitably, weighing contributions and economic misconduct on either side.',
  LA: 'Louisiana’s civil-law roots make it community property with unusually sharp lines between separate and marital assets — notarized marriage contracts carry real weight.',
  ME: 'Maine divides property equitably; rural attorney rates keep prenups near the low end of the national range.',
  MD: 'Maryland splits marital property equitably with separate property preserved — rates track the DC metro orbit.',
  MA: 'Massachusetts applies equitable distribution with heavy weight on the length of the marriage; Boston-area rates sit near the top.',
  MI: 'Michigan divides marital property fairly under statutory factors — but only what counts as “marital” is on the table.',
  MN: 'Minnesota divides property equitably under its dissolution statute — contributions and opportunity costs both count.',
  MS: 'Mississippi’s chancery courts divide marital property equitably, with separate property kept apart when it can be traced.',
  MO: 'Missouri applies equitable-distribution factors — from contribution to the marriage to each spouse’s future circumstances.',
  MT: 'Montana divides property equitably under family-code factors — with hourly rates well below the coastal markets.',
  NE: 'Nebraska divides marital property fairly, considering each spouse’s contribution and the marriage’s circumstances.',
  NV: 'Nevada is community property — and it uniquely lets spouses contract over alimony, making prenup support clauses unusually durable here.',
  NH: 'New Hampshire splits property equitably — and with no general income tax, support planning takes a different shape.',
  NJ: 'New Jersey is equitable distribution with a full statutory factor list; NYC-metro rates put drafting near the premium end.',
  NM: 'New Mexico is community property: earnings and acquisitions during the marriage are presumed shared.',
  NY: 'New York follows equitable-distribution factors under the Domestic Relations Law — and the NYC market makes it the priciest prenup state alongside California.',
  NC: 'North Carolina presumes marital property is divided equally — unless a court finds equal is not equitable. Equal is the starting gun.',
  ND: 'North Dakota divides property equitably under no-fault dissolution rules — modest local rates keep drafting affordable.',
  OH: 'Ohio divides marital property equitably under statutory factors; tracing separate property is where good paperwork wins.',
  OK: 'Oklahoma applies equitable-distribution factors with contribution at the center — rates sit below the national median.',
  OR: 'Oregon divides property fairly and pushes couples toward mediation before a judge decides; rates cluster in the middle.',
  PA: 'Pennsylvania is equitable distribution — and its courts have long enforced prenups that meet disclosure and execution rules.',
  RI: 'Rhode Island divides property equitably; a small coastal market with mid-range drafting costs.',
  SC: 'South Carolina applies equitable distribution — the statute weighs marriage length, contributions, and future needs.',
  SD: 'South Dakota splits marital property equitably under its unified dissolution statute — one of the cheapest states to file in.',
  TN: 'Tennessee works through statutory factors, with longer marriages nudging the court toward an equal split.',
  TX: 'Texas is community property: what you earn together is presumed shared. A prenup is how Texas couples redefine “mine and ours.”',
  UT: 'Utah divides marital property equitably under its marriage statute — and rates stay well below the coasts.',
  VT: 'Vermont applies equitable distribution with explicit credit for each spouse’s contributions, including homemaking.',
  VA: 'Virginia divides property equitably under a statutory factor list; prenups must meet Virginia’s own formalities to hold up.',
  WA: 'Washington is community property — earnings during the marriage are split equally unless an agreement says otherwise.',
  WV: 'West Virginia divides marital property equitably using statutory factors — among the lowest rates in the country.',
  WI: 'Wisconsin is community property under the Marital Property Act — rigid defaults make a prenup the main source of flexibility.',
  WY: 'Wyoming applies equitable distribution in a small, low-rate legal market — simple cases stay simple.',
};

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const STATE_PAGES: StatePage[] = STATES.map((s) => ({
  ...s,
  titleName: s.name === 'District of Columbia' ? 'the District of Columbia' : s.name,
  slug: slugify(s.name),
  regime: COMMUNITY.has(s.abbr) ? 'community' : 'equitable',
  note: NOTES[s.abbr],
}));

export const REGIME_LABEL = {
  community: 'community-property',
  equitable: 'equitable-distribution',
} as const;

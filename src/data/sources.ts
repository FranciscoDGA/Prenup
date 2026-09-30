export type SourceType =
  | 'STATUTE'
  | 'COURT_RULE'
  | 'GOVERNMENT_RESOURCE'
  | 'UNIFORM_LAW'
  | 'BAR_ASSOCIATION'
  | 'LEGAL_REFERENCE'
  | 'OTHER';

export interface SourceRecord {
  id: string;
  title: string;
  publisher: string;
  jurisdiction: string;
  sourceType: SourceType;
  url: string;
  official: boolean;
  tier: 1 | 2 | 3 | 4;
  dateAccessed: string;
  lastVerified: string;
  notes?: string;
}

export const SOURCE_TIERS: Record<number, string> = {
  1: 'Primary / official (legislature, courts, government)',
  2: 'Authoritative legal sources (Uniform Law Commission, recognized bar associations)',
  3: 'Secondary (legal publications, law-firm educational resources) — context only',
  4: 'Discovery only (Reddit, forums, social media, generic blogs) — never authority',
};

export const SOURCES: Record<string, SourceRecord> = {
  'ca-fam-1611': {
    id: 'ca-fam-1611',
    title: 'California Family Code § 1611 — premarital agreement must be in writing and signed by both parties',
    publisher: 'California Legislative Information (official)',
    jurisdiction: 'California',
    sourceType: 'STATUTE',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=1611.',
    official: true,
    tier: 1,
    dateAccessed: '2026-09-30',
    lastVerified: '2026-09-30',
  },
  'ca-fam-1614': {
    id: 'ca-fam-1614',
    title: 'California Family Code § 1614 — post-marriage amendment or revocation only by written agreement signed by the parties',
    publisher: 'California Legislative Information (official)',
    jurisdiction: 'California',
    sourceType: 'STATUTE',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=1614.',
    official: true,
    tier: 1,
    dateAccessed: '2026-09-30',
    lastVerified: '2026-09-30',
  },
  'ca-fam-1615': {
    id: 'ca-fam-1615',
    title: 'California Family Code § 1615 — enforceability: voluntariness, disclosure, unconscionability, counsel and timing requirements',
    publisher: 'California Legislative Information (official)',
    jurisdiction: 'California',
    sourceType: 'STATUTE',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=1615.',
    official: true,
    tier: 1,
    dateAccessed: '2026-09-30',
    lastVerified: '2026-09-30',
    notes: 'Amended by Stats. 2019, Ch. 193 (AB 1380), effective January 1, 2020.',
  },
  'tx-fam-ch4': {
    id: 'tx-fam-ch4',
    title: 'Texas Family Code, Chapter 4 — Premarital and Marital Property Agreements (Uniform Premarital Agreement Act, §§ 4.001–4.003 formalities and content)',
    publisher: 'Texas Constitution and Statutes (official)',
    jurisdiction: 'Texas',
    sourceType: 'STATUTE',
    url: 'https://statutes.capitol.texas.gov/Docs/FA/htm/FA.4.htm',
    official: true,
    tier: 1,
    dateAccessed: '2026-09-30',
    lastVerified: '2026-09-30',
  },
  'ny-drl-236': {
    id: 'ny-drl-236',
    title: 'New York Domestic Relations Law § 236(B)(3) — agreements of the parties (writing, signatures, acknowledgment; maintenance fairness standard)',
    publisher: 'New York State Senate (official)',
    jurisdiction: 'New York',
    sourceType: 'STATUTE',
    url: 'https://www.nysenate.gov/legislation/laws/DOM/236',
    official: true,
    tier: 1,
    dateAccessed: '2026-09-30',
    lastVerified: '2026-09-30',
  },
};

export const getSource = (id: string): SourceRecord | undefined => SOURCES[id];

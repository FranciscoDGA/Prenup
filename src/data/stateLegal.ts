export interface StateSection {
  text: string;
  sourceIds?: string[];
}

export interface StateCounsel {
  status: 'BUILT_INTO_STATUTE' | 'NOT_REQUIRED_BY_STATUTE' | 'VARIES';
  label: string;
  text: string;
  sourceIds?: string[];
}

export interface StateLegalProfile {
  abbr: string;
  status: 'VERIFIED' | 'NEEDS_RESEARCH';
  lastVerified: string | null;
  governingLaw: StateSection;
  enforceability: StateSection;
  disclosure: StateSection;
  counsel: StateCounsel;
  execution: StateSection;
  support: StateSection;
}

/**
 * Claim-to-source profiles. Only states whose claims have been verified against
 * Tier 1 (official) sources appear here. Every other state renders the honest
 * "verification pending" template — never guessed statutory detail.
 * Template reviewed: 2026-09-30.
 */
export const STATE_LEGAL: Record<string, StateLegalProfile> = {
  CA: {
    abbr: 'CA',
    status: 'VERIFIED',
    lastVerified: '2026-09-30',
    governingLaw: {
      text: "California's prenup rules are the Uniform Premarital Agreement Act as adopted in the Family Code — Article 2 of the marital-agreements provisions, covering sections 1610 through 1617. In plain terms: the statute says what a prenup must look like (a writing signed by both of you, § 1611) and exactly what makes one unenforceable (§ 1615).",
      sourceIds: ['ca-fam-1611', 'ca-fam-1615'],
    },
    enforceability: {
      text: "Under Family Code § 1615, a prenup is not enforceable if the party resisting it proves either that the agreement was not executed voluntarily, or that it was unconscionable when executed and — before execution — that party did not receive a fair, reasonable, and full disclosure of the other side's property and financial obligations (or waived disclosure in writing) and did not have adequate knowledge of them. The court decides unconscionability as a matter of law. Section 1615 also spells out what \u201cvoluntary\u201d requires in practice: independent legal counsel (or a separate written waiver after being advised to get one, at least seven calendar days before the final agreement is signed); at least seven calendar days between first presentation of the final agreement and signing (for agreements signed on or after January 1, 2020); a written explanation of the rights being given up for a party without a lawyer; and no duress, fraud, or undue influence.",
      sourceIds: ['ca-fam-1615'],
    },
    disclosure: {
      text: 'California puts disclosure at the center of enforceability: an unconscionable agreement is not enforceable unless the resisting party received a fair, reasonable, and full disclosure of the other side\u2019s finances — or expressly waived disclosure in writing — and had adequate knowledge of them (§ 1615(a)(2)). Practical translation: attach complete, signed schedules of assets, debts, and income, and have both of you initial them.',
      sourceIds: ['ca-fam-1615'],
    },
    counsel: {
      status: 'BUILT_INTO_STATUTE',
      label: 'Built into the statute',
      text: "California builds counsel into the process. Under § 1615(c), an agreement is deemed not voluntarily executed unless the party against enforcement was represented by independent legal counsel at signing — or, after being advised to seek independent counsel (at least seven calendar days before the final agreement is signed), expressly waived representation in a separate writing. A party without a lawyer must also receive a written explanation of the rights and obligations being given up.",
      sourceIds: ['ca-fam-1615'],
    },
    execution: {
      text: "Section 1611 is short: a premarital agreement must be in writing and signed by both parties, and it is enforceable without consideration. Changes after the wedding also have to be in a written agreement signed by the parties (§ 1614). The heavier requirements in California are about process — timing, counsel, and disclosure — not ceremony.",
      sourceIds: ['ca-fam-1611', 'ca-fam-1614'],
    },
    support: {
      text: 'California lets couples address spousal support in a prenup, but every term of the agreement — support terms included — is tested against § 1615’s voluntariness and disclosure standards. Whether a specific support waiver holds up is decided by the court on the facts of the case.',
      sourceIds: ['ca-fam-1615'],
    },
  },
  TX: {
    abbr: 'TX',
    status: 'VERIFIED',
    lastVerified: '2026-09-30',
    governingLaw: {
      text: 'Texas adopted the Uniform Premarital Agreement Act in Chapter 4 of the Texas Family Code. The chapter covers what a prenup must look like (§ 4.002, formalities) and what couples may put in one (§ 4.003, content), along with definitions and the surrounding rules for enforcement.',
      sourceIds: ['tx-fam-ch4'],
    },
    enforceability: {
      text: 'Section 4.002 says it plainly: a premarital agreement must be in writing and signed by both parties, and it is enforceable without consideration. Section 4.003 lists what couples may cover — property rights, how property is handled at separation, divorce, or death, modification or elimination of spousal support, wills and trusts carrying out the agreement, life-insurance death benefits, choice of law, and any other matter that does not violate public policy or a statute imposing a criminal penalty. A prenup cannot adversely affect a child’s right to support (§ 4.003(b)).',
      sourceIds: ['tx-fam-ch4'],
    },
    disclosure: {
      text: "Texas's formalities section (§ 4.002) requires a writing signed by both parties — it does not list disclosure steps as a formality. That makes documenting disclosure in the agreement itself especially important: attach schedules of what each of you owns and owes, even though the statute does not spell that out as a signature requirement.",
      sourceIds: ['tx-fam-ch4'],
    },
    counsel: {
      status: 'NOT_REQUIRED_BY_STATUTE',
      label: 'Not required by statute',
      text: "Section 4.002 requires a writing and two signatures — not lawyers. Independent counsel is not a statutory requirement in Texas, but each of you having your own attorney is still the surest protection if the agreement is ever challenged.",
      sourceIds: ['tx-fam-ch4'],
    },
    execution: {
      text: "Texas's execution rule is the simplest of the three largest states: the agreement must be in writing and signed by both parties (§ 4.002). No ceremony, witness list, or notary step appears in that section's requirements — the requirement is the document and the two signatures.",
      sourceIds: ['tx-fam-ch4'],
    },
    support: {
      text: "Texas § 4.003(a)(4) lets the parties modify or eliminate spousal support in a premarital agreement. What a Texas prenup cannot do is adversely affect a child's right to support (§ 4.003(b)).",
      sourceIds: ['tx-fam-ch4'],
    },
  },
  NY: {
    abbr: 'NY',
    status: 'VERIFIED',
    lastVerified: '2026-09-30',
    governingLaw: {
      text: "New York's rule for premarital agreements is written into Domestic Relations Law § 236(B)(3), and courts read those agreements under New York contract principles. The statute tells you the exact form an agreement must take and how maintenance terms are tested.",
      sourceIds: ['ny-drl-236'],
    },
    enforceability: {
      text: 'Under DRL § 236(B)(3), an agreement made before or during the marriage is valid and enforceable in a matrimonial action if it is in writing, subscribed by the parties, and acknowledged or proven in the manner required to entitle a deed to be recorded. For an agreement made before the marriage, that acknowledgment may be given before any person authorized to solemnize a marriage. Maintenance terms inside the agreement are valid only if they were fair and reasonable at the time the agreement was made and are not unconscionable when final judgment is entered.',
      sourceIds: ['ny-drl-236'],
    },
    disclosure: {
      text: "New York's statute sets formalities and a fairness standard rather than a checklist of disclosure documents. Because the agreement must be fair and reasonable — and maintenance terms can be tested for unconscionability — full written disclosure of assets and debts is still the safest course when drafting.",
      sourceIds: ['ny-drl-236'],
    },
    counsel: {
      status: 'NOT_REQUIRED_BY_STATUTE',
      label: 'Not required by statute',
      text: "New York does not require each party to have a lawyer for a prenup to be valid. The statute's requirements are about form and fairness — writing, signatures, acknowledgment — not representation.",
      sourceIds: ['ny-drl-236'],
    },
    execution: {
      text: "New York's formality is the strictest of the three largest states: the agreement must be in writing, signed by both parties, and acknowledged or proven in the manner required to entitle a deed to be recorded — in practice, a formal acknowledgment, typically before a notary public. For a pre-marriage agreement, the acknowledgment may also be given before a person authorized to solemnize the marriage.",
      sourceIds: ['ny-drl-236'],
    },
    support: {
      text: 'Maintenance terms are valid if they were fair and reasonable when the agreement was made and are not unconscionable when the court enters final judgment (DRL § 236(B)(3)). New York also keeps custody decisions with the court, subject to Domestic Relations Law § 240.',
      sourceIds: ['ny-drl-236'],
    },
  },
};

export const getStateLegal = (abbr: string): StateLegalProfile | undefined =>
  STATE_LEGAL[abbr];

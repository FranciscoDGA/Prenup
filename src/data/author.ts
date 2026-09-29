const photoPath = '/images/francisco.jpg';

export const author = {
  name: 'Francisco Gomes Alves',
  initials: 'FG',
  role: 'Founder & Editor, PrenupAnswers',
  photo: photoPath,
  url: '/authors/francisco-gomes-alves/',
  knowsAbout: [
    'Prenuptial agreements',
    'Marriage and relationships',
    'Personal finance for couples',
    'United States family law',
  ],
  sameAs: [] as string[],
};

export const authorBio =
  'Francisco Gomes Alves writes PrenupAnswers from Brazil. He is a pastor and a first-year law student — not a licensed attorney. He has never practised law, is not a member of any U.S. bar, and has never sold legal services to anyone.';

export const authorBackground = [
  'He works as a pastor at Igreja Apostólica Jeová Nissi in Brazil, where part of his work involves supporting couples and families.',
  'He is in the first year of a law degree. This is background, not qualification: he holds no licence, is admitted to practise in no jurisdiction, and has never worked in a law office.',
];

export const authorNotLawyer = [
  'Not a lawyer. Francisco holds no law licence and is not a member of any U.S. state bar.',
  'Not a law firm. PrenupAnswers employs no attorneys, sells no legal services, and drafts no agreements.',
  'Not a review service. Nobody here reads, vets, or approves your contract before you sign it.',
  'Not a substitute for advice. Nothing on this site is legal advice, and reading it creates no attorney–client relationship.',
];

export const researchMethod = [
  {
    title: 'Statutes first',
    detail:
      'Law claims are traced back to the state statute or court rule they come from, not to a blog or a summary of a blog. Where a state has its own prenup statute, we name it.',
  },
  {
    title: 'Bar association and legal-aid material',
    detail:
      'We read what bar associations, legal-aid organizations, and family-law publications publish for the public, because that is what a reader is most likely to be shown by a lawyer.',
  },
  {
    title: 'Prices are labelled as estimates',
    detail:
      'Cost figures are ranges compiled from published fee surveys, published service pricing, and reported ranges. They are estimates, not quotes, and we say so wherever a number appears.',
  },
  {
    title: 'Dated, and dated honestly',
    detail:
      'Every guide shows the date it was last reviewed. When we have not checked a page recently, the date tells you that too — a stale date is more useful to you than a fresh-looking one.',
  },
  {
    title: 'Errors get corrected in public',
    detail:
      'If a reader reports something factually wrong, we fix it and re-date the page. We do not quietly delete a number we got wrong.',
  },
];

export const authorLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `https://prenupanswers.com${author.url}#person`,
  name: author.name,
  url: `https://prenupanswers.com${author.url}`,
  jobTitle: 'Pastor',
  description: authorBio,
  knowsAbout: author.knowsAbout,
  ...(author.photo ? { image: `https://prenupanswers.com${author.photo}` } : {}),
  ...(author.sameAs.length ? { sameAs: author.sameAs } : {}),
  worksFor: { '@type': 'Organization', name: 'PrenupAnswers' },
};

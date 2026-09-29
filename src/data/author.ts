import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const photoPath = '/images/francisco.jpg';
const photoOnDisk = fileURLToPath(new URL(`../../public${photoPath}`, import.meta.url));

export const author = {
  name: 'Francisco Gomes Alves',
  initials: 'FG',
  role: 'Founder & Editor, PrenupAnswers',
  jobTitle: 'Pastor',
  affiliation: 'Igreja Apostólica Jeová Nissi, Brazil',
  location: 'Brazil',
  photo: existsSync(photoOnDisk) ? photoPath : null,
  knowsAbout: [
    'Prenuptial agreements',
    'Marriage and relationships',
    'Personal finance for couples',
    'United States family law',
  ],
  sameAs: [] as string[],
  url: '/authors/francisco-gomes-alves/',
};

export const authorBio =
  'Francisco is a pastor and a first-year law student in Brazil. He is not a licensed attorney, and nothing on PrenupAnswers is legal advice. He started the site after watching friends pay thousands of dollars for answers that should have been free, plain, and honest.';

export const authorCredentials = [
  {
    label: 'Pastor',
    detail: 'Igreja Apostólica Jeová Nissi, Brazil — pastoral work with couples and families.',
  },
  {
    label: 'Law student',
    detail: 'First-year law degree. Studying family law; not yet licensed or admitted to practice anywhere.',
  },
  {
    label: 'Writer & researcher',
    detail: 'Reads primary sources — state statutes, bar association material, published court decisions — and writes the guides on this site.',
  },
];

export const authorNotLawyer =
  'Francisco is not a licensed attorney and is not authorized to practice law in any U.S. state. PrenupAnswers publishes general educational information only. Nothing here is legal advice, and reading it does not create an attorney–client relationship.';

export const authorLocationNote =
  'Francisco lives and works in Brazil and writes for readers in the United States. Being an outsider to U.S. family law is the point: he cannot sell you a contract or bill you by the hour, so his only job is to help you understand the decision before you talk to a lawyer.';

export const authorLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${'https://prenupanswers.com'}${author.url}#person`,
  name: author.name,
  url: `https://prenupanswers.com${author.url}`,
  jobTitle: author.jobTitle,
  description: authorBio,
  knowsAbout: author.knowsAbout,
  ...(author.photo ? { image: `https://prenupanswers.com${author.photo}` } : {}),
  ...(author.sameAs.length ? { sameAs: author.sameAs } : {}),
  worksFor: { '@type': 'Organization', name: 'PrenupAnswers' },
};

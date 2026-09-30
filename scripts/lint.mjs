import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve('dist');
if (!existsSync(dist)) {
  console.error('lint: dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const MOJIBAKE = /â€|Ã©|Ã£|Ã§|â€™|â€œ|â€\u009d|Â»/;

const BANNED = [
  'guaranteed',
  'legally valid without',
  'no lawyer needed',
  'lawyer required',
  'airtight',
  'water-tight',
  'waterproof prenup',
  'cannot be challenged',
  "can't be challenged",
  'automatically enforceable',
  'automatically invalidates',
  'second-leading',
  'second most common reason prenups',
  '29% regret',
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = walk(dist);
const errors = [];

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(dist.length + 1);

  if (MOJIBAKE.test(html)) errors.push(`${rel}: mojibake detected`);

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\balt=/.test(img)) errors.push(`${rel}: <img> without alt — ${img.slice(0, 80)}`);
  }

  for (const phrase of BANNED) {
    const re = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    if (re.test(html)) errors.push(`${rel}: banned phrase "${phrase}"`);
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1];
    let target = join(dist, href.slice(1));
    if (href.endsWith('/') || existsSync(target) && statSync(target).isDirectory()) {
      target = join(target, 'index.html');
    }
    if (!existsSync(target)) errors.push(`${rel}: broken internal link ${href}`);
  }
}

if (errors.length) {
  console.error(`lint: ${errors.length} problem(s) in ${files.length} pages`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log(`lint: OK (${files.length} pages — mojibake, banned claims, img alt, internal links)`);

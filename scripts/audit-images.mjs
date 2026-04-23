import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = '/vercel/share/v0-project/persoflex-gmbh-portal Kopie 4/public/bilder';
const THRESHOLD_KB = 100; // Ahrefs flags >100 KB as "too large" by default

const files = await readdir(DIR);
const results = [];

for (const file of files) {
  const path = join(DIR, file);
  const s = await stat(path);
  if (s.isFile()) {
    results.push({ file, sizeKB: Math.round(s.size / 1024) });
  }
}

results.sort((a, b) => b.sizeKB - a.sizeKB);
console.log('--- Image sizes (desc) ---');
for (const r of results) {
  const flag = r.sizeKB > THRESHOLD_KB ? ' ⚠ OVER LIMIT' : '';
  console.log(`${String(r.sizeKB).padStart(5)} KB  ${r.file}${flag}`);
}
const over = results.filter((r) => r.sizeKB > THRESHOLD_KB);
console.log(`\n${over.length} of ${results.length} files exceed ${THRESHOLD_KB} KB`);
console.log('Total size:', Math.round(results.reduce((a, b) => a + b.sizeKB, 0) / 1024), 'MB');

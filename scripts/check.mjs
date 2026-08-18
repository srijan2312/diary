import { readFileSync, existsSync } from 'node:fs';
for (const file of ['index.html','src/main.js','src/styles.css','supabase/migrations/202608180001_private_pages.sql']) {
  if (!existsSync(file)) throw new Error(`${file} is missing`);
  readFileSync(file, 'utf8');
}
console.log('Private Pages static application files verified.');

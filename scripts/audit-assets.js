#!/usr/bin/env node
/*
 * Asset audit: cross-references files on disk under assets/ and audio/ with
 * string references in js/, css/, *.html and assets/manifest.json.
 *
 * Output:
 *   - Unused files (on disk but never referenced)
 *   - Broken references (referenced but missing on disk)
 *   - Top heaviest assets
 *   - Per-folder totals
 *
 * Run from repo root:  node scripts/audit-assets.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSET_DIRS = ['assets', 'audio'];
const REF_DIRS   = ['js', 'css', 'docs'];
const REF_FILE_EXTS = new Set(['.js', '.css', '.html', '.json', '.md']);
const ASSET_EXTS   = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif',
                              '.mp3', '.ogg', '.wav', '.m4a',
                              '.ttf', '.otf', '.woff', '.woff2']);

function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function listAssetFiles() {
  const files = [];
  for (const d of ASSET_DIRS) walk(path.join(ROOT, d), files);
  return files
    .filter(f => ASSET_EXTS.has(path.extname(f).toLowerCase()))
    .map(f => ({
      abs: f,
      rel: path.relative(ROOT, f).replace(/\\/g, '/'),
      size: fs.statSync(f).size,
    }));
}

function listRefSources() {
  const files = [];
  walk(path.join(ROOT, 'js'), files);
  walk(path.join(ROOT, 'css'), files);
  walk(path.join(ROOT, 'docs'), files);
  for (const name of fs.readdirSync(ROOT)) {
    const ext = path.extname(name).toLowerCase();
    if (REF_FILE_EXTS.has(ext)) files.push(path.join(ROOT, name));
  }
  files.push(path.join(ROOT, 'assets/manifest.json'));
  return files.filter(f => REF_FILE_EXTS.has(path.extname(f).toLowerCase()));
}

function bytesPretty(n) {
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
  return (n / 1024 / 1024).toFixed(1) + ' MB';
}

function main() {
  const assets = listAssetFiles();
  const refs   = listRefSources();

  const haystack = refs.map(f => fs.readFileSync(f, 'utf8')).join('\n');

  const unused = [];
  const used   = [];
  for (const a of assets) {
    const basename = path.basename(a.rel);
    // We match by basename OR by partial path. Basename alone is risky
    // (e.g. two files named "neutral.png"), but the project keeps unique
    // names per character; partial-path match catches the rest.
    const escapedBase = basename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedFolder = a.rel.split('/').slice(-2).join('/')
                              .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escapedBase + '|' + escapedFolder);
    if (re.test(haystack)) used.push(a);
    else unused.push(a);
  }

  // Broken refs: any "assets/..." or "audio/..." string in code that
  // doesn't resolve to a real file.
  const refRegex = /(assets|audio)\/[A-Za-z0-9_./%\- ]+\.(png|jpg|jpeg|webp|svg|gif|mp3|ogg|wav|m4a|ttf|otf|woff2?)/gi;
  const referenced = new Set();
  for (const f of refs) {
    const body = fs.readFileSync(f, 'utf8');
    let m;
    while ((m = refRegex.exec(body)) !== null) {
      referenced.add(m[0].replace(/\\/g, '/'));
    }
  }
  const broken = [];
  for (const r of referenced) {
    if (!fs.existsSync(path.join(ROOT, r))) broken.push(r);
  }

  // Folder totals.
  const folderTotals = {};
  for (const a of assets) {
    const folder = a.rel.split('/').slice(0, 3).join('/');
    folderTotals[folder] = (folderTotals[folder] || 0) + a.size;
  }

  const totalSize = assets.reduce((s, a) => s + a.size, 0);
  const unusedSize = unused.reduce((s, a) => s + a.size, 0);

  console.log('═══ ASSET AUDIT ═══');
  console.log('Total asset files: ' + assets.length + '  (' + bytesPretty(totalSize) + ')');
  console.log('Unused files:      ' + unused.length + '  (' + bytesPretty(unusedSize) + ')');
  console.log('Broken references: ' + broken.length);
  console.log('');

  console.log('── Top 15 heaviest assets ──');
  [...assets].sort((a, b) => b.size - a.size).slice(0, 15).forEach(a => {
    const tag = unused.includes(a) ? ' [UNUSED?]' : '';
    console.log('  ' + bytesPretty(a.size).padStart(8) + '  ' + a.rel + tag);
  });
  console.log('');

  console.log('── Folder totals ──');
  Object.entries(folderTotals)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => console.log('  ' + bytesPretty(v).padStart(8) + '  ' + k));
  console.log('');

  if (broken.length) {
    console.log('── Broken references (referenced in code but missing on disk) ──');
    broken.forEach(r => console.log('  ' + r));
    console.log('');
  }

  console.log('── Unused files (' + unused.length + ') ──');
  if (unused.length === 0) console.log('  (none)');
  else {
    [...unused].sort((a, b) => b.size - a.size).forEach(a => {
      console.log('  ' + bytesPretty(a.size).padStart(8) + '  ' + a.rel);
    });
  }

  console.log('');
  console.log('PNG/WebP savings estimate:');
  const pngs = assets.filter(a => path.extname(a.rel).toLowerCase() === '.png');
  const pngTotal = pngs.reduce((s, a) => s + a.size, 0);
  console.log('  PNG total: ' + bytesPretty(pngTotal) +
              '  (assumed ~65% savings if converted to lossless WebP, ~85% if lossy q80 = ~' +
              bytesPretty(pngTotal * 0.15) + ')');
}

main();

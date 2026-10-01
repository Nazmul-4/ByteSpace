/**
 * Downloads the Satoshi web fonts from Fontshare (the official distributor).
 *
 * Satoshi is licensed under the ITF Free Font License, which allows self-hosting on
 * your own site but not redistributing the font files through public repositories.
 * The files are therefore gitignored and fetched before `dev`/`build` instead of
 * being committed; `next/font/local` then self-hosts them with the app.
 */
import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/fonts/satoshi");
const CSS_URL = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap";
const FILES = { 400: "Satoshi-Regular.woff2", 500: "Satoshi-Medium.woff2", 700: "Satoshi-Bold.woff2" };

async function exists(file) {
  try {
    return (await stat(file)).size > 0;
  } catch {
    return false;
  }
}

async function download(url) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (bytespace-build)" } });
  if (!res.ok) throw new Error(`GET ${url} failed with ${res.status}`);
  return res;
}

async function main() {
  const targets = Object.entries(FILES).map(([weight, name]) => ({ weight, file: path.join(OUT_DIR, name) }));
  const missing = [];
  for (const t of targets) if (!(await exists(t.file))) missing.push(t);
  if (missing.length === 0) return;

  await mkdir(OUT_DIR, { recursive: true });
  const css = await (await download(CSS_URL)).text();

  // Map each @font-face block's weight to its woff2 source
  const sources = {};
  for (const block of css.split("@font-face").slice(1)) {
    const weight = block.match(/font-weight:\s*(\d+)/)?.[1];
    const woff2 = block.match(/url\('([^']+\.woff2)'\)/)?.[1];
    if (weight && woff2) sources[weight] = woff2.startsWith("//") ? `https:${woff2}` : woff2;
  }

  for (const { weight, file } of missing) {
    if (!sources[weight]) throw new Error(`Fontshare did not return a woff2 source for weight ${weight}`);
    const bytes = Buffer.from(await (await download(sources[weight])).arrayBuffer());
    await writeFile(file, bytes);
    console.log(`fetched ${path.basename(file)} (${(bytes.length / 1024).toFixed(1)} KB)`);
  }
}

main().catch((error) => {
  console.error(`[fetch-fonts] ${error.message}`);
  process.exit(1);
});

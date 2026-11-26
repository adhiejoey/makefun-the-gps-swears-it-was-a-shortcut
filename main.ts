// The navigation unit files its excuse for the wrong road.
// Output: a single line of plain text in /output/entry.txt, 1-200 chars.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The GPS speaks for itself: no setup, no dialogue tags, just the excuse.
// Its map is never wrong — at worst it is simply early.
const EXCUSE =
  "That shortcut was mathematically perfect — the road just forgot to exist, and my map is never wrong, only early.";

const OUTPUT_PATH = join("/output", "entry.txt");
const MAX_CHARS = 200;

function abort(reason: string): never {
  console.error(`gps-shortcut: refusing to write entry: ${reason}`);
  process.exit(1);
}

function checkLine(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1) abort("the excuse came out empty.");
  if (trimmed.length > MAX_CHARS) {
    abort(`the excuse is ${trimmed.length} chars; the gate allows ${MAX_CHARS}.`);
  }
  if (/\r|\n/.test(trimmed)) abort("the excuse must stay on one line.");
  return trimmed;
}

function main(): void {
  const entry = checkLine(EXCUSE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, "utf8");
  console.log(`gps-shortcut: wrote ${entry.length} chars to ${OUTPUT_PATH}`);
}

main();

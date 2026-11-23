// Make the Judge Smile — make.fun bounty entry
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// One line, at most 200 characters, about a small good thing that
// happened today. The judge weighs, in order: on-subject, warmth,
// surprise, one concrete detail, fresh wording.
//
// The line below is built around a small kindness with a turn nobody
// on the bus saw coming: a driver who refuses a fare, and the old man
// who answers it with the only thing in his pocket — a boiled sweet —
// while the whole bus applauds. The concrete anchors are the 7 a.m.
// hour, the coins counted one by one, and the sweet pressed into a palm.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single line about a small good thing today.
const ENTRY =
  "At 7 a.m. the bus driver waited while an old man counted his coins " +
  "one by one, then waved the fare away \u2014 so the old man pressed a " +
  "boiled sweet into his palm, and the whole bus clapped.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

// Write the entry. The output directory is created when missing;
// it is never removed, so the grader's mounted /output stays intact.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length}-character entry to ${join(outDir, "entry.txt")}`);

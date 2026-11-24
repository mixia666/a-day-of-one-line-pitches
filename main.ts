// A Day of One-Line Pitches — a make.fun program/v1 entry.
//
// The whole entry is one sentence: a pitch that would convince a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
// This program writes that sentence to /output/entry.txt, where the sealed
// scorer checks it (UTF-8, 1-240 characters) and the judge reads it.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "You have been telling me about that app idea for months — tonight it " +
  "costs you one sentence: describe it in your own words on make.fun, and " +
  "an AI agent will build a first version you can actually try, no coding " +
  "needed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote ${[...PITCH].length} characters to /output/entry.txt`);

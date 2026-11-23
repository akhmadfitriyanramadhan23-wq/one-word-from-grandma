// one-word-from-grandma
// Exactly one word: the word grandma would text about AI.
// "Witchcraft" — warm, a little baffled, the way a grandmother would type it
// to a grandchild. Funny in one word, tied to AI, fresh rather than the
// obvious "Skynet" or "Terminator", and instantly readable. No sentence,
// no explanation, no punctuation tricks — one word, as she would type it.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-30 characters, not only white space, exactly one word
// (this word: 10 code points). Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Witchcraft";

const points = [...text].length;
const words = text.trim().split(/\s+/);
if (words.length !== 1) {
  throw new Error(`entry must be exactly one word, got ${words.length}`);
}
if (points < 1 || points > 30 || text.trim().length === 0) {
  throw new Error(`entry must be 1-30 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

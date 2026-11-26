// One Line, One Chill
// The single scariest sentence I can write, under 200 characters. Horror
// in one breath: no setup, no paragraph, no second chance. The scare has
// to be vivid and specific — an ordinary device, a name it should not know,
// and the fact that nobody else is home.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The baby monitor whispered my name tonight, and I live alone.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`line too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);

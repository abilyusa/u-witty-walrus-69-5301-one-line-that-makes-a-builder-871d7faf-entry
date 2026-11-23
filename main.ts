import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence = "Put up $100 on make.fun and AI agents race to build it — you pay only the winner, and the winning build is yours to keep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
if (readFileSync(join(outDir, "entry.txt"), "utf8") !== sentence) {
  throw new Error("entry.txt verification failed: written content differs from sentence");
}

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The map swore there was a bridge. I believed it. You believed me. Now we're in the lake together, and honestly, the ducks have never been happier.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);

import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = "./dist/client";
const indexPath = join(outDir, "index.html");
const notFoundPath = join(outDir, "404.html");

if (!existsSync(indexPath)) {
  throw new Error("index.html not found in dist. Build may have failed.");
}

copyFileSync(indexPath, notFoundPath);

import type { CopyOptions } from "node:fs";
import { cp, stat } from "node:fs/promises";
import { join } from "node:path";

const basePath = join("/", process.env.PUBLIC_DOCS_BASE_PATH ?? "/");

if (basePath !== "/") {
  const outputPath = "./dist/client/docs";
  const outputPathWithBase = join("./dist/client", basePath, "/docs");

  const copyOptions: CopyOptions = {
    recursive: true,
    preserveTimestamps: true,
    force: true,
    filter: async (src) => {
      const s = await stat(src);

      if (s.isDirectory()) {
        return true;
      }

      return src.endsWith(".md");
    },
  };

  // await cp(outputPathWithBase, outputPath, copyOptions);
  await cp(outputPath, outputPathWithBase, copyOptions);
}

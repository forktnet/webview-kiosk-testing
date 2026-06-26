import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import urlJoin from "url-join";
import { defineConfig } from "vite";

const basePath = urlJoin("/", process.env.PUBLIC_DOCS_BASE_PATH ?? "/");

export default defineConfig({
  server: {
    port: 3000,
  },
  envPrefix: "PUBLIC_",
  base: basePath,
  plugins: [
    mdx(),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          outputPath: "index.html",
          enabled: true,
          crawlLinks: true,
        },
      },
      pages: [
        {
          path: "/docs",
        },
        {
          path: "/privacy",
        },
        {
          path: "/terms",
        },
        {
          path: "/api/search",
        },
        {
          path: "llms-full.txt",
        },
        {
          path: "llms.txt",
        },
      ],
    }),
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: "tslib/tslib.es6.js",
    },
  },
});

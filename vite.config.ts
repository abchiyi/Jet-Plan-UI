/// <reference types="vitest" />

import { fileURLToPath, URL } from "node:url";

import vitePluginInspect from "vite-plugin-inspect";
import autoprefixer from "autoprefixer";
import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";
import { defineConfig } from "vite";
import { resolve } from "path";
import mdReTag from "./packages/vite-plugin-md-re-tag";
import setCodeBox from "./packages/vite-plugin-md-set-code-box";

function _resolve(path: string) {
  return resolve(__dirname, path);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    mdReTag(),
    markdown(),
    setCodeBox(),
    vitePluginInspect(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      views: _resolve("./src/view"),
      packages: _resolve("./packages"),
      src: _resolve("./src"),
      public: _resolve("./public"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            "> 1%",
          ],
          grid: true,
        }),
      ],
    },
  },
  build: {
    target: "esnext",
    outDir: "docs",
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./setupEnv.ts"],
  },
});

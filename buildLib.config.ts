// import baseConfig from "./base.config";
import baseConfig from "./vite.config";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "./packages/jet-plan-ui/index.ts"),
      fileName: format => `jet-plan-ui.${format}.js`,
      formats: ["es", "cjs", "umd"],
      name: "jetPlanUI",
    },
    sourcemap: true,
    rollupOptions: {
      external: ["vue", "highlight.js", "@highlightjs/vue-plugin"],
      output: {
        globals: {
          vue: "Vue",
          highlightJs: "highlight.js",
          highlightjsVuePlugin: "@highlightjs/vue-plugin",
        },
      },
    },
  },
  plugins: [vue(), dts()],
});

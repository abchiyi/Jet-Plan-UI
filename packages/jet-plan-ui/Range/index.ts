import type { App, Plugin } from "vue";
import Range from "./src/index.vue";

export const RangePlugin: Plugin = {
  install(app: App) {
    app.component("j-range", Range);
  },
};

export { Range };

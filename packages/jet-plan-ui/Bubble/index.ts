import type { App, Plugin } from "vue";
import Bubble from "./src/index.vue";
export * from "./src/index.d";

export const BubblePlugin: Plugin = {
  install(app: App) {
    app.component("j-bubble", Bubble);
  },
};

export { Bubble };

import type { App, Plugin } from "vue";
import ActionFeedback from "./src/index.vue";

export const ActionFeedbackPlugin: Plugin = {
  install(app: App) {
    app.component("j-action-feedback", ActionFeedback);
  },
};

export { ActionFeedback };

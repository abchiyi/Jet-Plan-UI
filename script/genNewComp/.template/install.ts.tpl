/* eslint-disable */

import type { App, Plugin } from "vue";

{{ importPlugins }}

const UiPlugin: Plugin = {
  install(app: App) {
      {{ installPlugins }}
  },
};

export { UiPlugin };
export * from "./theme";
export * from "./tool";
{{ exportPlugins }}

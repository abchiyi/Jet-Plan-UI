import type { App, Plugin } from "vue";

import AlertController from "./src/AlertController";
import Alert from "./src/JAlert.vue";
export * from "./src/Alert.d";

export const AlertPlugin: Plugin = {
  install(app: App) {
    app.component("j-alert", Alert);
  },
};

export { Alert, AlertController };

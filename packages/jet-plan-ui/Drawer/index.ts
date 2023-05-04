import type { App, Plugin } from "vue";
import Drawer from "./src/JDrawer.vue";

export const DrawerPlugin: Plugin = {
  install(app: App) {
    app.component("j-drawer", Drawer);
  },
};

export { Drawer };

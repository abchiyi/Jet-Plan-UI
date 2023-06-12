import type { App, Plugin } from "vue";
import Avatar from "./src/index.vue";

export const AvatarPlugin: Plugin = {
  install(app: App) {
    app.component("j-avatar", Avatar);
  },
};

export {
  Avatar,
};

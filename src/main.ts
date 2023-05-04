import JetPlanUIDocApp from "./JetPlanUIDoc.app.vue"; // App
import components from "./components"; // 全局注册组件
import { createApp } from "vue";

import "./assets"; // 静态资源
import "./theme";

import router from "./router";

// Pinia
import { createPinia } from "pinia";
// JET PLAN UI
import { UiPlugin } from "jet-plan-ui";

// Go
createApp(JetPlanUIDocApp)
  .use(router)
  .use(UiPlugin)
  .use(components)
  .use(createPinia())
  .mount("#app");

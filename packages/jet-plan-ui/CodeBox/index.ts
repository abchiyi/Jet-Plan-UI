import type { App, Plugin } from 'vue';
import CodeBox from './src/index.vue';

export const CodeBoxPlugin: Plugin = {
  install(app: App) {
    app.component('j-code-box', CodeBox);
  },
};

export {
  CodeBox,
};

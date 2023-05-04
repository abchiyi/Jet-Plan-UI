import type { App, Plugin } from 'vue';
import Checkbox from './src/index.vue';

export const CheckboxPlugin: Plugin = {
  install(app: App) {
    app.component('j-checkbox', Checkbox);
  },
};

export {
  Checkbox,
};

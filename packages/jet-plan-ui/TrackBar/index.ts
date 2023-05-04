import type { App, Plugin } from 'vue';
import TrackBar from './src/index.vue';

export const TrackBarPlugin: Plugin = {
  install(app: App) {
    app.component('j-track-bar', TrackBar);
  },
};

export {
  TrackBar,
};

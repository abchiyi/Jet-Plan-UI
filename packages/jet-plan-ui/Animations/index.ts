import type { App, Plugin } from "vue";
import {
  TransitionFade,
  TransitionScale,
  TransitionFolded,
  TransitionSlider,
} from "./src";

export const AnimationsPlugin: Plugin = {
  install(app: App) {
    app.component(TransitionFade.name, TransitionFade);
    app.component(TransitionScale.name, TransitionScale);
    app.component(TransitionFolded.name, TransitionFolded);
    app.component(TransitionSlider.name, TransitionSlider);
  },
};

import "./src/main.css";
export * from "./src";

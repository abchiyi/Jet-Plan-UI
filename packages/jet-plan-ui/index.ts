/* eslint-disable */

import type { App, Plugin } from "vue";

import { ActionFeedbackPlugin } from './ActionFeedback';
import { GridPlugin } from './Grid';
import { AnimationsPlugin } from './Animations';
import { CodeBoxPlugin } from './CodeBox';
import { ButtonPlugin } from './Button';
import { TrackBarPlugin } from './TrackBar';
import { SwitchPlugin } from './Switch';
import { RadioPlugin } from './Radio';
import { CheckboxPlugin } from './Checkbox';
import { RangePlugin } from './Range';
import { DrawerPlugin } from './Drawer';
import { AlertPlugin } from './Alert';
import { BubblePlugin } from './Bubble';

const UiPlugin: Plugin = {
  install(app: App) {
      ActionFeedbackPlugin.install?.(app);
    GridPlugin.install?.(app);
    AnimationsPlugin.install?.(app);
    CodeBoxPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    TrackBarPlugin.install?.(app);
    SwitchPlugin.install?.(app);
    RadioPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
    RangePlugin.install?.(app);
    DrawerPlugin.install?.(app);
    AlertPlugin.install?.(app);
    BubblePlugin.install?.(app);
  },
};

export { UiPlugin };
export * from "./theme";
export * from "./tool";
export * from './ActionFeedback'
export * from './Grid'
export * from './Animations'
export * from './CodeBox'
export * from './Button'
export * from './TrackBar'
export * from './Switch'
export * from './Radio'
export * from './Checkbox'
export * from './Range'
export * from './Drawer'
export * from './Alert'
export * from './Bubble'

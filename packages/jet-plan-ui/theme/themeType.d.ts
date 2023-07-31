interface ColorConfigInfo {
  primary: ThemeUnit & {
    disabled: string;
  };
  success: ThemeUnit;
  warning: ThemeUnit;
  error: ThemeUnit;
  info: ThemeUnit;
}

interface ColorConfigText {
  disabled: string;
  default: string;
  light: string;
  dark: string;
  hint: string;
}

export declare interface baseTheme {
  [key: string]: string | ThemeUnit | Function;
  name: string;
  infoColors: ColorConfigInfo;
  text: ColorConfigText;
  background: ThemeUnit;
  frostedGlass: string;
  border: ThemeUnit;
  mask: ThemeUnit;
  shadow: string;
  AUTO?: { (): baseTheme };
}

export declare interface ThemeUnit {
  [key: string]: ThemeUnit | string;
  default?: string;
  light?: string;
  dark?: string;
}

export declare interface ThemePack {
  install: installTheme;
}

import { reactiveThemeSystem } from "../theme";
export declare interface installTheme {
  (V: reactiveThemeSystem<baseTheme>): void;
}

export declare type Theme<T extends baseTheme> = T;

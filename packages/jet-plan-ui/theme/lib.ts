import type { ThemeUnit, Theme, baseTheme } from "./themeType.d";
import { changeCaseKebab, objectDeepCopy } from "../tool";
import { matchColors } from "./materialColors";

// 主题应用元素
export function getThemeEl(id: string) {
  let styleEl = document.getElementById(id);
  if (styleEl) return styleEl; //成功获取到元素则返回
  // 未获取到元素则将其创建&返回
  styleEl = document.createElement("style");
  styleEl.id = id;
  document.head.appendChild(styleEl);
  return styleEl;
}

export function themeToCssCode<T extends baseTheme>(theme: T): string {
  type ThemeItem = Theme<T> | ThemeUnit | Function;

  function toCssProperty(propertyName: string | string[], value: String) {
    if (propertyName instanceof Array) {
      const newPropertyName = propertyName
        .map(string => {
          return changeCaseKebab(string);
        })
        .join("-");

      return `--${newPropertyName}:${value}`;
    }
    return `--${changeCaseKebab(propertyName)}:${value}`;
  }

  function toCssValueArray(theme: ThemeItem, parentKey: string[] = []) {
    let temp: String[] = [];
    Object.entries(theme).forEach(themeItem => {
      const [key, value] = themeItem;
      if (["AUTO", "name"].indexOf(key) !== -1) return; // 跳过预占属性

      if (value instanceof Object) {
        // 当值为对象时继续向内部深入，并记录父级 key
        temp = temp.concat(toCssValueArray(value, parentKey.concat([key])));
      } else {
        const keyArray = key == "default" ? parentKey : parentKey.concat([key]);
        temp.push(toCssProperty(keyArray, value));
      }
    });

    return temp;
  }

  const localTheme = objectDeepCopy(theme);
  const themeDark = theme.AUTO?.();

  if (themeDark) {
    const light = themeToCssCode(localTheme);
    const dark = themeToCssCode(themeDark);
    return `${light}\n@media (prefers-color-scheme: dark) {${dark}}`;
  }
  return `:root{${toCssValueArray(convertColorEncode(theme)).join(";")}}`;
}

export function injectCssCode(elId: string, cssCode: string) {
  getThemeEl(elId).innerHTML = cssCode;
}

/**
 * 定义主题辅助函数，用于更好的提示支持
 * @param themeOptions: Obj
 * @returns Theme
 */
export function defineTheme<T extends baseTheme>(themeOptions: T): Theme<T> {
  return themeOptions;
}

/** 将对对象中储存的 'materialColors' 色彩编码转换为常规色彩编码 */
export function convertColorEncode<T extends baseTheme>(theme: T): Theme<T> {
  const TempTheme: { [key: string]: any } = {};
  Object.entries(theme).forEach(themeItem => {
    const [key, value] = themeItem;
    if (typeof value == "string") TempTheme[key] = matchColors(value);
    if (typeof value == "object") {
      TempTheme[key] = convertColorEncode(value as baseTheme);
    }
  });

  return TempTheme as T;
}

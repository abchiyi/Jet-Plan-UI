import type { Theme, ThemePack, installTheme, baseTheme } from "./themeType";
import { computed, reactive, ref, type ComputedRef, type Ref } from "vue";
import { getValue } from "../tool";
import {
  convertColorEncode,
  themeToCssCode,
  injectCssCode,
  getThemeEl,
} from "./lib";

/** dark mode 查询 */
function queryDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

/** DarkMode 开关 */
export const DarkMode: Ref<boolean> = ref(queryDarkMode().matches);

// 监听主题变化
queryDarkMode().addEventListener("change", event => {
  DarkMode.value = event.matches;
});

interface THEME_DATA {
  Themes: { [key: string]: Theme<baseTheme> };
  ThemeName: string;
  Theme: baseTheme;
  ElID: string;
}

// 储存主题信息
export const JET_THEME = reactive({
  $_data: undefined as THEME_DATA | undefined,
  get data() {
    if (this.$_data) {
      return this.$_data;
    } else {
      throw Error("主题未初始化！！！");
    }
  },

  get Theme() {
    return computed(() => {
      const theme = (() => {
        if (DarkMode.value && this.data.Theme.AUTO) {
          return this.data.Theme.AUTO();
        }
        return this.data.Theme;
      })();

      return convertColorEncode(theme);
    });
  },
});

// 响应式主题系统
export class reactiveThemeSystem<T extends baseTheme> {
  constructor(baseTheme: T) {
    this.setTheme(baseTheme);
  }

  install(theme: ThemePack | installTheme) {
    if (theme instanceof Function) {
      theme(this);
    } else {
      theme.install(this);
    }
  }

  addTheme<V extends Theme<T>>(theme: V) {
    JET_THEME.data.Themes[theme.name] = theme;
    JET_THEME.data.ThemeName = theme.name;
  }

  setTheme<V extends Theme<T>>(theme: string | V) {
    if (typeof theme === "string") {
      const obj = getValue(JET_THEME.data.Themes, theme);
      if (!obj) throw Error(`$(JetUITheme) Not found theme :${theme}`);
      injectCssCode(JET_THEME.data.ElID, themeToCssCode(obj));
      JET_THEME.data.ThemeName = theme;
      JET_THEME.data.Theme = obj;
    } else {
      this.addTheme(theme);
      this.setTheme(theme.name);
    }
  }

  getTheme(): ComputedRef<T> {
    return computed(() => JET_THEME.Theme as T);
  }
}

export function newReactiveThemeSystem<T extends baseTheme>(
  styleId: string,
  defaultTheme: Theme<T>
) {
  // 初始化主题储存
  JET_THEME.$_data = {
    ThemeName: defaultTheme.name,
    Theme: defaultTheme as T,
    ElID: styleId,
    Themes: (() => {
      const temp = {} as { [key: string]: Theme<baseTheme> };
      temp[defaultTheme.name] = defaultTheme;
      return temp;
    })(),
  };

  getThemeEl(styleId); // 创建 style 节点

  return new reactiveThemeSystem(defaultTheme);
}

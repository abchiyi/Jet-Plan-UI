import themePack, { jetLight, jetDark, jetAuto } from "jet-plan-ui-theme";
import { beforeEach, describe, expect, test } from "vitest";
import {
  DarkMode,
  JET_THEME,
  getThemeEl,
  defineTheme,
  injectCssCode,
  themeToCssCode,
  convertColorEncode,
  newReactiveThemeSystem,
  type baseTheme,
} from "../../theme";

const styleElId = "test-style-node";
const RTS = newReactiveThemeSystem(styleElId, jetLight);

describe("Test Theme", () => {
  test("Function:getThemeEl:用于创建&查找主题注入节点", () => {
    const id = "test";
    expect(document.getElementById(id) instanceof HTMLElement).toBeFalsy();
    getThemeEl(id);
    expect(document.getElementById(id) instanceof HTMLElement).toBeTruthy();
    expect(document.getElementById(id)?.tagName).toBe("STYLE");
  });

  test("Function:themeToCssCode:用于转换主题配置文件到css代码", () => {
    expect(themeToCssCode(jetLight)).toMatchSnapshot();
  });

  test("Function:themeToCssCode:支持转换自动暗黑主题到css代码", () => {
    const cssString = themeToCssCode(jetAuto);
    expect(cssString).toContain("@media (prefers-color-scheme: dark");
  });

  test("Function:injectCssCode:用于注入 css code", () => {
    const cssCode = themeToCssCode(jetLight);
    injectCssCode(styleElId, cssCode);
    expect(document.getElementById(styleElId)?.innerHTML).toBe(cssCode);
  });

  test("Function:convertColorEncode:'materialColors' 色彩编码转换", () => {
    const rawTheme = {
      name: "rawTheme",
      color: "red",
      color2: {
        default: "pink",
        light: "ffffff",
      },
    } as unknown;

    const theme = {
      name: "rawTheme",
      color: "#F44336",
      color2: {
        default: "#E91E63",
        light: "ffffff",
      },
    };

    expect(convertColorEncode(rawTheme as baseTheme)).toEqual(theme);
  });
});

describe("Test ReactiveThemeSystem", () => {
  test("Function:newReactiveThemeSystem", async () => {
    expect(getThemeEl(JET_THEME.data.ThemeName)).toBeTruthy();
  });

  test(".install", () => {
    RTS.install(themePack);

    const allThemeName = Object.keys(JET_THEME.data.Themes);
    expect(allThemeName).contain(jetLight.name);
    expect(allThemeName).contain(jetDark.name);
    expect(allThemeName).contain(jetAuto.name);
  });

  test(".addTheme", () => {
    RTS.addTheme(jetLight);
    RTS.addTheme(jetDark);
    RTS.addTheme(jetAuto);

    const allThemeName = Object.keys(JET_THEME.data.Themes);
    expect(allThemeName).contain(jetLight.name);
    expect(allThemeName).contain(jetDark.name);
    expect(allThemeName).contain(jetAuto.name);
  });

  test(".setTheme", () => {
    RTS.install(themePack);
    RTS.setTheme(jetLight.name);

    const elInnerHTML = getThemeEl(styleElId).innerHTML;
    const cssCode = themeToCssCode(JET_THEME.data.Theme);
    expect(elInnerHTML).toBe(cssCode);
  });

  test(".setTheme:支持使用主题对象设置主题", () => {
    RTS.install(themePack);
    RTS.setTheme(jetLight);

    const elInnerHTML = getThemeEl(styleElId).innerHTML;
    const cssCode = themeToCssCode(JET_THEME.data.Theme);
    expect(elInnerHTML).toBe(cssCode);
  });

  test("Property:themeName:此属性储存当前应用主题的名称", () => {
    expect(JET_THEME.data.ThemeName).toBe("JetLight");
    RTS.addTheme(jetLight);
    RTS.addTheme(jetAuto);
    expect(JET_THEME.data.ThemeName).toBe("JetAuto");
    RTS.setTheme("JetLight");
    expect(JET_THEME.data.ThemeName).toBe("JetLight");
    RTS.setTheme(jetDark);
    expect(JET_THEME.data.ThemeName).toBe("JetDark");
  });

  test(".getTheme:测试暗黑模式自动切换获取到的主题", async () => {
    RTS.setTheme(jetAuto);
    const theme = RTS.getTheme();
    await (() => {
      DarkMode.value = false;
    })();
    expect(theme.value.name).toBe("JetAuto");

    await (() => {
      DarkMode.value = true;
    })();
    expect(theme.value.name).toBe("JetDark");
  });

  test(".getTheme:测试获取主题执行色彩转换", async () => {
    const rawTheme = {
      ...jetLight,
      name: "rawTheme",
      color: "red",
      color2: {
        ...jetDark,
        default: "pink",
        light: "ffffff",
      },
    };

    expect(
      newReactiveThemeSystem(styleElId, rawTheme).getTheme().value.color
    ).toBe("#F44336");
  });
});

import { describe, test, expect } from "vitest";
import {
  hexToRgb,
  rgbToHex,
  numericLimits,
  changeCaseKebab,
  validatorRangeNumber,
  validatorRange,
  Bumper,
  findCloseNum,
  isColorCode,
  RGBA,
  RGB,
  HEX,
  HSL,
  autoTextColor,
  getWindowWidthIn,
  objectDeepCopy,
  getValue,
  setValue,
} from "../index";

describe("HexToRgb", () => {
  test("hexToRgb", () => {
    expect(hexToRgb("#FFFFFF")).toEqual("rgb(255,255,255)");
    // opacity
    expect(hexToRgb("#FFFFFF00")).toEqual("rgba(255,255,255,0)");
  });

  test("hexToRgb:detailed", () => {
    expect(hexToRgb("#FFFFFF", true)).toHaveProperty("color");
    expect(hexToRgb("#FFFFFF", true)).toHaveProperty("max");
    expect(hexToRgb("#FFFFFF", true)).toHaveProperty("opacity");
  });
});

describe("RgbToHex", () => {
  test("rgbToHex", () => {
    expect(rgbToHex("rgb(255,255,255)")).toEqual("#ffffff");
    expect(rgbToHex("rgba(255,255,255,0)")).toEqual("#ffffff00");
  });
  test("rgbToHex:detailed", () => {
    expect(rgbToHex("rgb(255,255,255)", true)).toHaveProperty("color");
    expect(rgbToHex("rgb(255,255,255)", true)).toHaveProperty("max");
    expect(rgbToHex("rgb(255,255,255)", true)).toHaveProperty("opacity");
  });
});

describe("ChangeCaseKebab", () => {
  test("changeCaseKebab", () => {
    expect(changeCaseKebab("abCd")).toBe("ab-cd");
    expect(changeCaseKebab("ab1Cd")).toBe("ab-1-cd");
  });
});

describe("ValidatorRangeNumber", () => {
  test("validatorRangeNumber", () => {
    const range = [1, 2, 3];
    expect(validatorRange(range) instanceof Function).toBeTruthy();
    expect(validatorRange(range)(2)).toBeTruthy();
    expect(validatorRange(range)(9)).toBeFalsy();
    // expect(validatorRange(range)()).toBe("1|2|3");
  });
});

describe("ValidatorRange", () => {
  test("validatorRange", () => {
    expect(validatorRangeNumber(1, 9) instanceof Function).toBeTruthy();
    expect(validatorRangeNumber(1, 9)(10)).toBeFalsy();
    expect(validatorRangeNumber(1, 9)(0)).toBeFalsy();
    expect(validatorRangeNumber(1, 9)(1)).toBeTruthy();
    expect(validatorRangeNumber(1, 9)(9)).toBeTruthy();
    // expect(validatorRangeNumber(1, 9)()).toBe("1~9");
  });
});

describe("NumericLimits", () => {
  test("numericLimits", () => {
    expect(numericLimits(9, 20, 10)).toBe(10);

    // 测试向上截取
    expect(numericLimits(9, 20, 21)).toBe(20);
    // 测试向下截取以及负数
    expect(numericLimits(-1, 20, -3)).toBe(-1);
  });
});

describe("Bumper", () => {
  test("Bumper", () => {
    const BUMPER = new Bumper(3000, 2);

    // 设置过热通知函数
    let isOverHeat = false;
    BUMPER.setAlarmOverHeat(() => {
      isOverHeat = true;
    });

    BUMPER.setAlarmCooled(() => {
      isOverHeat = false;
    });

    BUMPER.action();
    BUMPER.action();
    expect(isOverHeat).toBeFalsy();

    BUMPER.action();
    expect(isOverHeat).toBeTruthy();

    setTimeout(() => {
      expect(isOverHeat).toBeFalsy();
    }, 3000);
  });
});

describe("FindCloseNum", () => {
  test("findCloseNum", () => {
    const NUM_ARRAY = [
      -90, -95, -30, -25, -10, -5, -3, -1, 0, -1, 2, 3, 5, 10, 25, 30, 90, 95.5,
      96, 100, 300,
    ];

    expect(findCloseNum(NUM_ARRAY, -100)).toBe(-95);
    expect(findCloseNum(NUM_ARRAY, 93)).toBe(95.5);
    expect(findCloseNum(NUM_ARRAY, -1)).toBe(-1);
    expect(findCloseNum(NUM_ARRAY, 0)).toBe(0);
  });
});

describe("IsColorCode", () => {
  test("is HEX", () => {
    expect(isColorCode("#ffffff") instanceof HEX).toBeTruthy();
    expect(isColorCode("#FFFFFF") instanceof HEX).toBeTruthy();
    expect(isColorCode("#fff") instanceof HEX).toBeTruthy();
    expect(isColorCode("#272822") instanceof HEX).toBeTruthy();
    expect(isColorCode("#272822") instanceof HEX).toBeTruthy();
    expect(isColorCode("rgb(39, 40, 34)") instanceof HEX).toBeFalsy();
    expect(isColorCode("#ffffff").toString()).toBe("#ffffff");
  });

  test("Is rgb", () => {
    expect(isColorCode("rgb(20%, 34%, 34%)") instanceof RGB).toBeTruthy();
    expect(isColorCode("rgb(20%,34%,34%)") instanceof RGB).toBeTruthy();
    expect(isColorCode("rgb(39, 40, 34)") instanceof RGB).toBeTruthy();
    expect(isColorCode("#272822") instanceof RGB).toBeFalsy();
  });

  test("Is rgba", () => {
    expect(isColorCode("rgba(25%, 40%, 80%,0%)") instanceof RGBA).toBeTruthy();
    expect(isColorCode("rgba(25%, 40%, 80%,99%)") instanceof RGBA).toBeTruthy();
    expect(
      isColorCode("rgba(25%, 40%, 80%,100%)") instanceof RGBA
    ).toBeTruthy();
    expect(isColorCode("rgba(20%,34%,34%,0.1)") instanceof RGBA).toBeTruthy();
    expect(isColorCode("rgba(39, 40, 34,0.24)") instanceof RGBA).toBeTruthy();
    expect(isColorCode("rgb(39, 40, 34)") instanceof RGBA).toBeFalsy();
    expect(isColorCode("#272822") instanceof RGBA).toBeFalsy();
  });

  test("Is hsl", () => {
    expect(isColorCode("hsl(360, 100%, 15%,0.12)") instanceof HSL).toBeTruthy();
    expect(isColorCode("hsl(360,100%,15%,15%)") instanceof HSL).toBeTruthy();
    expect(isColorCode("hsl(360, 100%, 15%)") instanceof HSL).toBeTruthy();
    expect(isColorCode("hsl(0, 1%, 15%)") instanceof HSL).toBeTruthy();
    expect(isColorCode("rgb(20%,34%,34%)") instanceof HSL).toBeFalsy();
    expect(isColorCode("#272822") instanceof HSL).toBeFalsy();
  });
});

describe("AutoTextColor", () => {
  test("autoTextColor", () => {
    const EL = document.createElement("div");

    // 暗背景
    EL.style.background = "rgb(0, 0, 0)";
    expect(autoTextColor(EL)).toBe("var(--text-light)");

    // 亮背景
    EL.style.background = "rgb(255, 255, 255)";
    expect(autoTextColor(EL)).toBe("var(--text-dark)");
  });
});

import { getOffset } from "../index";
describe("GetOffset", () => {
  test("attr", () => {
    const data = getOffset(document.createElement("div"));
    expect(data).haveOwnProperty("height");
    expect(data).haveOwnProperty("width");
    expect(data).haveOwnProperty("size");
    expect(data).haveOwnProperty("y");
    expect(data).haveOwnProperty("x");
  });
});

export async function triggerResize(windowInnerWidth: number) {
  window.innerWidth = windowInnerWidth;
  const event = new Event("resize");
  window.dispatchEvent(event);
}

describe("getWindowWidthIn", () => {
  test("bp", async () => {
    const windowBP = getWindowWidthIn();

    // xs
    await triggerResize(0);
    expect(windowBP.value).toBe("xs");
    await triggerResize(578);
    expect(windowBP.value).toBe("xs");

    // sm
    await triggerResize(579);
    expect(windowBP.value).toBe("sm");
    await triggerResize(768);
    expect(windowBP.value).toBe("sm");

    // md
    await triggerResize(769);
    expect(windowBP.value).toBe("md");
    await triggerResize(992);
    expect(windowBP.value).toBe("md");

    // lg
    await triggerResize(993);
    expect(windowBP.value).toBe("lg");
    await triggerResize(1200);
    expect(windowBP.value).toBe("lg");

    // xl
    await triggerResize(1200.1);
    expect(windowBP.value).toBe("xl");
  });
});

describe("objectDeepCopy", () => {
  test("copy", () => {
    const testObj = { test: "test string" };
    const newObj = objectDeepCopy(testObj);

    expect(newObj).toEqual(testObj);
    expect(newObj === testObj).toBeFalsy();
  });
});

describe("getValue", () => {
  test("get", () => {
    const data = { test: 1 };
    expect(getValue(data, "test")).toBe(1);
  });
});

describe("getValue", () => {
  test("set", () => {
    const data = { test: 1 };
    setValue(data, "test", 2);
    expect(data.test).toBe(2);
  });

  test("return", () => {
    const data = { test: 1 };
    expect(setValue(data, "test", 2)).toEqual(data);
  });
});

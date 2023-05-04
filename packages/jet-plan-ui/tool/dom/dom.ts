export function getOffset(el: HTMLElement | null | undefined) {
  if (!el)
    return {
      size: new DOMRect(),
      height: 0,
      width: 0,
      y: 0,
      x: 0,
    };

  function getWindowScroll() {
    // FullSupport
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

    const x = supportPageOffset
      ? window.pageXOffset
      : isCSS1Compat
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;

    const y = supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;

    return {
      x: x,
      y: y,
    };
  }
  // 获取元素内部不含边框相对页面的实际距离
  const elScreenBounding = el.getBoundingClientRect();
  const windowScroll = getWindowScroll();
  const scrollTop = windowScroll.y || el.scrollTop;
  const scrollLeft = windowScroll.x || el.scrollLeft;

  const elWidth = elScreenBounding.right - elScreenBounding.left;
  const elHeight = elScreenBounding.bottom - elScreenBounding.top;
  return {
    // 获取事件在元素内部发生的实际位置
    x: elScreenBounding.left + scrollLeft - el.clientLeft,
    y: elScreenBounding.top + scrollTop - el.clientTop,
    size: elScreenBounding,
    height: elHeight,
    width: elWidth,
  };
}

/**
 * 生成 boxShadow 字符串
 * @param direction left|right|top|bottom
 * @param intensity 强度
 * @param color 色彩
 * @returns boxShadow
 */
export function shadowPainter(
  direction: string,
  intensity: number,
  color: string
) {
  function calcDirection(array: string[]) {
    if (array.indexOf(direction) !== -1) {
      return direction == array[1] ? intensity + "px" : intensity * -1 + "px";
    }
    return "0";
  }
  function x() {
    return calcDirection(["left", "right"]);
  }
  function y() {
    return calcDirection(["top", "bottom"]);
  }

  return `
    ${x()} ${y()}
    ${1.5 * intensity}px
    ${0.1 * intensity}px
    ${color ? color : "var(--material-shadow)"}`;
}

import { ref, computed } from "vue";

// 独立于函数的变量，以避免生成过多的相同变量引用
const screenWidth = ref(window.innerWidth);
export function getWindowWidthIn() {
  function matchWidth(width: number) {
    const xs = { max: 578 };
    const sm = { max: 768, min: 578 };
    const md = { max: 992, min: 768 };
    const lg = { max: 1200, min: 992 };
    const xl = { min: 1200 };

    switch (true) {
      case width <= xs.max:
        return "xs";
      case width > sm.min && width <= sm.max:
        return "sm";
      case width > md.min && width <= md.max:
        return "md";
      case width > lg.min && width <= lg.max:
        return "lg";
      case width > xl.min:
        return "xl";
      default:
        console.error(
          "Function getWindowWidthIn:\nThe screen size detection appears to be a problem and the screen size information cannot be obtained."
        );
        return "xl";
    }
  }
  // 监听屏幕宽度变化
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
  return computed(() => {
    return matchWidth(screenWidth.value);
  });
}

import { rgbToHex } from "../index";

/**
 * 根据元素背景计算应应用的文本色彩
 * @param el node 节点
 * @returns 定义于主题配置文件中 明|暗 文本的 css 变量
 */
export function autoTextColor(el: HTMLElement) {
  function getBgColor(el: HTMLElement) {
    return window.getComputedStyle(el).backgroundColor;
  }
  const hexColor = rgbToHex(getBgColor(el), true);
  if (hexColor instanceof Object) {
    if (hexColor.opacity == 0) {
      el.style.color = "";
    } else {
      if (hexColor.max < 0.6) {
        return "var(--text-light)";
      } else {
        return "var(--text-dark)";
      }
    }
  }
}

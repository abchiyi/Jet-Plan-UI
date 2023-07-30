export * from "./dom";
export * from "./isColorCode";
export * from "./types.d";
/**
 *  hex to rgb
 * @param hex hex字符串
 * @param detailed  启用详细模式，默认 false
 * @returns rgb 或 rgba 字符串，启用‘detailed’ 将回传一个包含色彩信息的对象
 */
export function hexToRgb(hex: string, detailed: Boolean = false) {
  function parse(v: any) {
    return parseInt(`0x${v}`);
  }

  // 头部未添加 '#' 标识时为其添加
  if (!(hex[0] == "#")) hex = "#" + hex;

  const rgba = {
    r: parse(hex.slice(1, 3)),
    g: parse(hex.slice(3, 5)),
    b: parse(hex.slice(5, 7)),
    opacity: parseFloat(String(Number(parse(hex.slice(7))) / 255)),
  };

  const max = Math.abs(
    Number(
      parseFloat(String((rgba.r + rgba.g + rgba.b) / (255 * 3))).toFixed(3)
    )
  );

  // 详细模式
  if (detailed) {
    return {
      color:
        rgba.opacity < 1
          ? `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.opacity})`
          : `rgb(${rgba.r},${rgba.g},${rgba.b})`,
      opacity: isNaN(rgba.opacity) ? 1 : rgba.opacity,
      max: rgba.opacity ? max * rgba.opacity : max,
    };
  }

  return rgba.opacity < 1
    ? `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.opacity})`
    : `rgb(${rgba.r},${rgba.g},${rgba.b})`;
}

/**
 *
 * @param rgb rgb 或 rgba 字符串
 * @param detailed 启用详细模式
 * @returns HEX 字符串，启用‘detailed’ 将回传一个包含色彩信息的对象
 */
export function rgbToHex(rgb: string, detailed = false) {
  function toHex(color: number) {
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  const leftBrackets = rgb.indexOf("(") + 1;
  const rightBrackets = rgb.indexOf(")");
  const rgba = rgb.substring(leftBrackets, rightBrackets).split(",");
  const s = ["#"];
  let counter = 0;
  rgba.forEach(v => {
    counter++;
    s.push(
      counter < 4
        ? toHex(Math.abs(Number(v)))
        : toHex(parseInt(`${Number(v) * 255}`))
    );
  });

  const max = Math.abs(
    Number(
      parseFloat(
        String(
          (parseInt(rgba[0]) + parseInt(rgba[1]) + parseInt(rgba[2])) /
            (255 * 3)
        )
      ).toFixed(3)
    )
  );

  if (detailed) {
    return {
      color: s.join(""),
      opacity: parseFloat(rgba[3] ? rgba[3] : "1"),
      max: rgba[3] ? max * Number(rgba[3]) : max,
    };
  }

  return s.join("");
}

/**
 * 范围验证函数，用于 vue props 数值范围验证
 * @param range 任意数值序列
 * @returns function 返回函数在执行时如未传入有效值则返回示意范围的字符串
 */
export function validatorRange(range: any[]) {
  return function (value: any = undefined) {
    // if (value !== undefined) {
    return range.includes(value);
    // }
    // return range.join("|");
  };
}

/**
 * 范围验证函数，用于 vue props 数值范围验证
 * @param min 最小值
 * @param max 最大值
 * @returns function 返回函数在执行时如未传入有效值则返回示意范围的字符串
 */
export function validatorRangeNumber(min: number, max: number) {
  return function (value: number) {
    // if (value !== undefined) {
    if (min <= value && value <= max) {
      return true;
    }
    return false;
    // }
    // return `${min}~${max}`;
  };
}

/**
 * changeCaseKebab
 * @param string 任意英文字符串(可包含数字)
 * @returns Kebab case 字符串
 */
export function changeCaseKebab(string: string) {
  const iterator = string.matchAll(/[A-Z][a-z]|\d+/g);

  const stringArray = string.split("");

  function replace() {
    const value = iterator.next();
    if (!value.done) {
      const index = value.value.index;
      if (index !== undefined) {
        if (index !== 0) {
          stringArray[index] = "-" + stringArray[index].toLowerCase();
        } else {
          stringArray[index] = stringArray[index].toLowerCase();
        }
      }
      replace();
    }
  }
  replace();

  return stringArray.join("");
}

/**
 * @param min 最小值
 * @param max 最大值
 * @param targetNumber 输入值
 * @return 返回介于 min，max（含min，max）之间的数值
 * 为数值设置范围限制当超出范围时将会截取数值到设置的范围内
 */
export function numericLimits(
  min: number,
  max: number,
  targetNumber: number
): number {
  return targetNumber < min ? min : targetNumber > max ? max : targetNumber;
}

/**
 * 在单位时间内某一操作执行次数达到上限则执行设置的闹钟
 * @param timeOut 等待时间/ms
 * @param limit 操作最大执行次数
 * @method action() 将其放入要执行的操作中它会记录执行的次数
 * @method reSetCounter() 重置内部计数器
 * @method setAlarmOverHeat(callback:function) 过热闹钟
 * @method setAlarmCooled(callback:function) 冷却闹钟
 */
export class Bumper {
  timeOut: number;
  idTimeOut: any;

  counterMax: number;
  counter: number;

  alarmOverheat: Function;
  alarmCooled: Function;
  constructor(timeOut: number, limit: number = 1) {
    this.timeOut = timeOut;
    this.idTimeOut = null;

    this.counterMax = limit;
    this.counter = 0;

    this.alarmOverheat = () => {};
    this.alarmCooled = () => {};
  }

  setAlarmOverHeat(callback: Function) {
    this.alarmOverheat = callback;
  }

  setAlarmCooled(callback: Function) {
    this.alarmCooled = callback;
  }

  action() {
    clearTimeout(this.idTimeOut);
    this.counter++;

    if (this.counter > this.counterMax) this.alarmOverheat();

    this.idTimeOut = setTimeout(() => {
      this.reSetCounter();
      this.alarmCooled();
    }, this.timeOut);
  }

  reSetCounter() {
    this.counter = 0;
  }
}

/**
 * 在数组中查找近似值
 * @param array 查询数组
 * @param targetNumber 目标值
 * @returns Number
 */
export function findCloseNum(array: number[], targetNumber: number) {
  const arraySorted = array.sort(); // 排序数组
  let differValue = Number.MAX_VALUE; // 为差值初始化一个最大值
  let index = 0; // 记录找到值的序号

  for (const key in arraySorted) {
    const differValueNew = Math.abs(arraySorted[key] - targetNumber);

    if (differValueNew <= differValue) {
      const oldNumber = arraySorted[index];
      const newNumber = arraySorted[key];

      if (differValueNew == differValue && newNumber < oldNumber) continue;

      differValue = differValueNew;
      index = Number(key);
    }
  }

  return arraySorted[index]; // 返回最接近的数值
}

/**
 * 深层拷贝任意对象，仅保留数据。对象原型链以及 function 会被破坏
 * @param obj 任意对象
 * @returns obj
 */
export function objectDeepCopy<T extends Object>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function getValue<T extends object>(obj: T, key: keyof T) {
  return obj[key];
}

export function setValue<T extends object>(obj: T, key: keyof T, value: any) {
  obj[key] = value;
  return obj;
}

export function getKeys<T>(obj: T) {
  return Object(obj).keys() as Array<keyof T>;
}

import type { VNode } from "vue";
import type { RenderFunction } from "./types";

/**
 * 提供组件自定义渲染支持
 * @param vNode 允许自定义渲染的节点
 * @param render 外部定义的渲染函数
 * @param renderDefault 组件默认的渲染函数
 * @returns VNode
 */
export function customRender(
  vNode: VNode | undefined,
  render: RenderFunction | undefined,
  renderDefault: RenderFunction
): VNode {
  return render ? render(vNode) : renderDefault(vNode);
}

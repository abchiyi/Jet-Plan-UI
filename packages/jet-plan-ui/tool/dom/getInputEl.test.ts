import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import getInputEl from "./getInputEl";

describe("getInputEl", () => {
  // 检查默认插槽内容是否为 input 元素
  test.each([undefined, "div", "input"])("检查插槽内容是否为 input 元素", v => {
    let component = {};
    mount(
      defineComponent({
        mounted() {
          component = this;
        },
        render() {
          return h("div", null, this.$slots.default?.());
        },
      }),
      {
        slots: v ? { default: h(v, { id: "test" }) } : {},
      }
    );

    if (v === "input") {
      expect(getInputEl(component).id, "未获取到组件内的 input 节点").toBe(
        "test"
      );
    } else {
      expect(
        getInputEl(component, "--", false) instanceof HTMLInputElement,
        `插槽内容：${v}`
      ).toBeTruthy();
    }
  });
});

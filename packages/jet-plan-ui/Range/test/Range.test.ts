import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { Bubble } from "jet-plan-ui";
import { h } from "vue";
import { Range } from "..";

describe("Test Range", () => {
  test("Methods:getRange", async () => {
    const wrapper = mount(Range, {
      slots: {
        default: h("input", { type: "range" }),
      },
    });
    const inputEl = wrapper.vm.getInputEl();

    // 初始化时读取
    expect(wrapper.vm.range).toEqual({ max: 100, min: 0, step: 1 });

    await (() => {
      inputEl.step = "0.01";
      inputEl.max = "10";
      inputEl.min = "1";
    })();

    await expect(wrapper.vm.range).toEqual({
      step: 0.01,
      max: 10,
      min: 1,
    });
  });
  test("Methods:valueToPercentage", async () => {
    const wrapper = mount(Range, {
      slots: {
        default: h("input", { type: "range", value: 20 }),
      },
    });

    expect(wrapper.vm.percentage).toBe(0.2); // 挂载时同步初始值
  });
  test("Methods:syncPercentageToInput", async () => {
    const wrapper = mount(Range, {
      slots: {
        default: h("input", { type: "range" }),
      },
    });

    wrapper.vm.percentage = 0.1;
    wrapper.vm.syncPercentageToInput();
    expect(wrapper.vm.getInputEl().value).toBe("10");
  });
  test("拨杆效果逻辑", async () => {
    const wrapper = mount(Range, {
      slots: {
        default: h("input", { type: "range" }),
      },
    });

    await wrapper.find(".thumb").trigger("mouseenter");
    expect(wrapper.vm.thumbMouseEnter).toBeTruthy();

    await wrapper.find(".thumb").trigger("mouseleave");
    expect(wrapper.vm.thumbMouseEnter).toBeFalsy();

    await wrapper.find(".j-track-bar").trigger("mousedown");
    expect(wrapper.vm.thumbMouseDown).toBeTruthy();

    document.dispatchEvent(new Event("mouseup"));
    expect(wrapper.vm.thumbMouseDown).toBeFalsy();

    wrapper.vm.thumbMouseEnter = true;
    wrapper.vm.thumbMouseDown = false;
    expect(wrapper.vm.thumbVfx).toBeTruthy();

    wrapper.vm.thumbMouseEnter = true;
    wrapper.vm.thumbMouseDown = true;
    expect(wrapper.vm.thumbVfx).toBeTruthy();

    wrapper.vm.thumbMouseEnter = false;
    wrapper.vm.thumbMouseDown = true;
    expect(wrapper.vm.thumbVfx).toBeTruthy();

    wrapper.vm.thumbMouseEnter = false;
    wrapper.vm.thumbMouseDown = false;
    expect(wrapper.vm.thumbVfx).toBeFalsy();
  });
  test("拨杆浮动气泡", () => {
    const wrapper = mount(Range, {
      slots: {
        default: h("input", { type: "range" }),
      },
    });

    expect(wrapper.get(".sub-slider").getComponent(Bubble)).toBeTruthy();
  });
  test("气泡显示Input元素的值", async () => {
    let value = 1;
    const wrapper = mount(Range, {
      slots: {
        default: h("input", { type: "range", value }),
      },
    });

    const inputEl = wrapper.vm.getInputEl();

    expect(wrapper.vm.inputValue).toEqual(value.toString());

    value = 2;
    inputEl.value = value.toString();
    await inputEl.dispatchEvent(new Event("change"));

    expect(wrapper.vm.inputValue).toEqual(String(value));
  });
});

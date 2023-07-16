import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { h, nextTick } from "vue";
import { Range } from "..";
describe("Test Range", () => {
  test("Methods:getRange", () => {
    let wrapper = mount(Range, {
      props: { modelValue: 50 },
      slots: {
        default: h("input", { type: "range" }),
      },
    });

    expect(wrapper.vm.getRange()).toEqual({ max: 100, min: 0, step: 1 });

    wrapper = mount(Range, {
      props: { modelValue: 50 },
      slots: {
        default: h("input", { type: "range", max: 1, min: 0, step: 0.01 }),
      },
    });
    expect(wrapper.vm.getRange()).toEqual({ max: 1, min: 0, step: 0.01 });
  });
  test("Methods:valueToPercentage", async () => {
    const wrapper = mount(Range, {
      props: { modelValue: 50 },
      slots: {
        default: h("input", { type: "range" }),
      },
    });

    expect(wrapper.vm.percentage).toBe(0.5); // 挂载时同步初始值
  });
  test("Methods:syncPercentageToInput", async () => {
    const wrapper = mount(Range, {
      props: { modelValue: 1 },
      slots: {
        default: h("input", { type: "range" }),
      },
    });

    wrapper.vm.percentage = 0.1;
    await wrapper.vm.syncPercentageToInput();

    expect(wrapper.vm.getInputEl().value).toBe("10");
  });
  test("拨杆效果逻辑", async () => {
    const wrapper = mount(Range, {
      props: { modelValue: 1 },
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
});

import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { Switch } from "jet-plan-ui";
import { h } from "vue";

describe("Test switch", () => {
  test("Slot default", () => {
    const wrapper = mount(Switch, {
      slots: {
        default: () => h("input"),
      },
    });

    expect(wrapper.find("input").exists()).toBeTruthy();
  });

  test("Class", async () => {
    const wrapper = mount(Switch, {
      slots: {
        default: () => h("input"),
      },
    });

    // 默认类名
    expect(wrapper.classes()).include("j-switch");

    // 按下 50 ms 后设置拉宽拨杆的类名
    await wrapper.trigger("mousedown");
    setTimeout(() => {
      expect(wrapper.classes()).include("wider");
    }, 100);

    // 鼠标抬起or鼠标离开元素取消拨杆拉宽效果
    await wrapper.trigger("mouseup");
    setTimeout(() => {
      expect(wrapper.classes()).not.include("wider");
    }, 100);

    await wrapper.trigger("mousedown");
    setTimeout(() => {
      expect(wrapper.classes()).not.include("wider");
    }, 100);
  });
});

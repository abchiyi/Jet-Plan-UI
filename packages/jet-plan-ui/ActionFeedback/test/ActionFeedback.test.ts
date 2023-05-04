import { mount, shallowMount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import ActionFeedback from "../src/index.vue";
import { defineComponent, h } from "vue";

import BaseAction from "../src/baseAction.vue";

describe("ActionFeedbackPlugin", () => {
  test("Base Name", async () => {
    const wrapper = mount(ActionFeedback);
    expect(wrapper.classes()).toContain("j-action-feedback");
  });

  test("Action", async () => {
    const wrapper = mount(ActionFeedback, {
      propsData: {
        active: true,
      },
    });

    function MaskIsNotExists() {
      const mask = wrapper.find("span.j-mask.mask"); // 检查 mask 是否被正确渲染
      expect(mask.exists()).not.toBeTruthy();
    }
    function MaskIsExists() {
      const mask = wrapper.find("span.j-mask.mask"); // 检查 mask 是否被正确渲染
      expect(mask.exists()).toBeTruthy();
    }

    // 鼠标按下
    await wrapper.trigger("mousedown");
    MaskIsExists();
    expect(wrapper.classes()).toContain("active"); // 检查类名是否被渲染

    // 鼠标抬起
    await wrapper.trigger("mouseup");
    MaskIsNotExists();
    expect(wrapper.classes()).not.toContain("active"); // 取消渲染类名

    // ----- prop:'active' 关闭 ----- //
    // prop:'active' 关闭后 所有效果不应被触发
    await wrapper.setProps({ active: false });

    // 鼠标按下
    await wrapper.trigger("mousedown");
    MaskIsNotExists();
    expect(wrapper.classes()).not.toContain("active"); // 检查类名是否被渲染
  });

  test("hover", async () => {
    const wrapper = mount(ActionFeedback, {
      propsData: {
        hover: true,
      },
    });
    expect(wrapper.classes()).toContain("hover");

    await wrapper.setProps({
      hover: false,
    });

    expect(wrapper.classes()).not.toContain("hover");
  });

  test("Render:tag", async () => {
    // prop tag 接受标签名&或一个组件
    const wrapper = shallowMount(BaseAction, {
      propsData: {
        tag: "span",
      },
    });
    expect(wrapper.getComponent("span")).toBeTruthy();

    const component = defineComponent({
      name: "testComponent",
      render() {
        return h("div");
      },
    });
    await wrapper.setProps({ tag: component });
    expect(wrapper.getComponent(component)).toBeTruthy();
  });
});

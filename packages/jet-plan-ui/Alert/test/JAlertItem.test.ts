import { expect, describe, test } from "vitest";
import component from "../src/JAlertItem.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { Button } from "jet-plan-ui";
import { h, nextTick } from "vue";

const wrapper = mount(component, {
  props: { data: { type: "info", content: "Test", key: 1 } },
});

describe("Test Alert", () => {
  test("Props:data", async () => {
    expect(wrapper.classes()).include("info");
    expect(wrapper.element.textContent).toContain("Test");
    expect(wrapper.vm.data?.timeout).toBe(undefined);
  });

  test("Method:close", async () => {
    await wrapper.setProps({
      data: { type: "info", content: "Test" },
    });

    await wrapper.vm.close();
    const emitted = wrapper.emitted();
    expect(emitted).toHaveProperty("close");
    expect(emitted["close"]).toEqual([[{ type: "info", content: "Test" }]]);
  });

  test("trigger Close event", async () => {
    const wrapper = mount(component, {
      props: { data: { type: "info", content: "Test", key: 1 } },
    });

    await wrapper.getComponent(Button).trigger("click");
    expect(wrapper.emitted()).toHaveProperty("close");
  });

  test("提示消息渲染逻辑", async () => {
    const wrapper = mount(component, {
      props: {
        data: { key: 1, type: "info", content: "Alert" },
      },
    });

    expect(wrapper.find("div.content").text()).toBe("Alert");

    // 分别提供内容
    wrapper.setProps({
      data: {
        key: 1,
        type: "info",
        content: {
          default: "alert",
          closeButton: "closeButton",
        },
      },
    });
    await nextTick();
    expect(wrapper.find("div.content").text()).toBe("alert");
    expect(wrapper.findComponent(Button).text()).toBe("closeButton");

    // 使用渲染函数
    wrapper.setProps({
      data: {
        key: 1,
        type: "info",
        content: h("p", { class: "test-node" }, "test"),
      },
    });

    await nextTick();
    expect(wrapper.find("div.content").find("p.test-node").text()).toBe("test");
    expect(wrapper.findComponent(Button).text()).toBe("Close");
  });
});

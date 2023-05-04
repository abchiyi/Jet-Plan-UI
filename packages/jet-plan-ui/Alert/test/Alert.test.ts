import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";

import { Button, TransitionScale, TransitionSlider } from "jet-plan-ui";
import AlertController from "../src/AlertController";
import { nextTick, h, type VNode } from "vue";
import AlertItem from "../src/JAlertItem.vue";
import component from "../src/JAlert.vue";

const alertController = new AlertController();

describe("Test Alert", () => {
  test("Dom:sendMessage", async () => {
    const wrapper = mount(component, {
      props: { position: "top", alertController },
    });
    alertController.sendMessage("info", null, "message 1");
    await nextTick();

    expect(wrapper.findAllComponents(AlertItem).length).toBe(1);
  });

  test("Close Alert", async () => {
    alertController.removeAll();
    alertController.sendMessage("info", null, "Test");
    const wrapper = mount(component, {
      props: { position: "top", alertController },
    });
    expect(wrapper.findComponent(AlertItem).exists()).toBeTruthy();

    await wrapper.getComponent(AlertItem).getComponent(Button).trigger("click");

    expect(alertController.alerts.length).toBe(0);
    expect(wrapper.findComponent(AlertItem).exists()).toBeFalsy();
  });

  test("Custom Transition", async () => {
    const wrapper = mount(component, {
      props: { alertController: alertController },
    });
    alertController.sendMessage("info", null, "test");

    expect(wrapper.findComponent(TransitionScale).exists()).toBeTruthy();

    await wrapper.setProps({
      transition: (vNode: VNode) => {
        return h(
          TransitionSlider,
          { position: "right" },
          { default: () => vNode }
        );
      },
    });

    const newTransition = wrapper.findComponent(TransitionSlider);
    expect(newTransition.exists()).toBeTruthy();
    expect(newTransition.findComponent(AlertItem).exists()).toBeTruthy();
  });
});

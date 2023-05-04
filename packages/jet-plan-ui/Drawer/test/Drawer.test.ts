import { expect, describe, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { Drawer } from "jet-plan-ui";

import { TransitionSlider } from "../../Animations/src/index";

const wrapper = shallowMount(Drawer, {
  props: {
    expand: true,
    from: "top",
  },
});

describe("Test Drawer", () => {
  test("Drawer 包含组件 TransitionSlider", () => {
    expect(wrapper.findComponent(TransitionSlider).exists()).toBeTruthy();
  });
  test("Props", async () => {
    expect(wrapper.vm.expand).toBeTruthy();
    expect(wrapper.vm.from).toBe("top");
    await wrapper.setProps({
      from: "right",
      expand: false,
    });
    expect(wrapper.vm.expand).toBeFalsy();
    expect(wrapper.vm.from).toBe("right");
  });
});

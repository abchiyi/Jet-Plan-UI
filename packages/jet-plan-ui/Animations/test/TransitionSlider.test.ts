import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import { TransitionSlider } from "../src";

describe("TransitionFadeTest", () => {
  test("Slot:default", () => {
    const slotContent = "Default slot";
    const wrapper = mount(TransitionSlider, {
      propsData: { position: "top" },
      slots: {
        default: () => {
          return slotContent;
        },
      },
    });
    expect(wrapper.html()).matchSnapshot();
    expect(wrapper.text()).toBe(slotContent);
  });
  test("Computed:position", async () => {
    function getPosition() {
      let text = wrapper.vm.style["--migration-distance"];
      text = text.replace("translate3d(", "");
      text = text.replace(")", "");
      return text.split(",");
    }

    // Left
    let position = "left";
    const wrapper = mount(TransitionSlider, {
      propsData: { position: position },
    });
    expect(getPosition()).toEqual(["-100%", "0", "0"]);

    // Right
    position = "right";
    await wrapper.setProps({
      position: position,
    });
    expect(getPosition()).toEqual(["100%", "0", "0"]);

    // Top
    position = "top";
    await wrapper.setProps({
      position: position,
    });
    expect(getPosition()).toEqual(["0", "-100%", "0"]);

    // Bottom
    position = "bottom";
    await wrapper.setProps({
      position: position,
    });
    expect(getPosition()).toEqual(["0", "100%", "0"]);
  });
  test("Props:all", async () => {
    const wrapper = mount(TransitionSlider, {
      propsData: { position: "top" },
    });

    expect(wrapper.vm.position).toBe("top");
    expect(wrapper.vm.opacity).toBe(true);

    await wrapper.setProps({ opacity: false });
    expect(wrapper.vm.opacity).toBe(false);
  });
});

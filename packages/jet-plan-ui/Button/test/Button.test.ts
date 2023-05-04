import { mount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import component from "../src/index.vue";
describe("Button:test", () => {
  test("SnapShots", () => {
    const wrapper = mount(component, {
      slots: {
        default: () => "slot default",
      },
    });

    expect(wrapper.html()).matchSnapshot();
  });

  test("Slot:default", () => {
    const wrapper = mount(component, {
      slots: {
        default: "default slot",
      },
    });

    expect(wrapper.text()).toBe("default slot");
  });

  test("Class", async () => {
    const wrapper = mount(component, {
      slots: {
        default: () => "slot default",
      },
    });

    expect(wrapper.classes()).include("shape");
    expect(wrapper.classes()).include("j-button");

    expect(wrapper.classes()).include("button");
    expect(wrapper.classes()).not.include("text-button");

    expect(wrapper.classes()).not.include("primary");
    expect(wrapper.classes()).not.include("disabled");
    expect(wrapper.classes()).not.include("block");

    await wrapper.setProps({
      disabled: true,
      text: true,
      primary: true,
      block: true,
    });

    expect(wrapper.classes()).not.include("button");
    expect(wrapper.classes()).include("text-button");

    expect(wrapper.classes()).include("primary");
    expect(wrapper.classes()).include("disabled");
    expect(wrapper.classes()).includes("block");
  });
});

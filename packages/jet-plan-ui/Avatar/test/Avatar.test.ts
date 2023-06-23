import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Avatar from "../src/index.vue";

describe("Avatar", () => {
  test("tag in class", () => {
    expect(mount(Avatar).classes()).include("j-avatar");
  });

  test("Computed:Classes", async () => {
    const wrapper = shallowMount(Avatar);
    expect(wrapper.vm.classes).include("j-avatar");

    expect(wrapper.vm.classes).include("circle");
    await wrapper.setProps({ circle: false });
    expect(wrapper.vm.classes).not.include("circle");
  });

  test.each([false, "Test"])("Slot:default", async (v: any) => {
    const wrapper = mount(Avatar, v ? { slots: { default: v } } : undefined);
    if (v) {
      expect(wrapper.text()).toBe("Test");
    } else {
      expect(wrapper.text()).toBe("");
    }
  });
});

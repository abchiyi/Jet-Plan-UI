import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Avatar from "../src/index.vue";

describe("Avatar", () => {
  test("tag in class", () => {
    expect(mount(Avatar).classes()).include("j-avatar");
  });

  test("Computed:Classes", async () => {
    const wrapper = shallowMount(Avatar);
    expect(wrapper.vm.classes).toEqual(["j-avatar"]);
  });
});

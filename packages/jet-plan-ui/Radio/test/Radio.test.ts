import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import component from "../src/index.vue";

describe("Test Radio", () => {
  test("SnapShots", () => {
    const wrapper = mount(component);
    expect(wrapper.html()).matchSnapshot();
  });
});

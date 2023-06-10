import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import component from "../src/index.vue";
import { h } from "vue";

describe("Test Radio", () => {
  test("SnapShots", () => {
    const wrapper = mount(component, {
      slots: { default: () => h("input") },
    });
    expect(wrapper.html()).matchSnapshot();
  });
});

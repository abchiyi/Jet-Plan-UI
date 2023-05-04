import { mount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import { TransitionScale } from "../src";

describe("TransitionScaleTest", () => {
  test("Slot:default", () => {
    const slotContent = "Default slot";
    const wrapper = mount(TransitionScale, {
      slots: {
        default: () => {
          return slotContent;
        },
      },
    });
    expect(wrapper.html()).matchSnapshot();
    expect(wrapper.text()).toBe(slotContent);
  });
});

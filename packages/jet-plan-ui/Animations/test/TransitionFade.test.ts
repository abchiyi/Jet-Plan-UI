import { mount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import { TransitionFade } from "../src";

describe("TransitionFadeTest", () => {
  test("Slot:default", () => {
    const slotContent = "Default slot";
    const wrapper = mount(TransitionFade, {
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

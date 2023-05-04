import { mount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import { TransitionFolded } from "../src";

describe("TransitionFoldedTest", () => {
  test("Slot:default", () => {
    const slotContent = "Default slot";
    const wrapper = mount(TransitionFolded, {
      slots: {
        default: () => {
          return slotContent;
        },
      },
    });
    expect(wrapper.html()).matchSnapshot();
    expect(wrapper.text()).toBe(slotContent);
  });
  test("Function:enter", () => {
    const wrapper = mount(TransitionFolded);
    const El = document.createElement("div");
    wrapper.vm.enter(El);

    expect(El.scrollHeight).toEqual(Number(El.style.height.split("px")[0]));
  });

  test("Function:afterEnter", () => {
    const wrapper = mount(TransitionFolded);
    const El = document.createElement("div");
    wrapper.vm.afterEnter(El);

    expect(El.style.height).toBe("");
  });

  test("Function:leave", () => {
    const wrapper = mount(TransitionFolded);
    const El = document.createElement("div");
    wrapper.vm.leave(El);

    expect(El.style.height).toBe("0px");
  });
  test("Function:afterLeave", () => {
    const wrapper = mount(TransitionFolded);
    const El = document.createElement("div");
    wrapper.vm.afterLeave(El);

    expect(El.style.height).toBe("");
  });
});

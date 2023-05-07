import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Bubble from "../src/index.vue";

describe("Bubble", () => {
  test("tag in class", () => {
    expect(mount(Bubble).classes()).include("j-bubble");
  });
  const PropPositionRange = [
    "top",
    "top-end",
    "top-start",
    "bottom",
    "bottom-end",
    "bottom-start",
    "left",
    "left-top",
    "left-bottom",
    "right",
    "right-top",
    "right-bottom",
  ];
  test.each([...PropPositionRange])("Props:position", position => {
    const wrapper = shallowMount(Bubble, { props: { position } });
    expect(wrapper.vm.position).toEqual(position);
  });
});

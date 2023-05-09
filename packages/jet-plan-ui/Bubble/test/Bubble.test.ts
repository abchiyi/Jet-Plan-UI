import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Bubble from "../src/index.vue";

describe("Bubble", () => {
  const positionData = [
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
  ] as (
    | "top"
    | "top-end"
    | "top-start"
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left"
    | "left-top"
    | "left-bottom"
    | "right"
    | "right-top"
    | "right-bottom"
  )[];

  test("tag in class", () => {
    expect(mount(Bubble).classes()).include("j-bubble");
  });

  test.each([...positionData, undefined])("Props:position", position => {
    const wrapper = shallowMount(Bubble, { props: { position } });
    if (position) {
      expect(wrapper.vm.position).toEqual(position);
    } else {
      expect(wrapper.vm.position).toEqual("top");
    }
  });

  test.each([true, false, undefined])("Props:show", v => {
    expect(shallowMount(Bubble, { props: { show: v } }).vm.show).toEqual(v);
  });

  test.each([...positionData])("Computed:ClassBubble", position => {
    const [START, POS] = position.split("-");

    const classBubble = shallowMount(Bubble, { props: { position } }).vm
      .ClassBubble;
    expect(classBubble).include(START);
    expect(classBubble).include(POS);
  });
});

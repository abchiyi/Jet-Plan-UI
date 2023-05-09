import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Bubble from "../src/index.vue";
import baseActionVue from "packages/jet-plan-ui/ActionFeedback/src/baseAction.vue";
import { Row } from "packages/jet-plan-ui/Grid";
import { TransitionSlider } from "packages/jet-plan-ui/Animations";

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
    expect(classBubble).include("bubble");
    expect(classBubble).include(START);
    expect(classBubble).include(POS);
  });

  test("Dom", () => {
    const wrapper = mount(Bubble);
    const baseAction = wrapper.findComponent(baseActionVue);
    expect(baseAction.exists()).toBeTruthy();
    const row = baseAction.findComponent(Row);
    expect(row.exists()).toBeTruthy();
    const slider = row.findComponent(TransitionSlider);
    expect(slider.exists()).toBeTruthy();
  });

  test.each(positionData)("Computed:positionReverse", position => {
    const [v] = position.split("-");
    const reverseData = shallowMount(Bubble, {
      props: { position },
    }).vm.positionReverse;

    switch (v) {
      case "top":
        expect(reverseData).toBe("bottom");
        break;
      case "bottom":
        expect(reverseData).toBe("top");
        break;
      case "left":
        expect(reverseData).toBe("right");
        break;
      case "right":
        expect(reverseData).toBe("left");
        break;
    }
  });
});

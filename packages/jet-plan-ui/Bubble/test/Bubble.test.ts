import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Bubble from "../src/index.vue";
import baseActionVue from "packages/jet-plan-ui/ActionFeedback/src/baseAction.vue";
import { Row } from "packages/jet-plan-ui/Grid";
import {
  TransitionFade,
  TransitionSlider,
} from "packages/jet-plan-ui/Animations";
import { h } from "vue";
import { exec } from "child_process";

function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

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

  test("Props:show", async () => {
    const wrapper = mount(Bubble);
    expect(wrapper.vm.showBubble).toBeFalsy();
    expect(wrapper.find(".bubble").exists()).toBeFalsy();

    await wrapper.setProps({ show: true });
    expect(wrapper.vm.showBubble).toBeTruthy();
    expect(wrapper.find(".bubble").exists()).toBeTruthy();

    await wrapper.setProps({ show: undefined });
    await sleep(100);
    expect(wrapper.vm.showBubble).toBeFalsy();
    expect(wrapper.find(".bubble").exists()).toBeFalsy();
  });

  test.each([...positionData])("Computed:ClassBubble", async position => {
    const [POS, START] = position.split("-");

    const classBubble = shallowMount(Bubble, { props: { position } }).vm
      .ClassBubble;
    expect(classBubble, position).include("bubble");
    expect(classBubble, position).include(POS);
    if (START) expect(classBubble, position).include(START);

    if (position == "top") {
      const wrapper = shallowMount(Bubble, { props: { position } });
      await wrapper.setData({ newPosition: "bottom-start" });
      expect(wrapper.vm.ClassBubble).include("bottom");
      expect(wrapper.vm.ClassBubble).include("start");
    }
  });

  test("Dom", async () => {
    const wrapper = mount(Bubble);
    const baseAction = wrapper.findComponent(baseActionVue);
    expect(baseAction.exists()).toBeTruthy();
    const row = baseAction.findComponent(Row);
    expect(row.exists()).toBeTruthy();
    const slider = row.findComponent(TransitionSlider);
    expect(slider.exists()).toBeTruthy();
    await wrapper.setData({ showBubble: true });
    const bubble = slider.find(".bubble");
    expect(bubble.exists()).toBeTruthy();
  });

  test.each([0, 1])("Dom:Bubble 显示与否受到属性 showBubble 控制", async v => {
    const wrapper = mount(Bubble);
    await wrapper.setData({ showBubble: Boolean(v) });
    if (v) {
      expect(wrapper.find(".bubble").isVisible()).toBeTruthy();
    } else {
      expect(wrapper.find(".bubble").exists()).toBeFalsy();
    }
  });

  test.each(positionData)("Computed:positionReverse", async position => {
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
    if (position == "top") {
      const wrapper = shallowMount(Bubble, { props: { position } });
      await wrapper.setData({ newPosition: "right" });
      expect(wrapper.vm.positionReverse).toBe("left");
    }
  });

  test.each(["message", () => h("div", null, "message")])(
    "Slots:bubble",
    async bubble => {
      const wrapper = mount(Bubble, { slots: { bubble } });
      await wrapper.setData({ showBubble: true });
      expect(wrapper.find(".bubble").text()).toBe("message");
    }
  );

  test("Function:displayBubble", async () => {
    const wrapper = shallowMount(Bubble);
    expect(wrapper.vm.showBubble).toBeFalsy();
    await wrapper.vm.displayBubble();
    await sleep(350);
    expect(wrapper.vm.showBubble).toBeTruthy();
  });

  test("Function:hideBubble", async () => {
    const wrapper = shallowMount(Bubble);
    await wrapper.setData({ showBubble: true });
    await wrapper.vm.hideBubble();
    await sleep(50);
    expect(wrapper.vm.showBubble).toBeFalsy();
  });
  test("Data:newPosition 其值与 prop:position 同步更新", async () => {
    const wrapper = shallowMount(Bubble, { props: { position: "top" } });

    for (let index = 0; index < positionData.length; index++) {
      await wrapper.setProps({ position: positionData[index] });
      expect(wrapper.vm.newPosition).toBe(positionData[index]);
    }
  });
  test.each([TransitionFade])("Prop:customRender", transition => {
    const wrapper = mount(Bubble, {
      props: {
        customRender: (v: any) =>
          h(transition, { position: "top" }, { default: () => v }),
      },
    });

    expect(wrapper.findComponent(transition).exists()).toBeTruthy();
  });
});

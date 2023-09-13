import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import Loading from "../src/index.vue";

describe("Loading", () => {
  test("tag in class", () => {
    expect(mount(Loading).classes()).include("j-loading");
  });
  test.each(["bar", "circle"])("Props:mode", (mode: any) => {
    const wrapper = mount(Loading, { props: { mode } });
    expect(wrapper.classes()).include(mode, mode);

    const svg = wrapper.find("svg");
    if (mode === "bar") {
      expect(svg.exists()).toBeFalsy();
    } else {
      expect(svg.exists()).toBeTruthy();
    }
  });
  test("圆环参数", () => {
    const diameter = 100;
    const lineWidth = 15;
    const wrapper = mount(Loading, {
      props: {
        diameter,
        lineWidth,
      },
    });

    expect(wrapper.vm.circleParameters).toEqual({
      strokeDasharray: Math.PI * (diameter - lineWidth),
      viewBox: `0 0 ${diameter} ${diameter}`,
      r: diameter / 2 - lineWidth / 2,
      strokeWidth: lineWidth,
      cx: diameter / 2,
      cy: diameter / 2,
    });
  });

  test("Props:loading", async () => {
    const wrapper = mount(Loading);
    expect(wrapper.classes()).not.include("loading");
    await wrapper.setProps({ loading: true });
    expect(wrapper.classes()).include("loading");
  });
});

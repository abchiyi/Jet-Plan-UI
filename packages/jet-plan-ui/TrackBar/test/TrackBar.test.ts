import { expect, describe, test } from "vitest";
import { Bumper } from "../../tool/index";
import { mount, shallowMount } from "@vue/test-utils";
import component from "../src/index.vue";

describe("Test TrackBar", () => {
  test("name to class", () => {
    const wrapper = mount(component, { props: { percentage: 1 } });
    expect(wrapper.classes()).contain("j-track-bar");
  });

  test("Bumper", () => {
    const wrapper = mount(component, { props: { percentage: 1 } });
    expect(wrapper.vm.Bumper instanceof Bumper).toBeTruthy();
  });

  test("Methods:trackStart", async () => {
    const wrapper = shallowMount(component, { props: { percentage: 1 } });

    await wrapper.vm.trackStart(new MouseEvent("mousedown"));
    expect(wrapper.emitted()).not.toHaveProperty("trackStart");

    wrapper.vm.Active = true;
    await wrapper.vm.trackStart(new MouseEvent("mousedown"), true);
    const emitted = wrapper.emitted();
    expect(emitted).toHaveProperty("update:percentage");
    expect(emitted).not.toHaveProperty("trackStart");

    await wrapper.vm.trackStart(new MouseEvent("mousedown"), false);
    expect(wrapper.emitted()).toHaveProperty("trackStart");
  });

  test("Methods:trackMove", async () => {
    const wrapper = shallowMount(component, { props: { percentage: 1 } });

    await wrapper.vm.trackMove(new MouseEvent("mousemove"));
    expect(wrapper.emitted()).not.toHaveProperty("trackMove");

    wrapper.vm.Active = true;
    await wrapper.vm.trackMove(new MouseEvent("mousemove"));
    const emitted = wrapper.emitted();
    expect(emitted).toHaveProperty("update:percentage");
    expect(emitted).not.toHaveProperty("trackStart");
    expect(emitted).toHaveProperty("trackMove");
  });

  test("Methods:trackEnd", async () => {
    const wrapper = shallowMount(component, { props: { percentage: 1 } });
    await wrapper.vm.trackStart(new MouseEvent("mousedown"));
    await wrapper.vm.trackEnd();
    expect(wrapper.emitted()).toHaveProperty("trackEnd");
    expect(wrapper.vm.Active).toBeFalsy();
  });

  test("Methods:handleMouseEvent", async () => {
    const wrapper = shallowMount(component, { props: { percentage: 1 } });
    wrapper.vm.handleMouseDown(new MouseEvent("mousedown"));
    expect(wrapper.vm.Active).toBeTruthy();
  });

  test("Methods:handleTouchStart", async () => {
    const wrapper = shallowMount(component, { props: { percentage: 1 } });
    const e = {
      touches: [{ pageX: 0 }],
      preventDefault() {},
      type: "touchstart",
    } as unknown;
    wrapper.vm.handleTouchStart(e as TouchEvent);
    expect(wrapper.vm.Active).toBeTruthy();
  });

  test("Methods:enableTransition", async () => {
    const wrapper = shallowMount(component, { props: { percentage: 1 } });
    await wrapper.vm.enableTransition(false);
    expect(wrapper.classes()).contain("transition-off");
    await wrapper.vm.enableTransition(true);
    expect(wrapper.classes()).not.contain("transition-off");
  });

  test("Prop:disabled", async () => {
    const wrapper = shallowMount(component, {
      props: { percentage: 1, disabled: true },
    });
    const e = {
      touches: [{ pageX: 0 }],
      preventDefault() {},
      type: "touchstart",
    } as unknown;

    expect(wrapper.classes()).include("disabled");

    await wrapper.vm.handleTouchStart(e as TouchEvent);
    expect(wrapper.vm.Active).toBeFalsy();
    await wrapper.vm.handleMouseDown(new MouseEvent("mousedown"));
    expect(wrapper.vm.Active).toBeFalsy();
  });

  test("Prop:displayOnly", async () => {
    const wrapper = shallowMount(component, {
      props: { percentage: 1, displayOnly: true },
    });

    const e = {
      touches: [{ pageX: 0 }],
      preventDefault() {},
      type: "touchstart",
    } as unknown;

    await wrapper.vm.handleTouchStart(e as TouchEvent);
    expect(wrapper.vm.Active).toBeFalsy();
    await wrapper.vm.handleMouseDown(new MouseEvent("mousedown"));
    expect(wrapper.vm.Active).toBeFalsy();
  });
});

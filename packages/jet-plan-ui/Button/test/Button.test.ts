import { mount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import Button from "../src/index.vue";
describe("Button:test", () => {
  test("SnapShots", () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => "slot default",
      },
    });

    expect(wrapper.html()).matchSnapshot();
  });

  test("Slot:default", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "default slot",
      },
    });

    expect(wrapper.text()).toBe("default slot");
  });

  test("Class", async () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => "slot default",
      },
    });

    expect(wrapper.classes()).include("shape");
    expect(wrapper.classes()).include("j-button");
    expect(wrapper.classes()).include("button");

    expect(wrapper.classes()).not.include("disabled");
    expect(wrapper.classes()).not.include("block");

    await wrapper.setProps({
      disabled: true,
      block: true,
    });

    expect(wrapper.classes()).include("disabled");
    expect(wrapper.classes()).includes("block");
  });

  const StyleTypes = ["primary", "warning", "danger", "success"];
  test.each(StyleTypes)("Props:styleType", async styleType => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).not.include(styleType);
    await wrapper.setProps({ styleType });
    expect(wrapper.classes()).include(styleType);
  });

  const Mode = ["text", "button", "outline"];
  test.each(Mode)("Props:mode", (mode: any) => {
    const wrapper = mount(Button, { props: { mode } });
    expect(wrapper.classes()).include(mode);
  });
});

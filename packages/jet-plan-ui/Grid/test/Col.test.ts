import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";

import Col from "../src/col.vue";

describe("RowPlugin", () => {
  test("Base name", () => {
    const wrapper = mount(Col);
    expect(wrapper.classes()).toContain("j-col");
  });

  test("Render:tag", async () => {
    const wrapper = mount(Col);

    // 默认标签为 div
    let tag = wrapper.find("div.j-col");
    expect(tag.exists()).toBeTruthy();

    // 更新’tag' 为 span
    await wrapper.setProps({
      tag: "span",
    });

    tag = wrapper.find("span.j-col");
    expect(tag.exists()).toBeTruthy();
  });

  test("Function:calcWidth", async () => {
    const wrapper = mount(Col);
    expect(wrapper.vm.calcWidth(undefined)).toBe("auto");
    expect(wrapper.vm.calcWidth(6)).toBe("25%");

    // 相对屏幕宽度
    await wrapper.setProps({
      relativeToScreen: true,
    });
    expect(wrapper.vm.calcWidth(undefined)).toBe("auto");
    expect(wrapper.vm.calcWidth(6)).toBe("25vw");
  });

  test("TestPops:Col&Offset", async () => {
    const wrapper = mount(Col);

    // base
    expect(wrapper.vm.col).toBe(undefined);
    expect(wrapper.vm.offset).toBe(undefined);
    // xs
    expect(wrapper.vm.xs).toBe(undefined);
    expect(wrapper.vm.offsetXs).toBe(undefined);
    // sm
    expect(wrapper.vm.sm).toBe(undefined);
    expect(wrapper.vm.offsetSm).toBe(undefined);
    // md
    expect(wrapper.vm.md).toBe(undefined);
    expect(wrapper.vm.offsetMd).toBe(undefined);
    // lg
    expect(wrapper.vm.lg).toBe(undefined);
    expect(wrapper.vm.offsetLg).toBe(undefined);
    // xl
    expect(wrapper.vm.xl).toBe(undefined);
    expect(wrapper.vm.offsetXl).toBe(undefined);

    await wrapper.setProps({
      col: 24,
      xs: 20,
      sm: 16,
      md: 12,
      lg: 8,
      xl: 4,
      offset: 24,
      offsetXs: 20,
      offsetSm: 16,
      offsetMd: 12,
      offsetLg: 8,
      offsetXl: 4,
    });

    // base
    expect(wrapper.vm.col).toBe(24);
    expect(wrapper.vm.offset).toBe(24);
    // xs
    expect(wrapper.vm.xs).toBe(20);
    expect(wrapper.vm.offsetXs).toBe(20);
    // sm
    expect(wrapper.vm.sm).toBe(16);
    expect(wrapper.vm.offsetSm).toBe(16);
    // md
    expect(wrapper.vm.md).toBe(12);
    expect(wrapper.vm.offsetMd).toBe(12);
    // lg
    expect(wrapper.vm.lg).toBe(8);
    expect(wrapper.vm.offsetLg).toBe(8);
    // xl
    expect(wrapper.vm.xl).toBe(4);
    expect(wrapper.vm.offsetXl).toBe(4);
  });

  test("Computed:Style", async () => {
    const wrapper = mount(Col);

    await wrapper.setProps({
      col: 6,
      offset: 6,
    });

    expect(wrapper.vm.style.col).toBe("25%");
    expect(wrapper.vm.style.offset).toBe("25%");

    await wrapper.setProps({
      xs: 6,
      offsetXs: 6,
    });

    expect(wrapper.vm.style.xs).toBe("25%");
    expect(wrapper.vm.style.offsetXs).toBe("25%");

    await wrapper.setProps({
      xs: 0,
      sm: 6,
      offsetSm: 6,
    });
    expect(wrapper.vm.style.hiddenOnXs).toBe("none");
    expect(wrapper.vm.style.sm).toBe("25%");
    expect(wrapper.vm.style.offsetSm).toBe("25%");

    await wrapper.setProps({
      sm: 0,
      md: 6,
      offsetMd: 6,
    });
    expect(wrapper.vm.style.hiddenOnSm).toBe("none");
    expect(wrapper.vm.style.md).toBe("25%");
    expect(wrapper.vm.style.offsetMd).toBe("25%");

    await wrapper.setProps({
      md: 0,
      lg: 6,
      offsetLg: 6,
    });
    expect(wrapper.vm.style.hiddenOnMd).toBe("none");
    expect(wrapper.vm.style.lg).toBe("25%");
    expect(wrapper.vm.style.offsetLg).toBe("25%");

    await wrapper.setProps({
      lg: 0,
      xl: 6,
      offsetXl: 6,
    });
    expect(wrapper.vm.style.hiddenOnLg).toBe("none");
    expect(wrapper.vm.style.xl).toBe("25%");
    expect(wrapper.vm.style.offsetXl).toBe("25%");

    await wrapper.setProps({
      xl: 0,
    });
    expect(wrapper.vm.style.hiddenOnXl).toBe("none");
  });

  test("Slot:default", () => {
    const wrapper = mount(Col, {
      slots: {
        default: "default slot",
      },
    });

    expect(wrapper.text()).toBe("default slot");
  });
});

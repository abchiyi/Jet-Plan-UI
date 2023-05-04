import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Component from "../basePage.vue";
import { defineComponent, h, inject } from "vue";
import router from "src/router";
import {
  triggerScreenSizeDesktop,
  triggerScreenSizeMobile,
  triggerScreenSizeTablet,
} from "./tool";

const wrapper = mount(Component, {
  slots: {
    sidebarLeft: "sidebar left",
    sidebarRight: "sidebar right",
    default: "slot default",
  },
  global: {
    plugins: [router],
  },
});

describe("basePage test", () => {
  test("Slot:default", () => {
    expect(wrapper.find("main").text()).toBe("slot default");
  });

  test("Slot:sidebarLeft", () => {
    expect(wrapper.find("#sidebar-left").text()).toBe("sidebar left");
  });

  test("Computed:Mobile", async () => {
    await triggerScreenSizeMobile();
    expect(wrapper.vm.Mobile).toBeTruthy();

    await triggerScreenSizeTablet();
    expect(wrapper.vm.Mobile).toBeFalsy();
  });

  test("Computed:Tablet", async () => {
    await triggerScreenSizeMobile();
    expect(wrapper.vm.Tablet).toBeFalsy();

    await triggerScreenSizeTablet();
    expect(wrapper.vm.Tablet).toBeTruthy();
  });

  test("Computed:Desktop", async () => {
    await triggerScreenSizeMobile();
    expect(wrapper.vm.Desktop).toBeFalsy();

    await triggerScreenSizeDesktop();
    expect(wrapper.vm.Desktop).toBeTruthy();
  });

  test("Computed:sidebarLeftShow", async () => {
    await triggerScreenSizeMobile();
    expect(wrapper.vm.sidebarLeftShow).toBeFalsy();

    await triggerScreenSizeTablet();
    expect(wrapper.vm.sidebarLeftShow).toBeTruthy();
  });

  test("Computed:class", async () => {
    await triggerScreenSizeMobile();
    expect(wrapper.vm.classes).toContain("mobile");
    await triggerScreenSizeTablet();
    expect(wrapper.vm.classes).toContain("tablet");
    await triggerScreenSizeDesktop();
    expect(wrapper.vm.classes).toContain("desktop");
  });

  test("Computed:drawerTopOpen", async () => {
    await triggerScreenSizeDesktop(); // 重置参数
    await triggerScreenSizeMobile(); // 此按钮仅在 Mobile 模式下生效
    await wrapper.find("#open-drop-menu").trigger("click");
    expect(wrapper.vm.drawerTopOpen).toBeTruthy();

    await triggerScreenSizeDesktop();
    expect(wrapper.vm.drawerTopOpen).toBeFalsy();

    await triggerScreenSizeMobile();
    await wrapper.find("#open-drop-menu").trigger("click");
    expect(wrapper.vm.drawerTopOpen).toBeTruthy();

    await wrapper.find("#open-drop-menu").trigger("click");
    expect(wrapper.vm.drawerTopOpen).toBeFalsy();
  });

  test("Dom:#open-drop-menu(click)", async () => {
    await triggerScreenSizeMobile();
    const Data = wrapper.vm.DrawerTopOpen_data;
    await wrapper.find("#nav-group > #open-drop-menu").trigger("click");
    expect(wrapper.vm.DrawerTopOpen_data).not.toBe(Data);

    expect(wrapper.find("#drawer-top > *").isVisible()).toBeTruthy();
  });

  test("Mobile is false close drawer", async () => {
    await triggerScreenSizeDesktop(); // 触发参数重置

    await triggerScreenSizeMobile();
    await wrapper.find("#open-drop-menu").trigger("click");

    expect(wrapper.vm.Mobile).toBeTruthy();
    expect(wrapper.vm.DrawerTopOpen_data).toBeTruthy();

    await triggerScreenSizeDesktop();
    expect(wrapper.vm.Mobile).toBeFalsy();
    expect(wrapper.vm.DrawerTopOpen_data).toEqual(false);
  });

  test("Method:toOpenDropMen", async () => {
    await triggerScreenSizeDesktop();
    // 在非 Mobile 宽度下不执行值的反转
    expect(wrapper.vm.DrawerTopOpen_data).toBeFalsy();
    await wrapper.vm.toOpenDropMenu();
    expect(wrapper.vm.DrawerTopOpen_data).toBeFalsy();

    await triggerScreenSizeMobile();
    await wrapper.vm.toOpenDropMenu();
    expect(wrapper.vm.DrawerTopOpen_data).toBeTruthy();
    await wrapper.vm.toOpenDropMenu();
    expect(wrapper.vm.DrawerTopOpen_data).toBeFalsy();
  });

  test("Dom:#nav switch to #open-drop-menu in Mobile", async () => {
    function findElIsVisible(selector: string) {
      return wrapper.find(selector).isVisible();
    }
    const selector_nav = "header #nav";
    const selector_openDropMenu = "header #open-drop-menu";

    // header #open-drop-menu 显示于 Mobile 屏幕宽度下
    // header #nav 显示于非 Mobile 屏幕宽度下
    await triggerScreenSizeDesktop();
    expect(findElIsVisible(selector_nav)).toBeTruthy();
    expect(findElIsVisible(selector_openDropMenu)).toBeFalsy();

    await triggerScreenSizeTablet();
    expect(findElIsVisible(selector_nav)).toBeTruthy();
    expect(findElIsVisible(selector_openDropMenu)).toBeFalsy();

    await triggerScreenSizeMobile();
    expect(findElIsVisible(selector_nav)).toBeFalsy();
    expect(findElIsVisible(selector_openDropMenu)).toBeTruthy();
  });

  test("Dom:Class", async () => {
    await triggerScreenSizeMobile();
    expect(wrapper.classes()).toContain("mobile");
    await triggerScreenSizeTablet();
    expect(wrapper.classes()).toContain("tablet");
    await triggerScreenSizeDesktop();
    expect(wrapper.classes()).toContain("desktop");
  });

  test("Provide", async () => {
    const childrenComponent = defineComponent({
      setup() {
        return {
          Mobile: inject<string>("Mobile"),
          Tablet: inject<string>("Tablet"),
          Desktop: inject<string>("Desktop"),
        };
      },
      render() {
        return h("ul", { id: "test-Provide" }, [
          h("li", { id: "test-value-mobile" }, this.Mobile),
          h("li", { id: "test-value-tablet" }, this.Tablet),
          h("li", { id: "test-value-desktop" }, this.Desktop),
        ]);
      },
    });

    const wrapper = mount(Component, {
      slots: {
        default: "<children-component/>",
      },
      global: {
        plugins: [router],
        components: {
          childrenComponent,
        },
      },
    });

    await triggerScreenSizeMobile();
    expect(wrapper.find("#test-value-mobile").text()).toBe("true");

    await triggerScreenSizeTablet();
    expect(wrapper.find("#test-value-tablet").text()).toBe("true");
    expect(wrapper.find("#test-value-mobile").text()).toBe("false");

    await triggerScreenSizeDesktop();
    expect(wrapper.find("#test-value-desktop").text()).toBe("true");
    expect(wrapper.find("#test-value-tablet").text()).toBe("false");
    expect(wrapper.find("#test-value-mobile").text()).toBe("false");
  });

  test("Slots:sidebarRight", () => {
    expect(wrapper.find("#sidebar-right").text()).toBe("sidebar right");
  });

  test("Dom:sidebarRight:仅显示于 Desktop 宽度下", async () => {
    await triggerScreenSizeDesktop();
    expect(wrapper.find("#sidebar-right").isVisible()).toBeTruthy();

    await triggerScreenSizeTablet();
    expect(wrapper.find("#sidebar-right").isVisible()).toBeFalsy();
  });

  test("Dom:sidebarRight:无内容时不显示", async () => {
    await triggerScreenSizeDesktop();
    const wrapper = mount(Component, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find("#sidebar-right").isVisible()).toBeFalsy();
  });
});

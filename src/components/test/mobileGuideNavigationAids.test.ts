import { mobileGuideNavigationAids } from "src/components";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { computed } from "vue";

const provide = { Mobile: true };

describe("Mobile-guide-navigation-aids", () => {
  test("subAppBar:仅显示于 'Mobile'页面宽度下", async () => {
    let wrapper = mount(mobileGuideNavigationAids, {
      global: {
        provide: { Mobile: computed(() => true) },
      },
    });
    expect(wrapper.find("#sub-app-bar").isVisible()).toBeTruthy();

    wrapper = mount(mobileGuideNavigationAids, {
      global: {
        provide: { Mobile: computed(() => false) },
      },
    });
    expect(wrapper.find("#sub-app-bar").isVisible()).not.toBeTruthy();
  });

  test("Method:clickMenu", async () => {
    const wrapper = shallowMount(mobileGuideNavigationAids, {
      global: {
        provide,
      },
    });
    const data = wrapper.vm.drawerLeftExpand;
    expect(data).toBeFalsy();
    await wrapper.vm.clickMenu();
    expect(wrapper.vm.drawerLeftExpand).toBeTruthy();
    await wrapper.vm.clickMenu();
    expect(wrapper.vm.drawerLeftExpand).toBeFalsy();
  });

  test('Dom:点击".button-menu"', async () => {
    const wrapper = mount(mobileGuideNavigationAids, {
      global: {
        provide: { Mobile: true },
      },
    });
    await wrapper.find(".button-menu").trigger("click");
    expect(wrapper.vm.drawerLeftExpand).toBeTruthy();
  });

  test("Dom:Drawer:点击'菜单按钮'可以开启", async () => {
    const wrapper = mount(mobileGuideNavigationAids, {
      global: { provide },
    });

    await wrapper.find(".button-menu").trigger("click");
    expect(wrapper.find("#drawer-left > *").isVisible()).toBeTruthy();
  });

  test("Dom:Drawer: 点击抽屉外遮罩关闭抽屉", async () => {
    const wrapper = mount(mobileGuideNavigationAids, {
      global: { provide },
    });

    await wrapper.find(".button-menu").trigger("click");
    expect(wrapper.find("#drawer-left > *").isVisible()).toBeTruthy();

    await wrapper.find("#drawer-mask").trigger("click");
    expect(wrapper.find("#drawer-left > *").isVisible()).toBeFalsy();
  });

  test("Dom:#drawer-mak:遮罩显示与抽屉同步", async () => {
    const wrapper = mount(mobileGuideNavigationAids, {
      global: { provide },
      data() {
        return {
          drawerLeftExpand: false,
        };
      },
    });

    expect(wrapper.find("#drawer-mask").isVisible()).toBeFalsy();

    await wrapper.setData({
      drawerLeftExpand: true,
    });
    expect(wrapper.find("#drawer-mask").isVisible()).toBeTruthy();
  });

  test("Slot:drawer", () => {
    const content = "slot drawer";
    const wrapper = mount(mobileGuideNavigationAids, {
      slots: { drawer: content },
      global: { provide },
    });

    expect(wrapper.find("#drawer-left").text()).toBe(content);
  });
});

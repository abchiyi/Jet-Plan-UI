import { describe, test, expect } from "vitest";
import component from "../titleAnchorNav.vue";
import { mount } from "@vue/test-utils";

import { createPinia } from "pinia";
import { Button } from "jet-plan-ui";
import router from "src/router";
describe("titleAnchorNav", () => {
  test("Dom:Title:title与'.md'页面'h1'标题保持一致", () => {
    const wrapper = mount(component, {
      global: {
        plugins: [createPinia(), router],
      },
    });

    expect(wrapper.find("strong").text()).toBe("目录");
  });

  test("Dom:Nav:页面锚点导航", () => {
    const wrapper = mount(component, {
      global: {
        plugins: [createPinia(), router],
      },
    });

    const allNav = wrapper.findAll("li > a");
    expect(allNav.length).toBe(2);
    expect(allNav[0].attributes().href).contain("#Hello, this is nav 1 .");
    expect(allNav[0].findComponent(Button).exists()).toBeTruthy();
    expect(allNav[0].text()).toContain("Hello");
  });
});

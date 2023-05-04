import { describe, test, expect } from "vitest";

import { DocCodeBox } from "src/components";
import { mount, shallowMount } from "@vue/test-utils";
import { Button } from "jet-plan-ui";
import { h } from "vue";
describe("Test doc-Code-box", () => {
  test("设置自定义复制按钮", () => {
    const wrapper = mount(DocCodeBox);

    expect(wrapper.findComponent(Button).element.innerHTML).contain(
      '<i class="bi bi-clipboard-plus"></i>'
    );
  });
  test("function getLanguage", () => {
    const wrapper = mount(DocCodeBox, {
      slots: {
        default: () => h("pre", null, h("code", { class: "language-ts" })),
      },
    });
    expect(wrapper.vm.getLanguage()).toEqual({
      autodetect: false,
      language: "ts",
    });
    const wrapper2 = shallowMount(DocCodeBox);
    expect(wrapper2.vm.getLanguage()).toEqual({
      autodetect: true,
      language: "",
    });
  });
});

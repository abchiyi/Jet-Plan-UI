import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import component from "../src/index.vue";
import highlightjsPLugin from "@highlightjs/vue-plugin/src/vue";
import { Button } from "jet-plan-ui";

const code = "console.log('Hello world');";
const codeMultiLine = `<p>1</p>\n<p>2</p>`;

describe("CodeBox:test", () => {
  test("Slot:Default", () => {
    const wrapper = mount(component, {
      slots: {
        default: code,
      },
    });

    expect(wrapper.find("pre > code").text()).toBe(code);
  });

  test("Doc:line number of code", () => {
    const wrapper = mount(component, {
      slots: {
        default: codeMultiLine,
      },
    });

    expect(wrapper.findAll("li").length).toEqual(2);
  });

  test("Prop:code:用于展示的 code", () => {
    const wrapper = mount(component, {
      props: {
        lang: "ts",
        code,
      },
    });

    expect(wrapper.find("code").text()).toEqual(code);
  });

  test("高亮渲染依赖 @highlightjs/vue-plugin ", () => {
    const wrapper = mount(component);
    expect(wrapper.findComponent(highlightjsPLugin.component)).toBeTruthy();
  });

  test("Prop:canCopy", () => {
    const wrapper = shallowMount(component, {
      props: {
        canCopy: true,
        code,
      },
    });

    expect(wrapper.vm.canCopy).toBeTruthy();
  });

  test("Computed:rawCode", async () => {
    const wrapper = shallowMount(component, { slots: { default: code } });
    expect(wrapper.vm.rawCode).toBe(code);

    await wrapper.setProps({
      code: codeMultiLine,
    });
    expect(wrapper.vm.rawCode).toBe(codeMultiLine);
  });

  test("Dom:CopyButton", async () => {
    const wrapper = shallowMount(component);

    expect(wrapper.findComponent(Button).exists()).toBeFalsy();

    await wrapper.setProps({
      canCopy: true,
    });
    expect(wrapper.findComponent(Button).isVisible()).toBeTruthy();
  });

  test("Dom:自定义复制按钮内容", () => {
    const wrapper = mount(component, {
      props: {
        canCopy: true,
      },
      slots: {
        copyButton: "test text",
      },
    });

    expect(wrapper.findComponent(Button).text()).toBe("test text");
  });
});

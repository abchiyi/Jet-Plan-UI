import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import Row from "../src/row.vue";

describe("RowPlugin", () => {
  test("Base name", () => {
    const wrapper = mount(Row);
    expect(wrapper.classes()).toContain("j-row");
  });

  test("Prop:tag", async () => {
    const wrapper = mount(Row);

    // 默认标签为 div
    let tag = wrapper.find("div.j-row");
    expect(tag.exists()).toBeTruthy();

    // 更新’tag' 为 span
    await wrapper.setProps({
      tag: "span",
    });

    tag = wrapper.find("span.j-row");
    expect(tag.exists()).toBeTruthy();
  });
});

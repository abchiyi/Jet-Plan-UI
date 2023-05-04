import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { logoTitle } from "src/components";
import router from "src/router";

const wrapper = mount(logoTitle, {
  global: {
    plugins: [router],
  },
});

describe("titleLogo", () => {
  test("snap shot", () => {
    expect(wrapper.html()).matchSnapshot();
  });

  test("link to HomePage", () => {
    expect(wrapper.attributes().href).toBe("/");
  });
});

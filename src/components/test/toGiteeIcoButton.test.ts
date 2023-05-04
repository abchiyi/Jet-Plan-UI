import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { toGiteeIcoButton } from "src/components";
import { Button } from "jet-plan-ui";

const wrapper = mount(toGiteeIcoButton);
describe("toGiteeIcoButton", () => {
  test("MatchSnapshot", () => {
    expect(wrapper.html()).matchSnapshot();
  });
  test("Dom", () => {
    expect(wrapper.findComponent(Button).exists()).toBeTruthy();
    expect(wrapper.find("svg").exists()).toBeTruthy();
    expect(wrapper.find("a").exists()).toBeTruthy();
  });
});

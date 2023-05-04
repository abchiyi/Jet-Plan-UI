import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { Button } from "jet-plan-ui";
import { toGithubIcoButton } from "src/components";

const wrapper = mount(toGithubIcoButton);
describe("toGithubIcoButton", () => {
  test("MatchSnapshot", () => {
    expect(wrapper.html()).matchSnapshot();
  });
  test("Dom", () => {
    expect(wrapper.findComponent(Button).exists()).toBeTruthy();
    expect(wrapper.find("a").exists()).toBeTruthy();
  });
});

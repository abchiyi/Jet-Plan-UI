import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ActionLabelVue from "../ActionLabel.vue";
import { ActionFeedback } from "jet-plan-ui";

describe("ActionLabel", () => {
  test("tag", () => {
    expect(mount(ActionLabelVue).find("label").exists()).toBeTruthy();
  });

  test("default slot", () => {
    expect(
      mount(ActionLabelVue, { slots: { default: "slot default" } }).text()
    ).toBe("slot default");
  });

  test("component actionFeedback", () => {
    expect(mount(ActionLabelVue).findComponent(ActionFeedback)).toBeTruthy();
  });
});

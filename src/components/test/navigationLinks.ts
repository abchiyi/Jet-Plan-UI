import { expect, test, describe } from "vitest";
import { mount } from "@vue/test-utils";

import navigationLinks from "../navigationLinks.vue";
describe("Test navigationLinks", () => {
  test("MatchSnapshot", () => {
    expect(mount(navigationLinks)).matchSnapshot();
  });
});

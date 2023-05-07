import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import {{compName}} from "../src/index.vue";

describe("{{ compName }}", () => {
  test("tag in class", () => {
    expect(mount({{ compName }}).classes()).include("{{ compClassName }}");
  });
});
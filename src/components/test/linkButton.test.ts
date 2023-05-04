import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import linkButton from "../linkButton.vue";
import router from "src/router";

const path = "/";

describe("Test linkButton", () => {
  test("Dom & Slot", () => {
    const wrapper = mount(linkButton, {
      slots: {
        default: () => "default slot",
      },
      props: {
        to: path,
      },
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find("a").attributes().href).toBe(path);
    expect(wrapper.find("a").exists()).toBeTruthy();
    expect(wrapper.text()).toBe("default slot");
  });

  test("Click", async () => {
    let navigateTriggered = false;
    const wrapper = mount(linkButton, {
      slots: {
        default: () => "default slot",
      },
      props: {
        to: path,
      },
      global: {
        plugins: [router],
        mocks: {
          link: {
            navigate: () => {
              navigateTriggered = true;
            },
            href: { value: "" },
          },
        },
      },
    });

    await wrapper.trigger("click");
    expect(navigateTriggered).toBeTruthy();
  });
});

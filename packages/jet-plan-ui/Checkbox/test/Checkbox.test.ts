import { expect, describe, test, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { h, nextTick } from "vue";

import component from "../src/index.vue";

// 创建被测节点
for (const key in [1, 2]) {
  const el = document.createElement("input");
  el.type = "checkbox";
  el.id = String(key) + "test";
  el.name = "test";
  document.body.appendChild(el);
}

function getInputEl() {
  return {
    el1: document.getElementById("0test") as HTMLInputElement,
    el2: document.getElementById("1test") as HTMLInputElement,
  };
}

function reSet() {
  const els = getInputEl();
  els.el1.checked = false;
  els.el2.checked = false;
}

let wrapper = shallowMount(component, {
  props: { name: "test" },
  slots: {
    default: () => h("input", { type: "checkbox" }),
  },
});

describe("Test Checkbox", () => {
  beforeEach(() => {
    reSet();
    wrapper = shallowMount(component, {
      props: { name: "test" },
      slots: {
        default: () => h("input", { type: "checkbox" }),
      },
    });
  });

  test("Props:name", async () => {
    const wrapper = shallowMount(component, {
      props: { name: "test" },
      slots: {
        default: () => h("input", { type: "checkbox" }),
      },
    });

    expect(wrapper.vm.nameMode).toBeTruthy();
    expect(wrapper.vm.name).toBe("test");
  });

  test("Method:checkAll", async () => {
    await wrapper.vm.checkAll(true);
    let inputEls = getInputEl();
    expect(inputEls.el1.checked && inputEls.el2.checked).toBeTruthy();

    await wrapper.vm.checkAll(false);
    inputEls = getInputEl();
    expect(inputEls.el1.checked && inputEls.el2.checked).toBeFalsy();
  });

  test("Method:getAllCheckbox", () => {
    expect(wrapper.vm.getAllCheckbox().length).toBe(2);
  });

  test("Method:updateStatus", async () => {
    wrapper.vm.updateStatus();
    expect(wrapper.vm.checkboxes).toEqual([false, false]);

    await wrapper.vm.checkAll(true);

    wrapper.vm.updateStatus();
    expect(wrapper.vm.checkboxes).toEqual([true, true]);
  });

  test("Computed:modelCheckAll", async () => {
    await wrapper.setProps({ name: undefined });
    expect(wrapper.vm.modelCheckAll).toBeFalsy();

    await wrapper.setProps({ name: "test" });
    expect(wrapper.vm.modelCheckAll).toBeTruthy();
  });

  test("Computed:selectTheStatus", async () => {
    await wrapper.vm.checkAll(false);
    expect(wrapper.vm.selectTheStatus).toBe(0);

    await wrapper.vm.checkAll(true);
    expect(wrapper.vm.selectTheStatus).toBe(2);

    getInputEl().el1.checked = false;
    await wrapper.vm.updateStatus();
    expect(wrapper.vm.selectTheStatus).toBe(1);
  });

  test("Computed:classes", async () => {
    expect(wrapper.vm.classes).include("shape j-check-box");

    getInputEl().el1.checked = true;
    await wrapper.vm.updateStatus();
    expect(wrapper.vm.checkboxes).include(true).include(false);
    expect(wrapper.vm.classes).include("section-selected");

    await wrapper.vm.checkAll(false);
    expect(wrapper.vm.classes).not.include("section-selected");

    if (wrapper.vm.firstLoad) {
      expect(wrapper.vm.classes).include("first-load");
    } else {
      expect(wrapper.vm.classes).not.include("first-load");
    }
  });

  test("挂载完毕后同步初始值", () => {
    const wrapper = shallowMount(component, {
      slots: {
        default: () => h("input", { type: "checkbox", checked: true }),
      },
    });
    expect(wrapper.vm.getInnerCheckBox().checked).toEqual(wrapper.vm.checked);
  });

  test("监听的'checkbox'值发生变更时调用'updateStatus'", async () => {
    await nextTick();
    const oldValue = wrapper.vm.checkboxes;

    await wrapper.vm.checkAll(true);
    expect(wrapper.vm.checkboxes).not.equal(oldValue);
  });

  test("在'modelCheckAll'下挂载完毕后更新'checkboxes'的值 ", async () => {
    await nextTick();
    expect(wrapper.vm.checkboxes).not.toEqual([]);
  });

  test("根据'InnerCheckBox'的值反转所有监听的'checkbox'的值", async () => {
    const wrapper = shallowMount(component, {
      props: { name: "test" },
      slots: {
        default: () => h("input", { type: "checkbox" }),
      },
    });

    function selectExecute() {
      if (wrapper.vm.checked) {
        expect(wrapper.vm.selectTheStatus).toBe(2);
      } else {
        expect(wrapper.vm.selectTheStatus).toBe(0);
      }
    }

    await wrapper.trigger("click");
    await nextTick();
    await nextTick();
    expect(wrapper.vm.getInnerCheckBox().checked).toBeTruthy();
    selectExecute();

    await wrapper.trigger("click");
    await nextTick();
    await nextTick();
    selectExecute();
  });

  test("'updated'后，更新'InnerCheckBox'的值到'checked'", async () => {
    const wrapper = shallowMount(component, {
      slots: {
        default: () => h("input", { type: "checkbox" }),
      },
    });

    await (async () => {
      wrapper.vm.getInnerCheckBox().checked = true;
      wrapper.vm.getInnerCheckBox().dispatchEvent(new Event("change"));
    })();

    expect(wrapper.vm.checked).toBe(wrapper.get("input").element.checked);
  });
});

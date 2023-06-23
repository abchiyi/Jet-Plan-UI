import { createRouter, createWebHistory } from "vue-router";
import { routerList, linkButton } from "src/components";
import { mount, shallowMount } from "@vue/test-utils";
import { expect, describe, test } from "vitest";
import { defineComponent } from "vue";

const component = defineComponent({});

const componentRouter = [
  {
    name: "ActionFeedback",
    path: "action-feedback",
    component,
  },
  {
    name: "Switch",
    path: "switch",
    component,
  },
  {
    name: "Button",
    path: "button",
    component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component,
      children: componentRouter,
    },
  ],
});

describe('Test "routerList"', () => {
  test("Props", () => {
    const wrapper = shallowMount(routerList, {
      props: {
        title: "test",
        routers: componentRouter,
      },
    });
    expect(wrapper.vm.title).toEqual("test");
    expect(wrapper.vm.routers).toEqual(componentRouter);
  });

  test("Dom", () => {
    const wrapper = mount(routerList, {
      props: {
        title: "title",
        routers: componentRouter,
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find("h2").text()).toEqual("title");

    const DomWrapperList = wrapper.findAll("li > *");
    componentRouter.forEach(item => {
      expect([undefined, null, "", "undefined", "null"]).not.contain(item.name);
      const el = DomWrapperList.filter(DWL => DWL.text() == item.name)[0];
      expect(el).toBeTruthy();
      if (el) {
        expect(el.getComponent(linkButton)).toBeTruthy();
        expect(el.attributes("aria-label")).toBe(item.name);
      }
    });
  });

  test("组件链接分类", async () => {
    const wrapper = mount(routerList, {
      props: {
        title: "title",
        classify: true,
        routers: componentRouter,
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.vm.routerClassify).toEqual({
      basic: ["ActionFeedback", "Button"],
      from: ["Switch"],
    });

    await wrapper.setProps({
      title: "title",
      classify: false,
      routers: componentRouter,
    });

    expect(wrapper.vm.routerClassify).toEqual({});
  });
});

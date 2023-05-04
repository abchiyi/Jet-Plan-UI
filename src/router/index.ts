import { createRouter, createWebHistory } from "vue-router";
import type { RouterOptions } from "vue-router";

import components from "./routerComponents";

// 导航链接 "开始"
const Start: RouterOptions["routes"] = [
  {
    name: "快速开始",
    path: "quick-start",
    component: () => import("../view/GuideDoc/QuickStart.md"),
  },
];

// 导航链接 "工具"
const Tool: RouterOptions["routes"] = [
  {
    name: "主题",
    path: "theme",
    component: () => import("packages/jet-plan-ui/theme/docs/README.md"),
  },
];

// 页面
const routes: RouterOptions["routes"] = [
  {
    path: "/",
    component: () => import("src/view/theHome.vue"),
  },
  {
    path: "/docs",
    redirect: Start[0],
    component: () => import("@/view/theDoc.vue"),
    children: [
      ...components,
      ...Start,
      ...Tool,
      {
        name: "关于",
        path: "about",
        component: () => import("../../README.md"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("../../README.md"),
  },
  {
    // XXX 创建真正的的 component-list
    path: "/component-list",
    component: () => import("@/view/theAbout.md"),
  },
];

// Router config
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    // 返回顶部
    const isAnchor = to.fullPath.indexOf("#") !== -1;
    if (!isAnchor && from.fullPath.indexOf(to.fullPath) !== -1) {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }

    // 锚点滚动
    if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ el: to.hash, top: 110, behavior: "smooth" });
        }, 50);
      });
    }

    // 新地址，等待过渡动画应用
    if (to !== from)
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ top: 0, left: 0 });
        }, 200);
      });
  },
});

export {
  components as componentRouter,
  Start as routerStart,
  Tool as routerTool,
};

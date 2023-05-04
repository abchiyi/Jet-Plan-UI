<template>
  <div class="base-page" :class="classes">
    <header id="app-bar" class="app-bar frosted-glass">
      <j-row Y="center" id="header-group" space-mode="between">
        <logo-title id="logo-title" />

        <div id="nav-group">
          <!-- 导航菜单按钮 -->
          <j-button
            @click="toOpenDropMenu"
            id="open-drop-menu"
            v-show="Mobile"
            text
          >
            <i :class="['bi', drawerTopOpen ? 'bi-x' : 'bi-list']"></i>
          </j-button>

          <!-- 导航链接 -->
          <div id="nav" v-show="!Mobile">
            <!-- TODO dark mode switch -->
            <link-button to="/about" aria-label="关于" text>关于</link-button>

            <link-button to="/component-list" aria-label="组件列表" text>
              组件列表
            </link-button>

            <toGiteeIcoButton />
            <toGithubIcoButton />
          </div>
        </div>
      </j-row>
    </header>

    <j-row id="content-shell" X="center">
      <div id="sidebar-left" v-show="sidebarLeftShow">
        <slot name="sidebarLeft"></slot>
      </div>
      <div id="content">
        <main>
          <slot></slot>
        </main>
        <j-row tag="footer" Y="center" X="center">
          <p class="license">
            Released under the Apache 2.0 License. Created by abchiyi
          </p>
        </j-row>
      </div>
      <div id="sidebar-right" v-show="Desktop && $slots.sidebarRight">
        <slot name="sidebarRight"></slot>
      </div>
    </j-row>

    <j-drawer :expand="drawerTopOpen" id="drawer-top" from="top" opacity>
      <ul id="nav-link-group-drop-menu">
        <link-button to="/about" aria-label="关于">关于</link-button>
        <link-button to="/component-list" aria-label="组件列表">
          组件列表
        </link-button>
      </ul>
      <hr />
      <div id="social-links">
        <toGiteeIcoButton />
        <toGithubIcoButton />
      </div>
    </j-drawer>
  </div>
</template>

<script lang="ts">
import { Row as JRow, Button as JButton, Drawer as JDrawer } from "jet-plan-ui";
import { getWindowWidthIn, shadowPainter } from "jet-plan-ui/tool";

import toGiteeIcoButton from "./toGiteeIcoButton.vue";
import toGithubIcoButton from "./toGithubIcoButton.vue";
import linkButton from "./linkButton.vue";
import logoTitle from "./logoTitle.vue";
import { defineComponent, computed, provide } from "vue";

export default defineComponent({
  name: "base-page",
  setup() {
    const wbp = getWindowWidthIn();

    const Mobile = computed(() => {
      return ["xs", "sm"].includes(wbp.value);
    });
    provide("Mobile", Mobile);

    const Tablet = computed(() => {
      return ["md", "lg"].includes(wbp.value);
    });
    provide("Tablet", Tablet);

    const Desktop = computed(() => {
      return ["xl"].includes(wbp.value);
    });

    provide("Desktop", Desktop);

    return {
      wbp,
      Mobile,
    };
  },
  components: {
    linkButton,
    JButton,
    JDrawer,
    JRow,
    logoTitle,
    toGiteeIcoButton,
    toGithubIcoButton,
  },
  data() {
    return {
      // TODO 使用主题定义色彩
      headerShadow: shadowPainter("bottom", 2, "#76909233"),
      DrawerTopOpen_data: false,
    };
  },
  computed: {
    sidebarLeftShow() {
      if (this.$slots.sidebarLeft && (this.Tablet || this.Desktop)) {
        return true;
      }
      return false;
    },

    drawerTopOpen() {
      return this.Mobile && this.DrawerTopOpen_data;
    },

    Tablet() {
      return ["md", "lg"].includes(this.wbp);
    },
    Desktop() {
      return ["xl"].includes(this.wbp);
    },

    classes() {
      return [
        this.Desktop ? "desktop" : "",
        this.Tablet ? "tablet" : "",
        this.Mobile ? "mobile" : "",
      ];
    },
  },
  watch: {
    Mobile(v) {
      // 屏幕断点 Mobile 为 false 关闭 DrawerLeftOpen_data
      if (!v) this.DrawerTopOpen_data = v;
    },
  },
  methods: {
    toOpenDropMenu() {
      if (this.Mobile) {
        this.DrawerTopOpen_data = !this.DrawerTopOpen_data;
      }
    },
  },
});
</script>
<style>
/* 变量设定 */
.base-page {
  --CONTENT-WIDTH-MAIN: 760px;
  --CONTENT-WIDTH: 1400px;
  --WIDTH-DRAWER: 255px;
  --HEIGHT-HEADER: 50px;
  --HEIGHT-FOOTER: 2rem;
  --TOP-SPACE: calc(1rem + var(--HEIGHT-HEADER));
  --HEIGHT-MAIN: calc(100vh - var(--TOP-SPACE) - var(--HEIGHT-FOOTER));
}

/* 侧栏 （左&右）*/
.base-page #sidebar-right,
.base-page #sidebar-left {
  height: var(--HEIGHT-MAIN);
  box-sizing: border-box;
  top: var(--TOP-SPACE);
  position: sticky;
  overflow-y: auto;
  width: 280px;
}

.base-page #sidebar-left {
  border-right: dashed 2px var(--border);
  margin-right: 30px;
}

.base-page #sidebar-right {
  border-left: dashed 2px var(--border);
  margin-left: 30px;
}

/* 下拉抽屉 */
#drawer-top {
  /* 强制应用变量以覆盖组件参数设定 */
  --migration-distance: translate3d(0, -30px, 0) !important;
  padding-top: var(--HEIGHT-HEADER);
  background: var(--background);
  height: 100vh;
}

/* 抽屉内容 */
#nav-link-group-drop-menu {
  padding: unset;
}
#nav-link-group-drop-menu > * {
  margin: 0.5rem auto;
  list-style: unset;
  font-size: 1rem;
  display: block;
  width: 255px;
}

/* ----- 文档外壳 */
.base-page > #content-shell {
  /* 页头不会覆盖文档 */
  max-width: var(--CONTENT-WIDTH);
  padding-top: var(--TOP-SPACE);
  margin: 0 auto;
}

/* 取消移动页面页头内边距 */
.base-page.mobile > #content-shell {
  padding-top: 0;
}

/* ----- 文档内容节点(仅正文) */
.base-page #content > main {
  min-height: var(--HEIGHT-MAIN);
  box-sizing: border-box;
  padding: 0 1rem;
}
.base-page #content {
  width: 100%;
}

/* 禁用标题的上外边距,该外边距会超出容器导致页面高度异常 */
.base-page main h1 {
  margin-top: unset;
}

/* ----- 文档内容节点(包含 footer) */
.base-page > #content-shell > #content {
  box-sizing: border-box;
  width: 100%;
}

/* ----- 页头 */
.app-bar {
  box-shadow: v-bind("headerShadow");
  height: var(--HEIGHT-HEADER);
  margin-top: unset !important;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
}

.base-page.mobile > #app-bar {
  /*使用'sticky'定位于屏幕顶部时避免上边缘暴露下层文档内容。超出屏幕边缘以遮盖*/
  top: calc(-1.5 * var(--HEIGHT-HEADER));
  position: sticky;
}

/* ----- 页头内容组 */
#header-group {
  max-width: var(--CONTENT-WIDTH);
  margin: auto;
  height: 100%;
}

/* ----- 其他杂项 */

/* 使图像对其文本 */
.j-button img,
.j-button svg {
  vertical-align: -0.125em;
}

/* ----- 页头导航链接 */
#nav > * {
  vertical-align: middle;
}

#nav > *:hover {
  color: var(--primary);
}

#nav > .j-button {
  font-size: 1rem;
}

/* ----- 页脚 */
footer {
  height: var(--HEIGHT-FOOTER);
}
footer > .license {
  box-sizing: border-box;
  font-size: 12px;
  height: 1.2em;
  opacity: 0.3;
  margin: 0;
}

/* ----- 下拉抽屉 */

#drop-drawer {
  height: 100vh;
  width: 100vw;
}
/* 社交链接 */
#social-links {
  justify-content: center;
  display: flex;
}
#social-links > * {
  font-size: 24px;
}

/* ----- 开启&关闭 下拉抽屉按钮 */
#open-drop-menu {
  font-size: 1.5rem;
}
</style>

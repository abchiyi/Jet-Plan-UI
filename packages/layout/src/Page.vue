<template>
  <div
    id="page"
    :class="modelValue ? 'is-open' : 'is-closed'"
    v-rss="reScreenSize"
  >
    <!-- 头栏 -->
    <m-header class="frosted-glass" v-shadow:bottom="2">
      <m-row Y="center">
        <m-col v-bind="width.mainContentWidth" relativeToScreen>
          <slot name="header"></slot>
        </m-col>
      </m-row>
    </m-header>
    <!-- 正文内容外壳,主页布局  -->
    <m-row>
      <m-col v-bind="width.mainContentWidth" relativeToScreen>
        <!-- 正文内容 -->
        <m-row tag="main" X="center">
          <div id="content-body">
            <slot></slot>
          </div>
        </m-row>
        <hr />
        <m-row tag="footer" X="center">
          <slot name="footer"></slot>
        </m-row>
      </m-col>
    </m-row>
    <!-- 侧栏 -->
    <m-sidebar v-shadow:right="2" :dock="sidebarDock" v-model="sidebarExpand">
      <m-row no-gap>
        <m-col v-bind="width.sidebarDispaly" relativeToScreen>
          <slot name="sidebar" />
        </m-col>
      </m-row>
    </m-sidebar>
  </div>
</template>

<script >
import { Focus, ReScreenSize } from "../../tool";
export default {
  name: "m-page",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue"
  },
  data() {
    return {
      contentBody: {
        colXs: 24,
        colSm: 24,
        colMd: 24,
        colLg: 16,
        colXl: 16,
        col: 16
      },
      sidebarOpenIn: ["xs", "sm"],
      sidebarExpand: true,
      sidebarDock: undefined
    };
  },
  methods: {
    reScreenSize(v) {
      v.contains(this.sidebarOpenIn, bool => {
        this.sidebarDock = !bool;
        if (bool) {
          this.$emit("update:modelValue", false);
        } else {
          this.$emit("update:modelValue", true);
        }
      });
    }
  },
  directives: {
    focus: Focus,
    rss: ReScreenSize
  },
  computed: {
    width() {
      const sidebarDispaly = {
        col: 3,
        lg: 5,
        sm: 10,
        xs: 15
      };

      const mainContentWidth = {
        col: this.modelValue ? 24 - sidebarDispaly.col : 24,
        lg: this.modelValue ? 24 - sidebarDispaly.lg : 24,
        sm: 24,
        // offset
        offset: this.modelValue ? sidebarDispaly.col : 0,
        offsetLg: this.modelValue ? sidebarDispaly.lg : 0,
        offsetSm: 0
      };

      return {
        sidebarDispaly: sidebarDispaly,
        mainContentWidth: mainContentWidth
      };
    }
  },
  watch: {
    modelValue(v) {
      this.sidebarExpand = v;
    },
    sidebarExpand(v) {
      this.$emit("update:modelValue", v);
    }
  }
};
</script>

<style scoped>
#content-body,
main,
footer {
  --MIN-HEIGHT-CONTENT: 100vh;
  --HEIGHT-FOOTER: 150px;
  --HEIGHT-HEADER: 72px;
  --TOP-MARGIN: 100px;
}
.m-header > .m-row {
  height: 72px;
}

main {
  margin-top: var(--TOP-MARGIN);
}

main > #content-body {
  min-height: var(--MIN-HEIGHT-CONTENT);
  overflow: hidden;
  max-width: 960px;
  padding: 0 20px;
  width: 100%;
}
footer {
  height: var(--HEIGHT-FOOTER);
  box-sizing: border-box;
  margin-top: 20px;
}
</style>

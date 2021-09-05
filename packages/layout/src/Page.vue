<template>
  <div id="page">
    <!-- 头栏 -->
    <m-header :class="modelValue ? 'is-open' : ''">
      <m-row>
        <m-col
          class="frosted-glass"
          v-bind="width.mainContentWidth"
          relativeToScreen
        >
          <slot name="header"></slot>
        </m-col>
      </m-row>
    </m-header>
    <!-- 正文内容外壳,主页布局  -->
    <m-row>
      <m-col
        v-bind="width.mainContentWidth"
        id="m-main-content"
        relativeToScreen
        tag="main"
      >
        <!-- 正文内容 -->
        <m-row X="center">
          <div id="content-body">
            <slot></slot>
          </div>
        </m-row>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </m-col>
    </m-row>
    <!-- 侧栏 -->
    <m-sidebar :expand="modelValue" v-focus="sidebarClose">
      <m-row no-gap>
        <m-col v-bind="width.sidebarDispaly" relativeToScreen>
          <slot name="sidebar" />
        </m-col>
      </m-row>
    </m-sidebar>
  </div>
</template>

<script >
import { Focus } from "../../tool";
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
      sidebar: false
    };
  },
  methods: {
    sidebarClose(value) {
      if (this.modelValue && !value) {
        this.$emit("update:modelValue", false);
      }
    }
  },
  directives: {
    focus: Focus
  },
  watch: {
    modelValue(v) {
      this.sidebar = v;
    }
  },
  computed: {
    width() {
      const sidebarDispaly = {
        xl: 3,
        lg: 3,
        md: 5,
        sm: 5,
        xs: 15
      };

      const mainContentWidth = {
        lg: this.modelValue ? 24 - sidebarDispaly.lg : 24,
        xl: this.modelValue ? 24 - sidebarDispaly.xl : 24,
        md: this.modelValue ? 24 - sidebarDispaly.md : 24,
        // offset
        offsetXl: this.modelValue ? sidebarDispaly.lx : 0,
        offsetLg: this.modelValue ? sidebarDispaly.lg : 0,
        offsetMd: this.modelValue ? sidebarDispaly.md : 0
      };

      return {
        sidebarDispaly: sidebarDispaly,
        mainContentWidth: mainContentWidth
      };
    }
  }
};
</script>

<style scoped>
#content-body {
  max-width: 768px;
  width: 100%;
}
main {
  margin-top: 100px;
}
</style>

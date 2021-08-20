<template>
  <div id="page">
    <!-- 头栏 -->
    <m-header :class="value ? 'is-open' : ''">
      <m-row>
        <m-col class="frosted-glass" v-bind="mainContentWidth" relativeToScreen>
          <slot name="header"></slot>
        </m-col>
      </m-row>
    </m-header>
    <!-- 主文本内容区 控制页面宽度  -->
    <m-row>
      <m-col
        v-bind="mainContentWidth"
        id="m-main-content"
        relativeToScreen
        tag="main"
      >
        <m-row X="center">
          <m-col v-bind="contentBody" id="content-body">
            <slot></slot>
          </m-col>
        </m-row>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </m-col>
    </m-row>
    <!-- 侧栏 -->
    <m-sidebar :expand="value">
      <m-row no-gap>
        <m-col v-bind="sidebarDispaly" relativeToScreen>
          <slot name="sidebar" />
        </m-col>
      </m-row>
    </m-sidebar>
  </div>
</template>

<script >
export default {
  name: "m-page",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sidebarDispaly: {
        xs: 15,
        sm: 5,
        md: 5,
        lg: 4,
        xl: 4
      },
      contentBody: {
        colXs: 24,
        colSm: 24,
        colMd: 24,
        colLg: 16,
        colXl: 16,
        col: 16
      },
      sidebar: true
    };
  },
  computed: {
    mainContentWidth() {
      const mainContentWidth = {
        md: 19,
        lg: 20,
        xl: 20,
        // offset
        offsetMd: 4,
        offsetLg: 4,
        offsetXl: 4
      };

      if (!this.value) {
        mainContentWidth.offsetMd = 0;
        mainContentWidth.offsetLg = 0;
        mainContentWidth.offsetXl = 0;
        mainContentWidth.md = 24;
        mainContentWidth.lg = 24;
        mainContentWidth.xl = 24;
      }

      return mainContentWidth;
    }
  }
};
</script>

<style scoped>
main {
  margin-top: 100px;
}
</style>

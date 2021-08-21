<template>
  <div id="page">
    <!-- 头栏 -->
    <m-header :class="value ? 'is-open' : ''">
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
    <m-sidebar :expand="value">
      <m-row no-gap>
        <m-col v-bind="width.sidebarDispaly" relativeToScreen>
          <slot name="sidebar" />
        </m-col>
      </m-row>
    </m-sidebar>
  </div>
</template>

<script >
export default {
  mounted() {
    console.log(this.width);
  },
  name: "m-page",
  props: {
    value: {
      type: Boolean,
      default: false
    }
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
      sidebar: true
    };
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
        lg: this.value ? 24 - sidebarDispaly.lg : 24,
        xl: this.value ? 24 - sidebarDispaly.xl : 24,
        md: this.value ? 24 - sidebarDispaly.md : 24,
        // offset
        offsetXl: this.value ? sidebarDispaly.lx : 0,
        offsetLg: this.value ? sidebarDispaly.lg : 0,
        offsetMd: this.value ? sidebarDispaly.md : 0
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

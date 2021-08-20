<template>
  <div ref="self" id="page">
    <!-- 头栏 -->
    <m-header :class="this.value ? 'is-open' : ''">
      <slot name="header"></slot>
    </m-header>
    <!-- 主文本内容区 -->
    <m-row>
      <m-col v-bind="mainContentWidth" relativeToScreen id="m-main-content">
        <main>
          <m-row center>
            <m-col v-bind="contentBody" id="content-body">
              <slot></slot>
            </m-col>
          </m-row>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </m-col>
    </m-row>
  </div>
</template>

<script >
import size from "./Size";
export default {
  name: "m-page",
  mixins: [size],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sidebarDispaly: {
        colXs: 15,
        colSm: 5,
        colMd: 5,
        colLg: 5,
        colXl: 5,
      },
      contentBody: {
        colXs: 24,
        colSm: 24,
        colMd: 24,
        colLg: 16,
        colXl: 16,
        col: 16,
      },
      sidebar: true,
    };
  },
  computed: {
    mainContentWidth() {
      const mainContentWidth = {
        colXs: 24,
        colSm: 24,
        colMd: 21,
        colLg: 21,
        colXl: 21,
        // offset
        offsetXs: 0,
        offsetSm: 0,
        offsetMd: 3,
        offsetLg: 3,
        offsetXl: 3,
      };

      if (!this.value) {
        mainContentWidth.offsetMd = 0;
        mainContentWidth.offsetLg = 0;
        mainContentWidth.offsetXl = 0;
        mainContentWidth.colMd = 24;
        mainContentWidth.colLg = 24;
        mainContentWidth.colXl = 24;
      }

      return mainContentWidth;
    },
  },
  methods: {
    expand() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style scoped>
main {
  margin-top: 100px;
}

.is-open {
  left: 12.5vw;
}
</style>

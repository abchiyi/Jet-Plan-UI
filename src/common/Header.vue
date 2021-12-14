<template>
  <m-row class="header" Y="center" X="center" spaceMode="between">
    <!-- 标题 -->
    <slot name="title">
      <h1>Mousse UI</h1>
    </slot>
    <!-- 侧栏开关 -->
    <div>
      <m-switch v-model="colorMode" />
      <m-button text title="menu" @click.stop="click">
        <i style="font-size: 2rem" class="bi bi-list"></i>
      </m-button>
    </div>
  </m-row>
</template>

<script>
import { getCookie, setCookie } from "../common";
import { theme, themeDefault } from "../../packages";
function setColorTheme(b = Boolean()) {
  b
    ? theme.use(themeDefault.colors.Light)
    : theme.use(themeDefault.colors.Dark);
}
export default {
  name: "demo-header",
  data() {
    return {
      // TODO读取cookis确定值
      colorMode: true,
    };
  },
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  methods: {
    click() {
      this.$emit("update:modelValue", this.modelValue ? false : true);
    },
    redColorModeCookie() {
      /* 从Cookie 加载颜色主题设置,如为'null'则设置为 'true'即'Light Mode' */
      let colorMode = Boolean(getCookie("colorMode"));
      if (colorMode === null) {
        this.setColorModeCookie(true);
        return true;
      }
      return colorMode;
    },
    setColorModeCookie(b = Boolean()) {
      setCookie("colorMode", b ? "1" : "");
    },
  },
  created() {
    // XXX 组件每被引用一次将执行一次主题初始化设置,可能的性能浪费
    this.colorMode = this.redColorModeCookie();
    setColorTheme(this.redColorModeCookie());
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue",
  },
  watch: {
    colorMode(b) {
      // 变更时重设主题'cookie'
      this.setColorModeCookie(b);
      setColorTheme(b);
    },
  },
};
</script>

<style>
</style>

<template>
  <m-header>
    <m-row class="header" Y="center" X="center" spaceMode="between">
      <!-- 标题 -->
      <h1>Text</h1>
      <!-- 侧栏开关 -->
      <m-button
        text
        title="menu"
        @click.stop="
          () => {
            this.value = !this.value;
          }
        "
      >
        <i style="font-size: 2rem" class="bi bi-list"></i>
      </m-button>
      <m-switch v-model="colorMode" />
    </m-row>
  </m-header>
</template>

<script>
import { theme, themeDefault } from "../../packages";
function setColorTheme(b = Boolean()) {
  let light = themeDefault.colors.Light;
  let Dark = themeDefault.colors.Dark;
  b ? theme.use(light) : theme.use(Dark);
}
export default {
  name: "demo-header",
  data() {
    return {
      // TODO读取cookis确定值
      colorMode: true,
    };
  },
  watch: {
    colorMode(b) {
      // TODO 色彩模式变更后写入cookis
      setColorTheme(b);
    },
  },
};
</script>

<style>
</style>

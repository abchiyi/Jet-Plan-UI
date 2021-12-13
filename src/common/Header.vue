<template>
  <m-row class="header" Y="center" X="center" spaceMode="between">
    <!-- 标题 -->
    <slot name="title">
      <h1>Mousse UI</h1>
    </slot>
    <!-- 侧栏开关 -->
    <div>
      <m-switch v-model="colorMode" />
      <m-button text title="menu" @click="click">
        <i style="font-size: 2rem" class="bi bi-list"></i>
      </m-button>
    </div>
  </m-row>
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
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  methods: {
    click() {
      console.log(this.modelValue);
      this.$emit("update:modelValue", this.modelValue ? false : true);
    },
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue",
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

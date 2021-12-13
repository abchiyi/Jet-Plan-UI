<template>
  <div id="the-test-page">
    <m-switch-item v-model="value">
      {{ value ? "light" : "dark" }}
    </m-switch-item>
    <m-switch v-model="value1"></m-switch>
    <m-switch v-model="value1"></m-switch>
    <Input />
  </div>
</template>
<script>
import { Input } from "../../../packages/form";
import ui from "../../../packages";
import theme from "../../../packages/theme_default";
export default {
  name: "TheTestPage",
  components: {
    Input,
  },
  data() {
    return {
      value: false,
      value1: false,
    };
  },
  mounted() {
    this.setColor(this.value);
  },
  methods: {
    on() {
      this.value = true;
    },
    off() {
      this.value = false;
    },
    test(evet) {
      console.log(evet);
    },
    setColor(b) {
      b ? ui.theme.use(theme.colors.Light) : ui.theme.use(theme.colors.Dark);
    },
  },
  watch: {
    value(v) {
      this.setColor(v);
    },
  },
};
</script>

<style>
.test-box {
  height: 300px;
  border-radius: 16px;
  border: solid 4px var(--grey);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.t1 {
  padding: 10px;
  background: rgb(78, 201, 180);
}
</style>

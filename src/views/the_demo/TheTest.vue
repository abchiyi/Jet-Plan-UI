<template>
  <div id="the-test-page">
    <m-switch-item v-model="value">
      {{ value ? "light" : "dark" }}
    </m-switch-item>
    <Input />
  </div>
</template>
<script>
import { Input } from "../../../packages/form";
import { colors } from "../../../packages/theme_default";
import { use } from "../../../packages/theme";
export default {
  name: "TheTestPage",
  components: {
    Input,
  },
  data() {
    return {
      value: false,
    };
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
  },
  watch: {
    value(v) {
      v ? use(colors.Light) : use(colors.Dark);
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

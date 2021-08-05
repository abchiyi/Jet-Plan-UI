<template>
  <m-row :class="classes" center middle>
    <slot></slot>
  </m-row>
</template>

<script>
export default {
  name: "m-cube",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let classes = ["m-cube"];
      if (this.dark) classes.push("dark");
      return classes;
    },
  },
};
</script>

<style>
.m-cube {
  width: 100px !important;
  height: 100px;
  border-radius: 4px;
  background-color: #1687a7;
  /* 文本设置 */
  font-size: 20px;
  color: #fff;
  transition: 0.4s ease-in-out;
}
.m-cube.dark {
  background-color: #0b81a1;
}
</style>

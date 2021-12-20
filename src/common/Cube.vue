<template>
  <m-row :class="classes" X="center" Y="center">
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
  width: 100px;
  height: 100px;
  border-radius: var(--s-radius);
  background-color: var(--primary);
  /* 文本设置 */
  color: #fff;
  transition: 0.4s ease-in-out;
}
.m-cube.dark {
  background-color: var(--secondary);
  color: inherit;
  font-weight: bolder;
}
</style>

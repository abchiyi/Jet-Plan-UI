<template>
  <m-list-item :class="className" @click="click">
    <slot />
  </m-list-item>
</template>

<script>
export default {
  name: "router-link-a",
  props: {
    href: String,
    modelValue: String,
    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    className() {
      return ["router-link-a", this.modelValue == this.href ? "active" : ""];
    },
  },
  methods: {
    click() {
      if (this.href) {
        this.$router.push(this.href);
        this.$emit("update:modelValue", this.href);
      }
    },
  },
};
</script>

<style>
.router-link-a {
  text-align: start;
  /* margin: 2px 0; */
}
.router-link-a.active {
  color: var(--primary);
}
</style>

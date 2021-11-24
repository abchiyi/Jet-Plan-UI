<template>
  <m-button :class="className" @click="click" row text hoverAnimation>
    <slot />
  </m-button>
</template>

<script>
export default {
  name: "RouterLinkButton",
  props: {
    url: String,
    modelValue: String,
    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    className() {
      return [
        "router-link-button",
        this.modelValue == this.url ? "active" : "",
      ];
    },
  },
  methods: {
    click() {
      this.$router.push(this.url);
      this.$emit("update:modelValue", this.url);
    },
  },
};
</script>

<style scoped>
.router-link-button {
  text-align: start;
  margin: 2px 0;
}
.router-link-button.active {
  color: var(--main-0);
}
</style>

<template >
  <m-button row text hover @click="click">
    <m-row space-mode="between">
      <strong>
        <slot name="text">ShowMenu</slot>
      </strong>
      <i :class="iconClass"></i>
    </m-row>
  </m-button>
  <div class="more-content">
    <slot></slot>
  </div>
  <!-- <hr class="expand-hr" /> -->
</template>
<script>
export default {
  name: "expand-menu",
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  computed: {
    iconClass() {
      return ["bi bi-chevron-right", this.modelValue ? "expand" : ""];
    },
  },
  methods: {
    click() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>
<style>
.bi {
  transition: all 0.3s var(--ease-out);
}
.bi.expand {
  transform: rotate(90deg);
}
.more-content {
  margin-left: 1em;
  margin-bottom: 0.5em;
}
.expand-hr {
  margin-left: 8px;
  margin-right: 8px;
}
</style>

<template>
  <m-row class="m-switch-item" X="center" Y="center" space-mode="between">
    <p><slot></slot></p>
    <m-switch size="24" v-model="value" />
  </m-row>
</template>

<script>
export default {
  name: "m-switch-item",
  props: {
    modelValue: [Boolean],
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue",
  },
  created() {
    this.value = this.modelValue;
  },
  data() {
    return {
      value: false,
    };
  },
  watch: {
    value() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

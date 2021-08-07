<template>
  <m-row class="m-switch-item" middle between>
    <p><slot></slot></p>
    <m-switch size="24" v-model="v" />
  </m-row>
</template>

<script>
export default {
  name: "m-switch-item",
  mounted() {
    this.v = this.value;
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      br: undefined,
      v: undefined,
    };
  },
  watch: {
    v() {
      this.$emit("change", this.v);
    },
  },
};
</script>

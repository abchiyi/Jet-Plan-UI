<template>
  <div>
    <m-row class="m-switch-item" middle between>
      <p><slot></slot></p>
      <m-button @click="v()"></m-button>
    </m-row>
  </div>
</template>

<script>
export default {
  name: "m-button-item",
  methods: {
    v() {
      this.$emit("click", this.v);
    },
  },
};
</script>

<style>
</style>

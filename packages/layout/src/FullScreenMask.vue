<template>
  <span @click="clicked" class="full-screen-mask"> </span>
</template>

<script>
export default {
  name: "FullScreenMask",
  methods: {
    clicked() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.full-screen-mask {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: --var(--shadow);
}
</style>

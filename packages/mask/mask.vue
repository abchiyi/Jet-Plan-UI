<template>
  <fade>
    <div class="mask"></div>
  </fade>
</template>

<script>
import fade from "../../packages/animations/src/TransitionFade.vue";
export default {
  name: "Mask",
  components: {
    fade
  }
};
</script>

<style>
.mask {
  background-color: var(--shadow);
  opacity: 0.3;
  position: absolute;
  height: 120%;
  width: 120%;
  top: -10%;
  left: -10%;
}
</style>

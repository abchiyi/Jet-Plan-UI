<template>
  <fade :value="value">
    <div class="mask"></div>
  </fade>
</template>

<script>
import fade from "../animations/src/TransitionFade.vue";
export default {
  name: "mMask",
  components: {
    fade
  },
  props: {
    value: Boolean
  }
};
</script>

<style>
.mask {
  background-color: var(--shadow);
  position: absolute;
  opacity: 0.3;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>

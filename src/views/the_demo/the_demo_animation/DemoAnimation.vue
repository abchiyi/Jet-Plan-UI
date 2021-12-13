<template>
  <div>
    <demo-animation-fade></demo-animation-fade>
    <demo-animation-slide></demo-animation-slide>
    <demo-animation-folded></demo-animation-folded>
  </div>
</template>
<script>
import DemoAnimationFade from "./DemoAnimationFade.vue";
import DemoAnimationSlide from "./DemoAnimationSlide.vue";
import DemoAnimationFolded from "./DemoAnimationFolded.vue";

export default {
  name: "DemoAnimation",
  components: {
    DemoAnimationFade,
    DemoAnimationSlide,
    DemoAnimationFolded,
  },
  data() {
    return {
      v1: true,
      v2: false,
    };
  },
  computed: {
    classes() {
      return ["cube", this.r ? "on" : "off"];
    },
  },
};
</script>

<style>
.transition-item + .transition-item {
  margin-left: 10px;
}
</style>

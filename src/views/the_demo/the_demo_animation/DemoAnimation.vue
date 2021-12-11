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
.line-box,
.line-box-dark {
  /* border: 3px solid grey; */
  display: inline-block;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  height: 200px;
  width: 200px;
  margin: 10px;
}

.line-box-dark {
  /* background: gray; */
  /* color: white; */
}
.article-box {
  /* background: white; */
  border-radius: 15px;
  padding: 15px 20px;
  margin-bottom: 40px;
}

h2,
span {
  /* color: rgb(104, 104, 104); */
  font-size: 20px;
}
h2 {
  font-size: 1.7rem;
}

.transition-item + .transition-item {
  margin-left: 10px;
}
</style>

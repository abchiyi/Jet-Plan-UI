<template>
  <div>
    <foldedTransitionDemo></foldedTransitionDemo>
    <fadeTransitionDemo></fadeTransitionDemo>
    <slideTransitionDemo></slideTransitionDemo>
  </div>
</template>

<script>
import foldedTransitionDemo from "./foldedTransitionDemo.vue";
import fadeTransitionDemo from "./fadeTramsitionDemo.vue";
import slideTransitionDemo from "./slideTransitionDemo.vue";
export default {
  name: "animationDemo",
  components: {
    foldedTransitionDemo,
    fadeTransitionDemo,
    slideTransitionDemo,
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(() => {
        if (this.sw) this.r = !this.r;
      }, 2000);
    });
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
.demo-item + .demo-item {
  margin-left: 5px;
}

.line-box,
.line-box-dark {
  border: 3px solid grey;
  display: inline-block;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  height: 200px;
  width: 200px;
  margin: 10px;
}

.line-box-dark {
  background: gray;
  color: white;
}
.article-box {
  background: white;
  border-radius: 15px;
  padding: 15px 20px;
  margin-bottom: 40px;
}

h2,
span {
  color: rgb(104, 104, 104);
  font-size: 20px;
}
h2 {
  font-size: 1.7rem;
}
</style>

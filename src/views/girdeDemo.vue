<template>
  <div>
    <span>基础栅格</span>
    <m-row class="test-background" v-for="n in 4" :key="n">
      <div :col="n * 4"><div class="test-cube-l"></div></div>
      <div :col="24 - n * 4"><div class="test-cube-d"></div></div>
    </m-row>
  </div>
</template>

<script>
export default {
  name: "grid-demo",
  components: {},
  data() {
    return {
      position: ["start", "center", "end", "around", "between"]
    };
  }
};
</script>

<style>
.test-background {
  background-color: #d3e0ea;
  margin-bottom: 8px;
  border-radius: 4px;
}
.test-cube-d,
.test-cube-l {
  background-color: #1687a7;
  height: 36px;
  border-radius: 4px;
}

.test-cube-d {
  background-color: #276678;
}
</style>

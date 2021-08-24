<template>
  <div>
    <span>基础栅格</span>
    <div id="absoult"></div>
    <m-row class="test-background" v-for="n in 4" :key="n">
      <m-col :col="n * 4">
        <m-cube class="girde-cube">{{ n * 4 }} Width</m-cube>
      </m-col>
      <m-col :col="24 - n * 2">
        <m-cube class="girde-cube" dark> {{ 24 - n * 4 }} Width </m-cube>
      </m-col>
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
.girde-cube {
  height: 36px;
  width: 100%;
}
</style>

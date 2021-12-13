<template>
  <div id="the-demo-girde">
    <span>基础栅格</span>
    <m-row class="girde-item" v-for="n in 4" :key="n">
      <m-col :col="n * 4">
        <m-cube class="girde-cube">{{ n * 4 }}</m-cube>
      </m-col>
      <m-col :col="24 - n * 2">
        <m-cube class="girde-cube" dark> {{ 24 - n * 4 }} </m-cube>
      </m-col>
    </m-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("test", "girade");
  },
  name: "grid-demo",
  components: {},
  data() {
    return {
      position: ["start", "center", "end", "around", "between"],
    };
  },
};
</script>

<style>
#the-demo-girde {
  background: var(--bg-1);
  border-radius: 8px;
  padding: 20px;
}
.girde-item {
  margin-bottom: 8px;
}
.girde-cube {
  height: 36px;
  width: 100%;
}
</style>

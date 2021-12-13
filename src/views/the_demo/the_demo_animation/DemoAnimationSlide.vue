<template>
  <div>
    <h2>滑入滑出</h2>
    <m-card style="height: 300px" class="demo-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "展开" : "收起" }}
      </m-switch-item>
      <hr />
      <m-row class="demo-row" X="center">
        <m-transition-slide class="deom-item" position="top">
          <div v-show="v1">
            <m-cube>To top</m-cube>
          </div>
        </m-transition-slide>
        <m-transition-slide class="deom-item" position="right">
          <div v-show="v1">
            <m-cube>To right</m-cube>
          </div>
        </m-transition-slide>
      </m-row>
      <m-row class="demo-row" X="center">
        <m-transition-slide class="deom-item" position="left">
          <div v-show="v1">
            <m-cube>To left</m-cube>
          </div>
        </m-transition-slide>
        <m-transition-slide class="deom-item" position="bottom">
          <div v-show="v1">
            <m-cube>To bottom</m-cube>
          </div>
        </m-transition-slide>
      </m-row>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  components: {},
  data() {
    return {
      v1: true,
    };
  },
};
</script>

<style>
.deom-item .m-cube {
  width: 150px;
}
.deom-item + .deom-item {
  margin-left: 5px;
}
.demo-row + .demo-row {
  margin-top: 5px;
}
</style>

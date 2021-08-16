<template>
  <div>
    <h2>滑入滑出</h2>
    <m-card style="height: 200px" class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "淡出" : "淡入" }}
      </m-switch-item>
      <hr />
      <m-row X="center">
        <m-slide-transition :value="v1" position="right">
          <m-cube class="demo-item">Cube 1</m-cube>
        </m-slide-transition>
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
      v1: true
    };
  }
};
</script>

<style>
</style>

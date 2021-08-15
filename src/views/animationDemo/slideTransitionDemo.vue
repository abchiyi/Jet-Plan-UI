<template>
  <div>
    <h2>滑入滑出</h2>
    <m-card class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "淡出" : "淡入" }}
      </m-switch-item>
      <hr />
      <m-slide-transition :value="v1" position="bottom">
        <m-row X="center">
          <m-cube class="demo-item">Cube 1</m-cube>
        </m-row>
      </m-slide-transition>
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

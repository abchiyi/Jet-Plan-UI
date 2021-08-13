<template>
  <div>
    <h2>淡出淡入</h2>
    <m-card class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "淡出" : "淡入" }}
      </m-switch-item>
      <hr />
      <m-fade-transition :value="v1">
        <m-row X="center">
          <m-cube class="demo-item">Cube 1</m-cube>
        </m-row>
      </m-fade-transition>
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

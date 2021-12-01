<template>
  <div>
    <h2>淡出淡入</h2>
    <m-card style="height: 200px" class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "淡出" : "淡入" }}
      </m-switch-item>
      <hr />
      <m-row X="center">
        <m-transition-fade>
          <m-cube v-show="v1" class="demo-item">Cube 1</m-cube>
        </m-transition-fade>
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
</style>

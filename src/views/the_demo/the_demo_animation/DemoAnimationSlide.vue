<template>
  <div>
    <h2>滑入滑出</h2>
    <m-card style="height: 200px" class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "淡出" : "淡入" }}
      </m-switch-item>
      <hr />
      <m-row X="center">
        <!--TODO 切换反向单选框 -->
        <m-transition-slide position="right">
          <m-cube v-show="v1">Cube 1</m-cube>
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
</style>

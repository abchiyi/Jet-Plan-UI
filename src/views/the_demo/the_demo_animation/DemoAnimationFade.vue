<template>
  <div class="">
    <h2>淡出淡入</h2>
    <m-card style="height: 200px" class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "淡出" : "淡入" }}
      </m-switch-item>
      <hr />
      <m-row X="center">
        <m-transition-fade class=".transition-item">
          <m-cube v-show="v1">
            <p>Fade</p>
          </m-cube>
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

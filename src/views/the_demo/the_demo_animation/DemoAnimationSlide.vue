<template>
  <div>
    <h2>滑入滑出</h2>
    <m-card style="height: 300px" class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "展开" : "收起" }}
      </m-switch-item>
      <hr />
      <m-row X="center">
        <m-transition-slide position="top">
          <div v-show="v1">
            <m-cube
              :style="{
                height: this.v2 ? '150px' : '100px',
              }"
            >
              'v-show'
            </m-cube>
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
      v1: false,
    };
  },
};
</script>

<style>
</style>

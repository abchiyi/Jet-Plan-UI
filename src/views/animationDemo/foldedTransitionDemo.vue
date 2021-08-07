<template>
  <div>
    <h2>折叠过渡</h2>
    <m-card class="article-box">
      <m-switch-item v-model="v1">
        1
        {{ v1 ? "展开" : "收起" }}
      </m-switch-item>
      <m-switch-item v-model="v2">
        {{ v2 ? "大" : "小" }}
      </m-switch-item>
      <hr />
      <m-folded-transition>
        <div v-show="v1">
          <m-row warp center>
            <div class="demo-item">
              <m-cube>1</m-cube>
            </div>
            <div class="demo-item">
              <m-cube
                :style="{
                  height: this.v2 ? '200px' : '100px',
                }"
                >2</m-cube
              >
            </div>
            <div class="demo-item">
              <m-cube>3</m-cube>
            </div>
          </m-row>
        </div>
      </m-folded-transition>
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
      v2: false,
    };
  },
};
</script>

<style>
</style>

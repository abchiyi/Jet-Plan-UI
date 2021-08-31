<template>
  <div>
    <h2>折叠过渡</h2>
    <m-card style="height:300px" class="article-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "展开" : "收起" }}
      </m-switch-item>
      <m-switch-item v-model="v2">
        {{ v2 ? "大" : "小" }}
      </m-switch-item>
      <hr />
      <m-transition-folded :value="v1">
        <m-row X="center">
          <div class="demo-item">
            <m-cube
              :style="{
                height: this.v2 ? '150px' : '100px'
              }"
              >Cube</m-cube
            >
          </div>
        </m-row>
      </m-transition-folded>
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
      v2: false
    };
  }
};
</script>

<style>
</style>

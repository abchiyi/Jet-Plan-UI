<template>
  <div>
    <h2>折叠过渡</h2>
    <m-card class="demo-box">
      <m-switch-item v-model="v1">
        {{ v1 ? "展开" : "收起" }}
      </m-switch-item>
      <hr />
      <m-row X="center">
        <m-transition-folded>
          <div v-show="v1">
            <m-cube
              :style="{
                height: this.v2 ? '150px' : '100px',
              }"
              >Folded</m-cube
            >
          </div>
        </m-transition-folded>
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
      v2: false,
    };
  },
};
</script>

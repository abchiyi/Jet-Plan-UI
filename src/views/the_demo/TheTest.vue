<template>
  <div id="the-test-page">
    <m-card class="demo-box">
      <m-switch v-model="value1"></m-switch>
      <m-switch v-model="value1"></m-switch>
      <m-check-box value="Checkbox Test" v-model="value2" />
      <p>{{ value2 }}</p>
      <!-- <Input /> -->
    </m-card>
  </div>
</template>
<script>
// import { Input } from "../../../packages";
export default {
  name: "TheTestPage",
  components: {
    // Input,
  },
  data() {
    return {
      value: false,
      value1: false,
      //   value2: ['123'],
      value2: [],
    };
  },
  mounted() {},
  methods: {
    on() {
      this.value = true;
    },
    off() {
      this.value = false;
    },
    test(evet) {
      console.log(evet);
    },
  },
  watch: {},
};
</script>

<style>
.test-box {
  height: 300px;
  border-radius: 16px;
  border: solid 4px var(--grey);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.t1 {
  padding: 10px;
  background: rgb(78, 201, 180);
}
.path {
  stroke-width: var(--BORDER-WIDTH);
  stroke-linecap: round;
  stroke-dasharray: 30;
  stroke: #fff;
  fill: none;
  animation: path-in 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}
</style>

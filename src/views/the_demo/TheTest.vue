<template>
  <div id="the-test-page">
    <m-card class="demo-box">
      <m-switch v-model="value1"></m-switch>
      <m-switch v-model="value1"></m-switch>
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
</style>

<template>
  <div id="the-test-page">
    <m-card>
      <form>
        <input type="submit" name="" id="" />
        <m-switch size="s" v-model="value1"></m-switch>
        <m-switch size="m" disabled v-model="value1"></m-switch>
        <m-switch size="l" v-model="value1"></m-switch>
        <br />
        <m-check-box size="s" id="pp" value="Checkbox 1" v-model="value2" />
        <m-check-box size="m" id="va" value="Checkbox 2" v-model="value2" />
        <m-check-box size="l" id="er" value="Checkbox 3" v-model="value2" />
        <br />
        <m-radio id="r1" value="r1" size="s" v-model="text"></m-radio>
        <m-radio id="r2" value="r2" size="m" v-model="text"></m-radio>
        <m-radio id="r3" value="r3" size="l" v-model="text"></m-radio>
        <p>{{ value2 }}</p>
        <p>Text: {{ text }}</p>
      </form>
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
      value: "",
      value1: false,
      value2: [],
      text: "",
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

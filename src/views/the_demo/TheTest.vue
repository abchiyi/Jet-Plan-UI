<template>
  <div id="the-test-page">
    <m-card>
      <form method="GET" autocomplete="on">
        <m-switch size="s" v-model="value1"></m-switch>
        <m-switch size="m" disabled v-model="value1"></m-switch>
        <m-switch size="l" v-model="value1"></m-switch>
        <br />
        <div>
          <m-check-box id="all" />
          <label for="all">Check All</label>
        </div>
        <m-check-box id="pp" value="Checkbox 1" v-model="value2" />
        <m-check-box id="va" value="Checkbox 2" v-model="value2" />
        <m-check-box id="er" value="Checkbox 3" v-model="value2" />
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
    checkboxData: ["c1", "c2", "c3", "c4"],
    on() {
      this.value = true;
    },
    off() {
      this.value = false;
    },
    test(v) {
      console.log(v);
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

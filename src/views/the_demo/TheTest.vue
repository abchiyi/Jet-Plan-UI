<template>
  <div id="the-test-page">
    <m-card class="demo-box">
      <m-switch size="s" v-model="value1"></m-switch>
      <m-switch size="m" disabled v-model="value1"></m-switch>
      <m-switch size="l" v-model="value1"></m-switch>
      <m-check-box size="s" id="pp" value="Checkbox Test" v-model="value" />
      <m-check-box
        size="m"
        id="va"
        disabled
        value="Checkbox Test"
        v-model="value1"
      />
      <m-check-box size="l" id="er" value="Checkbox Test" v-model="value2" />
      <p>{{ value2 }}</p>
      <!-- <Input /> -->
      <p>Select a maintenance drone:</p>

      <div>
        <input type="radio" id="huey" name="drone" value="huey" checked />
        <label for="huey">Huey</label>
      </div>

      <div>
        <input type="radio" id="dewey" name="drone" value="dewey" />
        <label for="dewey">Dewey</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="louie" />
        <label for="louie">Louie</label>
      </div>
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

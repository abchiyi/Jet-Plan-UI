<template>
  <div id="the-test-page">
    <m-card class="test-box">
      <m-switch size="s" v-model="value1"></m-switch>
      <m-switch size="m" disabled v-model="value1"></m-switch>
      <m-switch size="l" v-model="value1"></m-switch>
      <br />
      <m-check-box id="1" size="s" :value="value" v-model="checkbox" />
      <m-check-box id="2" size="m" :value="value" v-model="checkbox" />
      <m-check-box id="3" size="l" :value="value" v-model="checkbox" />
      <br />
      <m-radio id="r1" value="r1" size="s" v-model="text"></m-radio>
      <m-radio id="r2" value="r2" size="m" v-model="text"></m-radio>
      <m-radio id="r3" value="r3" size="l" v-model="text"></m-radio>
      <br />
      <div>
        <m-check-box id="all" :value="checkboxData" v-model="checkbox" />
        <label for="all">Check All</label>
      </div>
      <div>
        <m-check-box
          disabled
          id="all"
          :value="checkboxData"
          v-model="checkbox"
        />
        <label for="all">Check All</label>
      </div>
      <div v-for="value in checkboxData" :key="value">
        <m-check-box :id="value" :value="value" v-model="checkbox" />
        <label :for="value">{{ value }}</label>
      </div>
      <p>Checkbox:{{ checkbox }}</p>
      <p>Text: {{ text }}</p>

      <m-code-box lang="html" :code="text" />
    </m-card>

    <m-check-box id="3" size="l" :value="value" v-model="checkbox" />
  </div>
</template>
<script>
export default {
  name: "TheTestPage",
  data() {
    return {
      checkboxCheckAll: true,
      checkboxData: ["c1", "c2", "c3", "c4"],
      checkbox: [],
      value1: false,
      value: false,
      text: '<m-switch size="s" v-model="value1"></m-switch>\n<m-switch size="m" disabled v-model="value1"></m-switch>\n<m-switch size="l"v-model="value1"></m-switch>',
    };
  },
  methods: {
    on() {
      this.value = true;
    },
    off() {
      this.value = false;
    },
    test(v) {
      console.log(v);
    },
    hal() {
      return this.checkboxData.length;
    },
  },
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style>
.test-box {
  min-height: 300px;
  border-radius: 16px;
  border: solid 4px var(--grey);
  position: relative;
  overflow: hidden;
  /* cursor: pointer; */
  padding: 10px 20px;
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

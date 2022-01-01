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
      <m-radio id="r1" value="1" size="s" v-model="text"></m-radio>
      <m-radio
        :disabled="value1"
        id="r2"
        value="top"
        size="m"
        v-model="text"
      ></m-radio>
      <m-radio id="r3" value="5" size="l" v-model="text"></m-radio>
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
    <m-card>
      <m-row warp class="test-box" X="center" Y="center">
        <m-cube
          @mouseenter="on"
          @mouseleave="off"
          v-shadow:bottom="text"
        ></m-cube>

        <m-shaodw-box
          @mouseenter="on"
          @mouseleave="off"
          direction="bottom"
          :intensity="text"
        >
          <m-cube></m-cube>
        </m-shaodw-box>
        <!-- <m-cube v-shadow:top="10"></m-cube>
        <m-cube v-shadow:bottom="10"></m-cube>
        <m-cube v-shadow:left="10"></m-cube>
        <m-cube v-shadow:right="10"></m-cube> -->

        <!-- <m-cube class="shadow1" v-for="n in 12" :key="n" v-shadow="n"></m-cube> -->
      </m-row>
    </m-card>
    <m-card class="test-box"></m-card>
  </div>
</template>
<script>
export default {
  name: "TheTestPage",
  data() {
    return {
      checkboxCheckAll: true,
      checkboxData: ["c1", "c2", "c3", "c4"],
      sd: ["top", "bottom", "left", "bottom"],
      checkbox: [],
      value1: false,
      value: false,
      //   text:
      //     '<m-switch size="s" v-model="value1"></m-switch>\n<m-switch size="m" disabled v-model="value1"></m-switch>\n<m-switch size="l"v-model="value1"></m-switch>'
      text: "1"
    };
  },
  methods: {
    on() {
      this.value = true;
      this.text = 5;
    },
    off() {
      this.value = false;
      this.text = 0;
    },
    test(v) {
      console.log(v);
    },
    hal() {
      return this.checkboxData.length;
    }
  },
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style>
.test-box {
  min-height: 200px;
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
/* .shadow1 {
  box-shadow: 0px 1px 2px 1px var(--shadow);
}
.shadow2 {
  box-shadow: 0px 2px 4px 2px var(--shadow);
}
.shadow3 {
  box-shadow: 0px 3px 6px 3px var(--shadow);
} */
.m-cube + .m-cube {
  margin-left: 50px;
}
.m-cube {
  /* margin-top: 30px; */
}
</style>

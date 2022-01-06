<template>
  <div id="the-test-page">
    <m-control-bar :reverse="value1" for-id="aa">
      <template v-slot:text>text control</template>
      <template v-slot:control>
        <m-switch id="aa" size="s" v-model="value1"></m-switch>
      </template>
    </m-control-bar>
    <m-control-bar :reverse="value1" for-id="rs">
      <template v-slot:text>text control</template>
      <template v-slot:control>
        <m-check-box
          size="m"
          id="rs"
          :value="checkboxData"
          v-model="checkbox"
        />
      </template>
    </m-control-bar>
    <m-control-bar :reverse="value1" for-id="r4">
      <template v-slot:text>text control</template>
      <template v-slot:control>
        <m-radio id="r4" value="5" size="l" v-model="text"></m-radio>
      </template>
    </m-control-bar>
    <m-card class="test-box">
      <m-switch id="s" size="s" v-model="value1"></m-switch>
      <m-switch id="m" size="m" disabled v-model="value1"></m-switch>
      <m-switch id="l" size="l" v-model="value1"></m-switch>
      <br />
      <m-check-box id="1" size="s" :value="value" v-model="checkbox" />
      <m-check-box id="2" size="m" :value="value" v-model="checkbox" />
      <m-check-box id="3" size="l" :value="value" v-model="checkbox" />
      <m-check-box id="4" size="l" v-model="value1" />
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
    <m-card class="test-box" v-shadow:bottom="5">
      <m-row warp class="test-box" X="center" Y="center">
        <transition-group>
          <m-cube key="0" />
          <m-cube v-for="n in 4" :key="n" v-shadow:bottom="n" />
        </transition-group>
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
  margin-left: 15px;
}
</style>

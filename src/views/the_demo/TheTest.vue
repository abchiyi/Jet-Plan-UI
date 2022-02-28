<template>
  <div>
    <m-row X="center">
      <m-cube
        id="div1"
        style="background: var(--primary); height: 900px"
      >
        <strong>Primary</strong>
      </m-cube>
    </m-row>
    <m-row X="center">
      <m-cube
        id="div2"
        style="background: var(--warning); height: 200px"
      >
        <strong>Waring</strong>
      </m-cube>
    </m-row>
    <m-row X="center">
      <m-cube
        id="div3"
        style="background: var(--error); height: 900px"
      >
        <strong>Error</strong>
      </m-cube>
    </m-row>
    <m-row X="center">
      <m-cube
        id="div4"
        style="background: var(--info); height: 600px"
      >
        <strong>Innfo</strong>
      </m-cube>
    </m-row>
  </div>

</template>
<script>
import pdn from '../../common/mix/popDemoName'
export default {
  mixins: [pdn],
  name: "TheTestPage",
  data () {
    return {
      checkboxCheckAll: true,
      checkboxData: ["c1", "c2", "c3", "c4"],
      sd: ["top", "bottom", "left", "bottom"],
      checkbox: [],
      value1: false,
      value: false,
      //   text:
      //     '<m-switch size="s" v-model="value1"></m-switch>\n<m-switch size="m" disabled v-model="value1"></m-switch>\n<m-switch size="l"v-model="value1"></m-switch>'
      text: "1",
    };
  },
  methods: {
    on () {
      this.value = true;
      this.text = 5;
    },
    off () {
      this.value = false;
      this.text = 0;
    },
    test () {
      this.value = !this.value;
    },
    hal () {
      return this.checkboxData.length;
    },
  },
  watch: {},
  created () { },
  mounted () { },
};
</script>

<style >
</style>

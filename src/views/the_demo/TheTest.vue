<template>
  <div id="container">
    <p v-scroll-to="`#div1`" id="p1">div1</p>
    <p v-scroll-to="`#div2`" id="p2">div2</p>
    <p v-scroll-to="`#div3`" id="p2">div2</p>
  </div>
  <div id="div1">div1</div>
  <div id="div2">div2</div>
  <div id="div3">div3</div>
</template>
<script>
import ScrollTo from "../../../packages/tool/directives/ScrollTo";
export default {
  name: "TheTestPage",
  directives: {
    scrollTo: ScrollTo
  },
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
    test() {
      this.value = !this.value;
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

<style scoped>
div {
  height: 800px;
  width: 400px;
  border: 2px solid black;
}

#container {
  position: fixed;
  margin: 50px 500px;
}
</style>

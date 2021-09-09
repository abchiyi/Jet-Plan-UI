<template>
  <div v-rec="test">
    <h2>This is testing page</h2>
    <m-row
      X="center"
      Y="center"
      @mousedown="e"
      @mouseup="o"
      @touchstart="e"
      @touchend="o"
      @touchcancel="o"
      class="test-box"
    >
      <m-mask :value="value"></m-mask>
      <h3>Push down:</h3>
      <h3>Mask {{ value ? "Active" : "Disabled" }}</h3>
    </m-row>
    <div class="t1"><m-input placeholder="Text" /></div>
    <br />
    <m-input placeholder="Text" />
    <br />
    <br />
    <m-input disabled placeholder="Text" />
  </div>
</template>

<script>
import mMask from "../../../packages/mask";
import mInput from "../../../packages/form/src/Input.vue";
import reScreenSize from "../../../packages/tool/directives/src/ReScreenSize.js";
export default {
  name: "TheTestPage",
  components: {
    mMask,
    mInput
  },
  data() {
    return {
      value: false
    };
  },
  methods: {
    e() {
      this.value = true;
    },
    o() {
      this.value = false;
    },
    test(e) {
      console.log(e);
    }
  },
  directives: {
    rec: reScreenSize
  }
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

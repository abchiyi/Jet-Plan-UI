<template>
  <div>
    <h2>This is testing page</h2>
    <m-row
      X="center"
      Y="center"
      @mousedown="reValue"
      @mouseup="reValue"
      @touchstart="reValue"
      @touchend="reValue"
      class="test-box"
    >
      <mmm :value="value"></mmm>
      <h3>Push down:</h3>
      <h3>Mask {{ value ? "Active" : "Disabled" }}</h3>
    </m-row>
  </div>
</template>

<script>
import mmm from "../../../packages/mask/mask.vue";
export default {
  name: "TheTestPage",
  components: {
    mmm
  },
  data() {
    return {
      value: false
    };
  },
  methods: {
    reValue() {
      this.value = !this.value;
      console.log(this.value);
    }
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
}
</style>

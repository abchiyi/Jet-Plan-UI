<template>
  <div id="the-test-page">
    <click-feedback>
      <m-cube />
    </click-feedback>
    <click-feedback>
      <p>absdofioabnvdsa</p>
      <m-cube />
    </click-feedback>
  </div>
</template>
<script>
import { ClickFeedback } from "../../../packages/animations";
export default {
  name: "TheTestPage",
  components: {
    ClickFeedback,
  },
  data() {
    return {
      value: false,
    };
  },
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

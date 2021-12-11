<template>
  <div id="the-test-page">
    <div style="background: red; padding: 20px; color: #fff">
      <Input />
    </div>
    <Input />
  </div>
</template>
<script>
import { Input } from "../../../packages/form";
export default {
  name: "TheTestPage",
  components: {
    Input,
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

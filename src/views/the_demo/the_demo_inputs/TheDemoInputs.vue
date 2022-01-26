<template>
  <h2>Inputs</h2>
  <p>
    以下组件都是
    <inline-code>&lt;input&gt;</inline-code>
    标签的衍生组件，使用它们以获得统一的样式风格
  </p>
  <inputs-checkbox />
</template>
<script>
import inputsCheckbox from "./Inputs-Checkbox.vue";
export default {
  name: "the-demo-inputs",
  components: {
    inputsCheckbox
  }
};
</script>
<style>
</style>

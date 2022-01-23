<template>
  <h2>Card组件</h2>
  <p>卡片容器</p>
  <!-- Demo -->
  <demo-box title="卡片" :code="code" id="fade">
    <m-card style="height:200px"></m-card>
  </demo-box>
</template>

<script>
export default {
  name: "the-demo-card",
  data() {
    return {
      code: ``
    };
  }
};
</script>

<style>
</style>

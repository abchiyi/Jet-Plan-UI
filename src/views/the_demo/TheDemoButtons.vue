<template>
  <div>
    <h1>按钮</h1>
    <p>m-button 基本按钮组件</p>

    <h2>基本示例</h2>
    <m-row>
      <m-button :activeAnimation="false" :hoverAnimation="false"></m-button>
      <m-button
        text
        :activeAnimation="false"
        :hoverAnimation="false"
      ></m-button>
    </m-row>
  </div>
</template>

<script>
export default {
  name: "the-demo-buttons",
  component: {}
};
</script>

<style>
</style>

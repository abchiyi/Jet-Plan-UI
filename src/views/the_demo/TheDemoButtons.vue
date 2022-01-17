<template>
  <div>
    <h1>按钮</h1>
    <p>m-button 基本按钮组件</p>

    <h2>基本示例</h2>
    <m-row>
      <m-button tag="a" primary>Primary</m-button>
      <m-button Primary disabled>primary Disabled</m-button>
      <m-button>Button</m-button>
      <m-button disabled>Button disabled</m-button>
      <m-button row style="width:300px">Button</m-button>
    </m-row>
    <br />
    <m-row> <m-button class="aa" row>Button</m-button></m-row>

    <m-row>
      <m-button primary text></m-button>
      <m-button primary disabled text></m-button>
      <m-button text></m-button>
      <m-button text disabled></m-button>
    </m-row>
    <m-button text row v-for="i in 10" :key="i"></m-button>
  </div>
</template>

<script>
export default {
  name: "the-demo-buttons",
  component: {}
};
</script>

<style>
.m-button.aa {
  width: 400px;
}
</style>

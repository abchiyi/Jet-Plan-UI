<template>
  <m-card class="m-demo-box">
    <div>
      <slot name="header"></slot>
    </div>
    <hr />

    <div class="demo">
      <slot></slot>
    </div>
    <hr />

    <m-folded title="展开Code">
      <slot name="code"></slot>
    </m-folded>
  </m-card>
</template>

<script>
export default {
  name: "m-demo-box",
  data() {
    return {
      code: undefined,
    };
  },
};
</script>

<style>
.m-demo-box {
  padding: 20px;
  padding-bottom: unset;
}
</style>

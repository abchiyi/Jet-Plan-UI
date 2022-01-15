<template>
  <h2>动作反馈</h2>
  <demo-box title="点击波纹反馈" :code="code" id="fade">
    <m-row class="animation-box" X="center">
      <m-click-feedback>
        <m-cube v-show="value">
          <p>ClickMe</p>
        </m-cube>
      </m-click-feedback>
    </m-row>
  </demo-box>
</template>

<script>
export default {
  name: "the-demo-action-feedbacks",
  data() {
    return {
      value: true,
      code: ``
    };
  }
};
</script>

<style scoped >
.m-cube {
  border: 3px solid var(--border);
  background: var(--foreground);
  box-sizing: border-box;
  color: var(--text);
}
</style>

<template>
  <h2>动作反馈</h2>
  <p>
    使用动作反馈组件以获得和 UI 风格统一的动作反馈样式。例如‘点击’，‘悬停’等动作
  </p>
  <p>'m-action-feedback'组件：</p>
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

<template>
  <h2>动作反馈</h2>
  <p>
    使用动作反馈组件以获得和 UI 风格统一的动作反馈样式。例如‘点击’，‘悬停’等动作
  </p>
  <p>'m-action-feedback'组件：</p>
  <m-control-bar for-id="re-active">
    <template v-slot:text>
      启用 Active 效果
    </template>
    <template v-slot:control>
      <m-switch id="re-active" v-model="active" />
    </template>
  </m-control-bar>
  <demo-box title="点击反馈" :code="code" id="fade">
    <m-row class="animation-box" X="center">
      <m-action-feedback :active="active" ripple>
        <m-cube>ClickMe</m-cube>
      </m-action-feedback>
    </m-row>
  </demo-box>
</template>

<script>
export default {
  name: "the-demo-action-feedbacks",
  data() {
    return {
      active: false,
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

.box {
  border: 3px solid var(--border);
  border-radius: var(--s-radius);
  height: 200px;
  width: 300px;
}
</style>

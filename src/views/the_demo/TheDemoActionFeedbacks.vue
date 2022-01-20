<template>
  <h2>动作反馈</h2>
  <p>
    使用动作反馈组件以获得和 UI 风格统一的动作反馈样式。例如‘点击’，‘悬停’等动作
  </p>
  <strong>如何使用：</strong>
  <!-- Control -->
  <m-control-bar for-id="re-active">
    <template v-slot:text>
      启用 Active 效果
    </template>
    <template v-slot:control>
      <m-switch id="re-active" v-model="active" />
    </template>
  </m-control-bar>
  <m-control-bar for-id="re-hover">
    <template v-slot:text>
      启用 Hover 效果
    </template>
    <template v-slot:control>
      <m-switch id="re-hover" v-model="hover" />
    </template>
  </m-control-bar>
  <m-control-bar for-id="re-ripple">
    <template v-slot:text>
      启用 Ripple 效果
    </template>
    <template v-slot:control>
      <m-switch :disabled="active" id="re-ripple" v-model="ripple" />
    </template>
  </m-control-bar>
  <!-- Demo -->
  <demo-box title="点击反馈" :code="code" id="fade">
    <m-row class="animation-box" X="center">
      <m-action-feedback :active="active" :hover="hover" :ripple="ripple">
        <m-cube>ClickMe</m-cube>
      </m-action-feedback>
    </m-row>
  </demo-box>
  <!-- Doc -->
  <article class="props">
    <strong>Props:</strong>
    <ul class="doc">
      <li id="prop-color">
        <inline-code>color - String</inline-code>用于设置
        <inline-code>active</inline-code>,
        <inline-code>ripple</inline-code>
        效果遮罩色彩,支持 css 原生色彩格式&css变量.默认为
        <inline-code> "var(--mask)"</inline-code>
      </li>
      <li id="prop-opacity">
        <inline-code>opacity - String</inline-code>用于设置遮罩不透明度,默认为
        <inline-code>"0.5"</inline-code>
      </li>
      <li id="prop-tag">
        <inline-code>tag - String</inline-code>设置组件最终渲染标签。默认为
        <inline-code> "div"</inline-code>
      </li>
      <li id="prop-active">
        <inline-code>active - Boolean</inline-code>
        开启关闭 active 效果,等效 css 伪类
        <inline-code>:active</inline-code>
        。默认为
        <inline-code> false</inline-code>
      </li>
      <li id="prop-hover">
        <inline-code>hover - Boolean</inline-code>
        开启关闭 hover 效果,等效 css 伪类
        <inline-code>:hover</inline-code>
        。 默认为
        <inline-code> false</inline-code>
      </li>
      <li id="prop-ripple">
        <inline-code>ripple - Boolean</inline-code>
        开启关闭 ripple 效果 。 默认为
        <inline-code> false</inline-code>
        。
        <warning-text>
          注意:
          <inline-code>ripple</inline-code>
          会被
          <inline-code>active</inline-code>
          效果覆盖。两种效果不可同时开启
        </warning-text>
      </li>
    </ul>
  </article>
  <article class="events">
    <strong>Event:</strong>
    <ul class="doc">
      <li>--None--</li>
    </ul>
  </article>
  <article class="slot">
    <strong>Slot:</strong>
    <ul class="doc">
      <li>
        <inline-code>default</inline-code>
        组件仅有一个默认插槽
      </li>
    </ul>
  </article>
  <article class="others">
    <strong>组件特性：</strong>
    <ul class="doc">
      <li>
        在触摸动作时如开启了 ripple 的同时且开启了 houer， hover
        将不会生效，houver 将会被关闭 active
        会被设置为启用状态。这是为触摸事件所做的优化，触摸 houver
        效果响应缓慢，且在手指离开后遮罩不能正常移除，故使用 active 效果代替。
      </li>
    </ul>
  </article>
</template>

<script>
import inlineCode from "../../common/inlineCode.vue";
import WarningText from "../../common/Warning-text.vue";
export default {
  components: { inlineCode, WarningText },
  name: "the-demo-action-feedbacks",
  data() {
    return {
      oldRipple: false,
      active: false,
      hover: false,
      ripple: false,
      code: `<m-action-feedback :active="boolenValue1" :hover="boolenValue2" :ripple="boolenValue3">
    <m-cube>ClickMe</m-cube>
</m-action-feedback>`
    };
  },
  watch: {
    active(v) {
      if (v) {
        // 关闭开启的ripple效果，并记录状态，以便在active关闭时恢复开启状态
        this.oldRipple = this.ripple;
        this.ripple = false;
      } else {
        this.ripple = this.oldRipple;
      }
    }
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

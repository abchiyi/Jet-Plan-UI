<template>
  <h1>按钮</h1>
  <p>基本按钮组件</p>
  <!-- Demo -->
  <demo-box title="点击反馈" :code="code" id="fade">
    <m-row X="center">
      <m-button Primary>primary</m-button>
      <m-button>Button</m-button>
      <m-button disabled>Button disabled</m-button>
    </m-row>
    <m-row X="center">
      <m-button primary text>Text Button Primary</m-button>
      <m-button text>Text Button</m-button>
      <m-button text disabled>Text Button Disabled</m-button>
    </m-row>
    <br />
    <div>
      <m-button row>Button One Row</m-button>
      <m-button text row>Text Button One Row </m-button>
    </div>
  </demo-box>
  <demo-doc>
    <template v-slot:prop>
      <li id="prop-button-text">
        <inline-code>text - Boolean</inline-code>
        按钮外观切换，使用常规按钮还是文本按钮
        <inline-code>default - false</inline-code>
      </li>
      <li id="prop-button-primary">
        <inline-code>primary - Boolean</inline-code>
        按钮外观切换，按钮外观展示为带主题色的主要按钮
        <inline-code>default - false</inline-code>
      </li>
      <li id="prop-button-row">
        <inline-code>row - Boolean</inline-code>
        使按钮占据一行
        <inline-code>default - false</inline-code>
      </li>
      <li id="prop-button-disabled">
        <inline-code>disabled - Boolean</inline-code>
        禁用按钮
        <inline-code>default - false</inline-code>
      </li>
      <li id="prop-others">
        按钮组件外层使用<inline-code>m-action-feedback</inline-code>组件渲染，其余<inline-code>Prop</inline-code>参考
        <!--    TODO 跳转到组件 -->
        <m-button text teg="a">m-action-feedback 组件</m-button>
      </li>
    </template>

    <template v-slot:slot>
      <li>默认插槽</li>
    </template>
  </demo-doc>
</template>

<script>
import inlineCode from "../../common/inlineCode.vue";
export default {
  components: { inlineCode },
  name: "the-demo-buttons",
  data() {
    return {
      code: `<m-button Primary>primary</m-button>
<m-button>Button</m-button>
<m-button disabled>Button disabled</m-button>
<m-button primary text>Text Button Primary</m-button>
<m-button text>Text Button</m-button>
<m-button text disabled>Text Button Disabled</m-button>
<m-button row>Button One Row</m-button>
<m-button text row>Text Button One Row </m-button>`
    };
  }
};
</script>

<style>
.m-button.aa {
  width: 400px;
}
</style>

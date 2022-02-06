<template>
  <h2>Inputs</h2>
  <p>
    以下组件都是
    <inline-code>&lt;input&gt;</inline-code>
    标签的衍生组件，使用它们以获得统一的样式风格
  </p>
  <the-inputs-input id="input" />
  <br />
  <hr />
  <theinputs-checkbox id="checkbox" />
  <br />
  <hr />
  <theinputs-radio id="radio" />
  <br />
  <hr />
  <theinputs-switch id="switch" />
  <br />
  <hr />
  <!-- Doc -->
  <demo-doc>
    <template v-slot:prop>
      <li>
        <inline-code>modeValue</inline-code>
        用于数据绑定
      </li>
      <li>
        <inline-code>disable - Boolean</inline-code>
        禁用组件
        <inline-code>default - false</inline-code>
      </li>
      <li>
        <inline-code>value</inline-code>
        传入待交值
      </li>
      <li>
        <inline-code>name - String</inline-code>
        等同
        <inline-code>&lt;input&gt;</inline-code>
        标签属性
        <inline-code>name</inline-code>
      </li>
      <li>
        <inline-code>id - String</inline-code>
        组件 id
      </li>
      <li>
        <inline-code>size - ['s','m','l','em','rem']</inline-code>
        设定组件尺寸
        <inline-code>default - em</inline-code>，
        <inline-code>em,rem</inline-code>为等同当前或根字体尺寸大小
      </li>
    </template>
    <template v-slot:event>
      <li>
        组件事件请参考
        <!-- TODO 指向 MDN input 标签事件参考 -->
        <m-button text hover> &lt;input&gt;</m-button>
        标签事件
      </li>
    </template>
  </demo-doc>
</template>
<script>
import InlineCode from "../../../common/inlineCode.vue";
import TheinputsCheckbox from "./TheInputs-Checkbox.vue";
import TheinputsSwitch from "./TheInputs-Switch.vue";
import TheinputsRadio from "./TheInputs-Radio.vue";
import TheInputsInput from "./TheInputs-input.vue";
export default {
  name: "the-demo-inputs",
  components: {
    InlineCode,
    TheinputsCheckbox,
    TheinputsSwitch,
    TheinputsRadio,
    TheInputsInput,
  },
};
</script>
<style>
</style>

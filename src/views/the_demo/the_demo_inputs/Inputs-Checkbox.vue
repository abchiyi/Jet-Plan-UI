<template>
  <strong>Checkbox</strong>
  <!-- Demo -->
  <demo-box title="Checkbox" :code="code">
    <p>Data:{{ showData }}</p>
    <div id="check-all-group">
      <m-checkbox id="check-all" :value="data" v-model="showData" />
      <label for="check-all">Check All</label>
    </div>
    <div id="checkbox-group">
      <div v-for="item in data" :key="item">
        <m-checkbox :id="item" :value="item" v-model="showData" />
        <label :for="item">{{ item }} </label>
      </div>
    </div>
  </demo-box>
  <demo-doc>
    <template v-slot:prop>
      <li>
        <inline-code>modeValue</inline-code>
        用于数据绑定
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
import inlineCode from "../../../common/inlineCode.vue";
export default {
  components: { inlineCode },
  name: "inputs-checkbox",
  data: () => {
    return {
      data: ["Checkbox1", "Checkbox2", "Checkbox3"],
      showData: [],
      code: `// javaScript
let data: ["Checkbox1", "Checkbox2", "Checkbox3"],
let showData: []

// Html
<body>
    <p>Data:{{ showData }}</p>
    <div id="check-all-group">
        <m-checkbox id="check-all" :value="data" v-model="showData" />
        <label for="check-all">Check All</label>
    </div>
    <div id="checkbox-group">
        <div v-for="item in data" :key="item">
        <m-checkbox :id="item" :value="item" v-model="showData" />
        <label :for="item">{{ item }} </label>
        </div>
    </div>
</body>`
    };
  }
};
</script>
<style>
</style>

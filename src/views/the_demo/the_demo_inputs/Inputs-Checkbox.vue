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
      <inline-code> &lt;!-- TODO 组件接口 --&gt; </inline-code>
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
      //TODO示例代码
      code: undefined,
      data: ["Checkbox1", "Checkbox2", "Checkbox3"],
      showData: []
    };
  },
  methods: {
    log() {
      console.log("123");
    }
  }
};
</script>
<style>
</style>

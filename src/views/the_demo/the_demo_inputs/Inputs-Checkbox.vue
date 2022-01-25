<template>
  <strong>Checkbox</strong>
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
</template>
<script>
export default {
  name: "inputs-checkbox",
  data: () => {
    return {
      //TODO示例代码
      code: undefined,
      data: ["Checkbox1", "Checkbox2", "Checkbox3"],
      showData: []
    };
  }
};
</script>
<style>
</style>

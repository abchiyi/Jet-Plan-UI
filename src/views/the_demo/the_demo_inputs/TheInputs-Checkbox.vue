<template>
  <strong>Checkbox</strong>
  <!-- Demo -->
  <demo-box title="Checkbox" :code="code">
    <template v-slot:header>
      <m-control-bar for-id="disabled-checkbox">
        <template v-slot:text>禁用组件</template>
        <template v-slot:control>
          <m-switch v-model="disabled" id="disabled-checkbox" />
        </template>
      </m-control-bar>
    </template>
    <p>Data:{{ showData }}</p>
    <div id="check-all-group">
      <m-checkbox
        id="check-all"
        :value="data"
        v-model="showData"
        :disabled="disabled"
      />
      <label for="check-all">Check All</label>
    </div>
    <div id="checkbox-group">
      <div v-for="item in data" :key="item">
        <m-checkbox
          :disabled="disabled"
          :id="item"
          :value="item"
          v-model="showData"
        />
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
      disabled: false,
      data: ["Checkbox1", "Checkbox2", "Checkbox3"],
      showData: [],
      code: `// javaScript
let data: ["Checkbox1", "Checkbox2", "Checkbox3"],
let showData: [];

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

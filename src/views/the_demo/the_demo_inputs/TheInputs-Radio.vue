<template>
  <div>
    <h3>Radio</h3>
    <demo-box
      title="Radio"
      :code="code"
    >
      <template v-slot:header>
        <m-control-bar for-id="disabled-radio">
          <template v-slot:text>禁用组件</template>
          <template v-slot:control>
            <m-switch
              v-model="disabled"
              id="disabled-radio"
            />
          </template>
        </m-control-bar>
        <p>Data:{{ radioData }}</p>
      </template>
      <ul id="demo-radio-group">
        <li
          v-for="v in data"
          :key="v"
        >
          <m-radio
            :disabled="disabled"
            :id="v"
            name="radioData"
            v-model="radioData"
            :value="v"
          />
          <label :for="v">{{ v }}</label>
        </li>
      </ul>

    </demo-box>
  </div>
</template>
<script>
export default {
  name: "the-inputs-radio",
  data: () => {
    return {
      data: ["Radio1", "Radio2", "Radio3"],
      radioData: undefined,
      disabled: false,
      code: `
// Script
let data = ["Radio1", "Radio2", "Radio3"]
let radioData;

// Html
<body>
    <div v-for="v in data" :key="v">
        <m-radio :id="v" name="radioData" v-model="radioData" :value="v" />
        <label :for="v">{{ v }}</label>
    </div>
</body>`,
    };
  },
};
</script>
<style>
</style>

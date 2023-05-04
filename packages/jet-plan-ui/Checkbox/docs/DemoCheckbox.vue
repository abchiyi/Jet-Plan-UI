<template>
  <p>
    <Checkbox name="disabled-all">
      <input type="checkbox" id="disabled-all" v-model="disabled" />
    </Checkbox>
    <label for="disabled-all">disabled all</label>
  </p>

  <p>
    <Checkbox name="checkbox">
      <input :disabled="disabled" type="checkbox" id="check-all" />
    </Checkbox>
    <label for="check-all">check all</label>
  </p>

  <ul>
    <li v-for="item in ['checkbox1', 'checkbox2']" :key="item">
      <Checkbox>
        <input
          :disabled="disabled"
          type="checkbox"
          name="checkbox"
          v-model="value"
          :value="item"
          :id="item"
        />
      </Checkbox>
      <label :for="item">{{ item }}</label>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { Checkbox } from "jet-plan-ui";
import { ref } from "vue";
const value = ref(["checkbox1"]);
const disabled = ref(false);
</script>
<style scoped>
p,
ul {
  margin-top: unset;
}
li,
p {
  align-items: center;
  user-select: none;
  display: flex;
  margin: unset;
}
</style>

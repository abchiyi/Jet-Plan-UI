<template>
  <p class="font-mono">Option:{{ value }}</p>
  <p class="font-mono" v-for="item in ['1', '2', '3']" :key="item">
    <label>
      <Radio>
        <input
          :disabled="isDisabled(item)"
          v-model="value"
          :value="item"
          name="radio"
          type="radio"
        />
      </Radio>
      <span>Option{{ item }} {{ isDisabled(item) ? " is disabled" : "" }}</span>
    </label>
  </p>
</template>
<script lang="ts" setup>
import { Radio } from "jet-plan-ui";
import { ref } from "vue";
const value = ref("1");
//** 计算何时禁用 Option 3 */
function isDisabled(v: string) {
  return ["2", "3"].indexOf(value.value) != -1 && v == "3";
}
</script>
<style scoped>
p:nth-child(1) {
  font-size: 1.2rem;
}
p {
  user-select: none;
}
</style>

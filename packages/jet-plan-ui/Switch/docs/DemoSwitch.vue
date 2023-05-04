<template>
  <p class="font-mono">Switch: {{ value ? "ON" : "OFF" }}</p>
  <Switch>
    <input type="checkbox" v-model="value" :disabled="disabled" />
  </Switch>
  <p class="font-mono">
    <Switch>
      <input type="checkbox" v-model="disabled" />
    </Switch>
    <span>Disabled Switch</span>
  </p>
</template>
<script lang="ts" setup>
import { Switch } from "jet-plan-ui";
import { ref } from "vue";
const disabled = ref(false);
const value = ref(false);
</script>
<style scoped>
p:nth-child(1) {
  font-size: 1.5rem;
}
p > * {
  vertical-align: bottom;
}
</style>

<template>
  <ActionLabel>
    禁用组件
    <Switch>
      <input type="checkbox" v-model="disabled" />
    </Switch>
  </ActionLabel>
  <slot :disabled="disabled"></slot>
</template>
<script setup lang="ts">
import { ActionLabel } from "src/components";
import { Switch } from "jet-plan-ui";
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <ActionLabel>
    <div>禁用 TrackBar</div>
    <Switch>
      <input type="checkbox" v-model="disabled" />
    </Switch>
  </ActionLabel>
  <slot :disabled="disabled"></slot>
</template>
<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Switch } from "jet-plan-ui";
import { ref } from "vue";
const disabled = ref(false);
</script>

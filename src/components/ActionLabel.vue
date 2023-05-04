<template>
  <ActionFeedback tag="label" active class="demo action-label">
    <slot></slot>
  </ActionFeedback>
</template>
<script lang="ts" setup>
import { ActionFeedback } from "jet-plan-ui";
</script>

<style>
.action-label {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.action-label > * {
  margin-bottom: unset !important;
  margin-top: unset !important;
}

.action-label * {
  user-select: none;
}
</style>

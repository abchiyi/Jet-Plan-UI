<template>
  <div class="x-center y-center">
    <ActionFeedback class="demo-cube" active>active only</ActionFeedback>
    <ActionFeedback class="demo-cube" active hover>active hover</ActionFeedback>
  </div>
</template>
<script lang="ts" setup>
import { ActionFeedback } from "jet-plan-ui";
</script>
<style scoped>
.demo * {
  user-select: none;
}

.demo-cube {
  background: var(--background-light);
  outline: 2px solid var(--border);
  color: var(--text-hint);
}
.demo-cube + .demo-cube {
  margin-left: 1rem;
}
</style>

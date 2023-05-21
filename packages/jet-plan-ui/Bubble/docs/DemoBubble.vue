<template>
  <div class="demo-bubble">
    <bubble class="demo-cube" :position="'top'">
      <template #bubble>message message message message</template>
      <div class="demo-cube"></div>
    </bubble>
  </div>
</template>
<script lang="ts" setup>
import { Bubble } from "jet-plan-ui";
</script>
<style scoped>
.demo-bubble {
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px;
}
</style>

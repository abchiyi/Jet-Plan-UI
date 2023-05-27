<template>
  <div class="demo-bubble">
    <bubble class="demo-cube" :position="Props.position" :show="Props.show">
      <template #bubble>Message !</template>
      <div class="demo-cube"></div>
    </bubble>
  </div>
</template>
<script lang="ts" setup>
import { Bubble, type Position } from "jet-plan-ui";
const Props = defineProps<{
  position: Position;
  show: any;
}>();
</script>
<style scoped>
.demo-bubble {
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px;
}
</style>

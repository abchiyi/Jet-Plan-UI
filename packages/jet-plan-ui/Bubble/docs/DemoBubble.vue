<template>
  <div class="demo-bubble">
    <bubble class="demo-cube" v-bind="Props">
      <template #bubble>Message !</template>
      <div class="demo-cube">
        {{ Props.position }}
      </div>
    </bubble>
  </div>
</template>
<script lang="ts" setup>
import { Bubble, type Position, type RenderFunction } from "jet-plan-ui";
const Props = defineProps<{
  customRender: RenderFunction;
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

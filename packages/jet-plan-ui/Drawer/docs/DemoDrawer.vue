<template>
  <Drawer v-bind="props">
    <div :class="['demo-cube', props.from]">Drawer</div>
  </Drawer>
</template>

<script lang="ts" setup>
import { Drawer, shadowPainter } from "jet-plan-ui";
import { RTS } from "@/theme";
const props = defineProps<{
  expand: boolean;
  from: "top" | "left" | "right" | "bottom";
}>();
const shadowColor = RTS.getTheme().value.infoColors.primary.default;
const boxShadow = shadowPainter("", 2, shadowColor);
</script>
<style scoped>
.demo-cube {
  box-shadow: v-bind(boxShadow);
  width: calc(100% - 2rem);
  box-sizing: border-box;
  margin: 1rem;
}
.demo-cube.left,
.demo-cube.right {
  height: calc(100% - 2rem);
  width: 100px;
}
</style>

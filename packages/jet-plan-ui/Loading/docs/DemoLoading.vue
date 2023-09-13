<template>
  <div class="demo-loading">
    <Loading
      v-bind="props"
      :value="props.value"
      :style="{ fontSize: props.fontSize }"
    />
  </div>
</template>

<script lang="ts" setup>
import { Loading } from "jet-plan-ui";
const props = defineProps<{
  mode: "bar" | "circle" | undefined;
  fontSize: string;
  loading: boolean;
  value: number;
  diameter: number;
  lineWidth: number;
}>();
</script>
<style scoped>
.demo-loading {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

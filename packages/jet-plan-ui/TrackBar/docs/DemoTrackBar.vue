<template>
  <p class="title-value font-mono">
    <strong>百分比：{{ (value * 100).toFixed(2) }}%</strong>
  </p>
  <TrackBar v-model:percentage="value" :disabled="props.disabled" />
</template>
<script lang="ts" setup>
import { TrackBar } from "jet-plan-ui";
import { ref } from "vue";
const props = defineProps(["disabled"]);
const value = ref(0.5);
</script>
<style scoped>
.title-value > * {
  font-size: 1.5rem;
}
</style>

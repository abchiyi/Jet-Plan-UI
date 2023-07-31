<template>
  <div class="demo x-center y-center">
    <div id="demo-range-content">
      <p class="font-mono">Value: {{ value }}</p>
      <Range :style="{ fontSize: PROP.size ? PROP.size : '16px' }">
        <input
          :disabled="PROP.disabled"
          v-model.number="value"
          type="range"
          max="100"
          min="0"
        />
      </Range>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Range } from "jet-plan-ui";
import { ref } from "vue";

const PROP = defineProps<{ disabled: boolean; size: string }>();
const value = ref(50);
</script>

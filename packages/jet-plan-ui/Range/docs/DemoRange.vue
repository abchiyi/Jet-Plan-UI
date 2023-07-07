<template>
  <div class="demo x-center y-center">
    <div id="demo-range-content">
      <p class="font-mono">Value: {{ value }}</p>
      <Range>
        <input type="range" v-model.number="value" :disabled="PROP.disabled" />
      </Range>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Range } from "jet-plan-ui";
import { ref } from "vue";

const PROP = defineProps<{ disabled: boolean }>();
const value = ref(50);
</script>

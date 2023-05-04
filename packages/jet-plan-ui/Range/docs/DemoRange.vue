<template>
  <p class="font-mono">Value: {{ value }}</p>
  <Range>
    <input type="range" v-model.number="value" :disabled="PROP.disabled" />
  </Range>
</template>
<script lang="ts" setup>
import { Range } from "jet-plan-ui";
import { ref } from "vue";

const PROP = defineProps(["disabled"]);
const value = ref(50);
</script>
<style scoped>
p {
  font-size: 1.2rem;
}
</style>

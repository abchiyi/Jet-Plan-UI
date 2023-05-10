<template>
  <div>
    <j-bubble class="demo-cube" :position="'top'">
      <template #bubble>message</template>
      <div class="demo-cube"></div>
    </j-bubble>
  </div>
</template>
<script lang="ts" setup>
import jBubble from "../src/index.vue";
</script>

<template>
  <ActionLabel class="demo" :active="false">
    <div>
      {{ offset }}
    </div>
    <JRange>
      <input type="range" max="20" min="0" v-model.number="offset" />
    </JRange>
  </ActionLabel>
  <slot :offset="offset"></slot>
</template>
<script lang="ts" setup>
import { Range as JRange } from "jet-plan-ui";
import { ActionLabel } from "src/components";
import { ref } from "vue";
const offset = ref(2);
</script>

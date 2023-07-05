<template>
  <div class="demo x-center y-center" :style="{ fontSize: props.size }">
    <Checkbox>
      <input type="checkbox" title="checkbox" name="checkbox" checked />
    </Checkbox>
  </div>
</template>
<script lang="ts" setup>
import { Checkbox } from "jet-plan-ui";
const props = defineProps<{
  size: string;
}>();
</script>
<style scoped>
.demo {
  height: 99px;
}
</style>

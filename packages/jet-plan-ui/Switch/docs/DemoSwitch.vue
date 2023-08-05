<template>
  <div class="demo">
    <Switch :style="{ fontSize: PROPS.size }">
      <input
        :disabled="disabled"
        name="switchDemo"
        id="switchDemo"
        type="checkbox"
        v-model="value"
      />
    </Switch>
  </div>
</template>
<script lang="ts" setup>
import { Switch } from "jet-plan-ui";
import { ref } from "vue";
const PROPS = defineProps<{
  disabled: boolean;
  size: string;
}>();
const value = ref(false);
</script>
<style scoped>
.demo {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 60px;
}
</style>

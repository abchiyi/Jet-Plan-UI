<template>
  <div class="demo x-center y-center">
    <div id="demo-radio-content" :style="{ fontSize: props.size }">
      <p class="font-mono">Value:{{ value }}</p>
      <ActionFeedback
        v-for="item in ['1', '2', '3']"
        :key="item"
        tag="label"
        active
        hover
      >
        <Radio>
          <input
            :disabled="props.disabled"
            v-model="value"
            :value="item"
            name="radio"
            type="radio"
          />
        </Radio>
        <span class="sub-text">Option{{ item }}</span>
      </ActionFeedback>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Radio, ActionFeedback } from "jet-plan-ui";
import { ref } from "vue";
const value = ref("1");
const props = defineProps<{
  disabled: boolean;
  size: string;
}>();
</script>
<style scoped>
.j-action-feedback {
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
}
.j-action-feedback + .j-action-feedback {
  margin-top: 0.5rem;
}
p {
  padding-left: 12px;
}
span {
  user-select: none;
}
</style>

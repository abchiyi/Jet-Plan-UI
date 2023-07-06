<template>
  <div class="demo x-center y-center">
    <div class="demo-content">
      <!-- Check All -->
      <ActionFeedback active hover tag="label">
        <Checkbox name="check-box">
          <input :disabled="disabled" type="checkbox" id="check-all" />
        </Checkbox>
        <span class="sub-text" for="check-all">check all</span>
      </ActionFeedback>
      <!-- Check box -->
      <ActionFeedback
        v-for="item in ['checkbox1', 'checkbox2']"
        :key="item"
        :for="item"
        tag="label"
        active
        hover
      >
        <Checkbox>
          <input
            :disabled="disabled"
            type="checkbox"
            name="check-box"
            v-model="value"
            :value="item"
            :id="item"
          />
        </Checkbox>
        <span class="sub-text" :for="item">
          {{ item }}
        </span>
      </ActionFeedback>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Checkbox, ActionFeedback } from "jet-plan-ui";
import { ref } from "vue";
const value = ref(["checkbox1"]);
const disabled = ref(false);
</script>
<style scoped>
.sub-text {
  font-size: 16px;
}
.j-check-box {
  font-size: 24px;
}
.demo-content > div + div {
  margin-top: 0.2rem;
}
.demo-content > .j-action-feedback {
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
}
.demo-content label {
  user-select: none;
}
</style>

<template>
  <ActionFeedback tag="label" active>
    <div>
      <Switch>
        <input type="checkbox" v-model="value" />
      </Switch>
      <strong>{{ value ? "ON" : "OFF" }}</strong>
    </div>
  </ActionFeedback>
</template>
<script lang="ts" setup>
import { ActionFeedback, Switch } from "jet-plan-ui";
import { RTS } from "src/theme"; // 导入主题控制器
import { computed, ref } from "vue";
const colors = computed(() => RTS.getTheme());
const value = ref(true);
</script>
<style scoped>
.j-action-feedback {
  outline: 2px solid v-bind("colors.value.border.default");
  background: v-bind("colors.value.background.dark");
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: block;
}
.j-action-feedback > div {
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.j-action-feedback > div > * {
  user-select: none;
}
</style>

<template>
  <ActionLabel>
    <p>{{ text ? text : modelValue ? "显示" : "隐藏" }}</p>
    <j-switch>
      <input type="checkbox" v-model="value" />
    </j-switch>
  </ActionLabel>
  <slot></slot>
</template>
<script lang="ts">
import { Switch as JSwitch } from "jet-plan-ui";
import { ActionLabel } from "src/components";
import { defineComponent } from "vue";

export default defineComponent({
  template: {
    ActionLabel,
    JSwitch,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    text: String,
  },
  data() {
    return {
      value: this.modelValue,
    };
  },
  watch: {
    value(v) {
      this.$emit("update:modelValue", v);
    },
  },
});
</script>

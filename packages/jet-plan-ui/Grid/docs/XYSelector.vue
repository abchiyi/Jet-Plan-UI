import { ref } from 'vue';
<template>
  <div class="demo xy-selector">
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in ['start', 'center', 'end']" :key="item">
        <Radio>
          <input type="radio" :value="item" v-model="X" />
        </Radio>
        <strong>X{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in ['top', 'center', 'bottom']" :key="item">
        <Radio>
          <input type="radio" :value="item" v-model="Y" />
        </Radio>
        <strong>Y{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
  </div>

  <slot :X="X" :Y="Y"></slot>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Radio } from "jet-plan-ui";
import { RTS } from "src/theme";
import { computed, ref } from "vue";

const X = ref("center");
const Y = ref("bottom");
const colors = computed(() => RTS.getTheme());
</script>
<style scoped>
.action-label {
  background: v-bind("colors.value.background.dark");
  padding: 0.8em 0.5em;
  outline: unset;
  margin: unset;
  width: 100%;
}

.action-label + .action-label {
  margin-left: 0.5em;
}
.j-row + .j-row {
  margin-top: 0.5rem;
}
strong {
  font-family: "sarasa mono";
  font-size: 12px;
}
</style>

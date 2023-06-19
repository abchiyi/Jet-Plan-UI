<template>
  <div class="demo demo-bubble">
    <slot :circle="circle"></slot>
  </div>
  <div class="demo xy-selector">
    <!-- Position -->
    <p><strong>Use circle or rectangle</strong></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <strong>Click to {{ !circle ? "circle" : "rectangle" }}</strong>
        <Switch>
          <input type="checkbox" v-model="circle" />
        </Switch>
      </ActionLabel>
    </Row>
    <!-- Start -->
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Switch, Row } from "jet-plan-ui";
import { computed, ref } from "vue";
import { RTS } from "src/theme";
const colors = computed(() => RTS.getTheme());
const circle = ref(true);
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
p > strong {
  color: v-bind("colors.value.text.hint");
  font-size: 0.6rem;
}
p {
  margin-bottom: 0.2rem;
}

.j-button {
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: "sarasa mono", Consolas, "Courier New", Courier, FreeMono,
    monospace;
  padding: 0.5rem 0;
  border-radius: 8px;
}

.j-button + .j-button {
  margin-left: 0.5rem;
}

.demo.demo-bubble {
  position: relative;
  min-height: 82px;
  padding: unset;
  z-index: 0;
}
</style>

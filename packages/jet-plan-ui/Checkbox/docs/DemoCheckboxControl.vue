<template>
  <div class="demo">
    <slot :size="`${size}px`" :disabled="disabled"></slot>
  </div>
  <div class="demo control padding">
    <p class="sub-title">Set size</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p>
          <span>{{ size }} px</span>
        </p>
        <Range>
          <input
            name="checkbox-size"
            id="checkbox-size"
            v-model="size"
            type="range"
            max="80"
            min="16"
          />
        </Range>
      </ActionLabel>
    </Row>
    <p class="sub-title">Disabled component</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p>
          <span>{{ !disabled ? "Active" : "Disabled" }}</span>
        </p>
        <Switch>
          <input type="checkbox" v-model="disabled" />
        </Switch>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Range, Switch } from "jet-plan-ui";
import { ref } from "vue";
const disabled = ref(false);
const size = ref(24);
</script>

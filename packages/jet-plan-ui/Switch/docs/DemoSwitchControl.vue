<template>
  <div class="demo">
    <!-- Todo bind attr -->
    <slot :size="size + 'px'" :disabled="disabled"></slot>
  </div>
  <div class="demo control padding">
    <!-- Todo title -->
    <p class="sub-title">Set switch size</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">{{ size }} px</p>
        <Range>
          <input
            name="radio-size"
            id="radio-size"
            v-model="size"
            type="range"
            min="16"
            max="60"
          />
        </Range>
      </ActionLabel>
    </Row>
    <p class="sub-title">Disabled switch</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p class="sub-text">
          Click to {{ !disabled ? "disable" : "active" }} switch
        </p>
        <Switch>
          <input
            name="disable-radio"
            id="disable-radio"
            v-model="disabled"
            type="checkbox"
          />
        </Switch>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Range, Switch } from "jet-plan-ui";
import { ref } from "vue";
const size = ref(32);
const disabled = ref(false);
</script>

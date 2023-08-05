<template>
  <div class="demo">
    <!-- Todo bind attr -->
    <slot
      :showValue="showValue"
      :disabled="disabled"
      :size="`${size}px`"
      :width="width + 'px'"
    ></slot>
  </div>
  <div class="demo control padding">
    <p class="sub-title">Disable range</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">Range is {{ disabled ? "disabled" : "active" }}</p>
        <Switch>
          <input
            name="demo-range-disable"
            id="demo-range-disable"
            v-model="disabled"
            type="checkbox"
          />
        </Switch>
      </ActionLabel>
    </Row>
    <p class="sub-title">Show value bubble</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">
          value bubble {{ showValue ? "active" : "disabled" }}
        </p>
        <Switch>
          <input
            name="demo-range-show-value"
            id="demo-range-show-value"
            v-model="showValue"
            type="checkbox"
          />
        </Switch>
      </ActionLabel>
    </Row>
    <p class="sub-title">Size</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">Size is {{ size }}px</p>
        <Range>
          <input
            name="demo-range-size"
            id="demo-range-size"
            v-model="size"
            type="range"
            min="16"
            max="48"
          />
        </Range>
      </ActionLabel>
    </Row>
    <p class="sub-title">Width</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">Width is {{ width }}px</p>
        <Range>
          <input
            name="demo-range-width"
            id="demo-range-width"
            v-model="width"
            type="range"
            min="150"
            max="300"
          />
        </Range>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Switch, Row, Range } from "jet-plan-ui";
import { ref } from "vue";

const disabled = ref(false);
const showValue = ref(true);
const width = ref(150);
const size = ref(16);
</script>

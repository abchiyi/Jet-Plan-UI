<template>
  <div class="demo">
    <!-- Todo bind attr -->
    <slot :disabled="disabled"></slot>
  </div>
  <div class="demo control padding">
    <p class="sub-title">Disable range</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">
          Range is {{ disabled ? "disabled" : "active" }}px
        </p>
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
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Switch, Row } from "jet-plan-ui";
import { ref } from "vue";

const disabled = ref(false);
</script>

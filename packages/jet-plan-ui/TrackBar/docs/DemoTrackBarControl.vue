<template>
  <div class="demo">
    <slot :disabled="disable"></slot>
  </div>
  <div class="demo control padding">
    <p class="sub-title">Disabled TrackBar</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p class="sub-text">{{ disable ? "disabled" : "active" }}</p>
        <Switch>
          <input
            type="checkbox"
            name="trackBarDisable"
            id="trackBarDisable"
            v-model="disable"
          />
        </Switch>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { ref } from "vue";
import { Row, Switch } from "jet-plan-ui";
const disable = ref(false);
</script>

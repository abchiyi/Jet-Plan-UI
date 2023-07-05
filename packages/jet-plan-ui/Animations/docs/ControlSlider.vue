<template>
  <slot :value="value" :valueFade="valueFade"></slot>
  <div class="demo control padding">
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p>Click to {{ value ? "hidden" : "show" }}</p>
        <Switch>
          <input
            type="checkbox"
            v-model="value"
            name="demo-switch-animation"
            title="demo-switch-animation"
          />
        </Switch>
      </ActionLabel>
    </Row>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p>{{ valueFade ? "Use" : "No" }} Fade</p>
        <Switch>
          <input
            type="checkbox"
            v-model="valueFade"
            name="demo-switch-use-fade"
            title="demo-switch-use-fade"
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

const value = ref(true);
const valueFade = ref(true);
</script>

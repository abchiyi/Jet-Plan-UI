<template>
  <div class="demo no-padding demo-bubble">
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
import { ref } from "vue";
const circle = ref(true);
</script>

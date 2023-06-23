<template>
  <div class="demo">
    <!-- Todo bind attr -->
    <slot></slot>
  </div>
  <div class="demo control padding">
    <!-- Todo title -->
    <p><strong>Todo Title</strong></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <strong>Text</strong>
        <!-- Todo Input El -->
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row } from "jet-plan-ui";
</script>

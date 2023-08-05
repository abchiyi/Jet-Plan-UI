<template>
  <div class="demo">
    <!-- Todo bind attr -->
    <slot></slot>
  </div>
  <div class="demo control padding">
    <!-- Todo title -->
    <p class="sub-title">Todo Title</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p class="sub-text">Text</p>
        <!-- Todo Input El -->
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row } from "jet-plan-ui";
</script>

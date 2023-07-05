<template>
  <div class="demo">
    <slot :size="`${size}px`"></slot>
  </div>
  <div class="demo control padding">
    <p><strong>Set size</strong></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <strong>{{ size }} px</strong>
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
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Range } from "jet-plan-ui";
import { ref } from "vue";
const size = ref(24);
</script>

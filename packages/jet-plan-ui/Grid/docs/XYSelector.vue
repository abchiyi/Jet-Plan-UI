import { ref } from 'vue';
<template>
  <slot :X="X" :Y="Y"></slot>

  <div class="demo control padding xy-selector">
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in ['start', 'center', 'end']" :key="item">
        <Radio>
          <input
            v-model="X"
            :value="item"
            type="radio"
            name="item"
            title="item"
          />
        </Radio>
        <span>X{{ item.toUpperCase() }}</span>
      </ActionLabel>
    </Row>
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in ['top', 'center', 'bottom']" :key="item">
        <Radio>
          <input
            type="radio"
            :value="item"
            v-model="Y"
            name="item"
            title="item"
          />
        </Radio>
        <span>Y{{ item.toUpperCase() }}</span>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Radio } from "jet-plan-ui";
import { ref } from "vue";

const X = ref("center");
const Y = ref("bottom");
</script>

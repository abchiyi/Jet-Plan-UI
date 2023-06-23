import { ref } from 'vue';
<template>
  <div class="demo xy-selector">
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in ['start', 'center', 'end']" :key="item">
        <Radio>
          <input type="radio" :value="item" v-model="X" />
        </Radio>
        <strong>X{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in ['top', 'center', 'bottom']" :key="item">
        <Radio>
          <input type="radio" :value="item" v-model="Y" />
        </Radio>
        <strong>Y{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
  </div>

  <slot :X="X" :Y="Y"></slot>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Radio } from "jet-plan-ui";
import { ref } from "vue";

const X = ref("center");
const Y = ref("bottom");
</script>

<template>
  <div class="demo demo-scale x-center y-center">
    <TransitionScale>
      <div class="demo-cube" v-show="PROPS.value">Scale</div>
    </TransitionScale>
  </div>
</template>

<script lang="ts" setup>
import { TransitionScale } from "jet-plan-ui";
const PROPS = defineProps({ value: Boolean });
</script>

<style scoped>
.demo-scale {
  height: 100px;
}
</style>

<template>
  <div class="demo-fade">
    <TransitionFade>
      <div class="demo-cube" v-show="PROPS.value">Fade</div>
    </TransitionFade>
  </div>
</template>

<script lang="ts" setup>
import { TransitionFade } from "../src";
const PROPS = defineProps({ value: Boolean });
</script>

<style scoped>
.demo-fade {
  justify-content: center;
  display: flex;
  height: 100px;
}
</style>

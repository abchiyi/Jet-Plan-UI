<template>
  <div class="demo-fade">
    <TransitionFade>
      <div class="demo-cube" v-show="PROPS.showDemo">Fade</div>
    </TransitionFade>
  </div>
</template>

<script lang="ts" setup>
import { TransitionFade } from "../src";
const PROPS = defineProps({ showDemo: Boolean });
</script>

<style scoped>
.demo-fade {
  justify-content: center;
  display: flex;
  height: 100px;
}

.demo > p {
  justify-content: space-between;
  display: flex;
  margin: unset;
}
</style>

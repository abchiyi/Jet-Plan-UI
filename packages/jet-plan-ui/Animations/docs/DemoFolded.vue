<template>
  <div class="demo demo-folded x-center y-center">
    <TransitionFolded>
      <div v-show="PROPS.showDemo">
        <div class="demo-cube">Folded</div>
      </div>
    </TransitionFolded>
  </div>
</template>

<script lang="ts" setup>
import { TransitionFolded } from "jet-plan-ui";
const PROPS = defineProps({ showDemo: Boolean });
</script>

<style scoped>
.demo-folded {
  height: 100px;
}
</style>

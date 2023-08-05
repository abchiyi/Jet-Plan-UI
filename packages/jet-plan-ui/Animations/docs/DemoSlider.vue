<template>
  <div class="demo demo-slider">
    <j-row class="demo-row" X="center">
      <!-- Top -->
      <TransitionSlider :opacity="PROPS.valueFade" position="top">
        <div class="demo-item" v-show="PROPS.value">
          <div class="demo-cube">To top</div>
        </div>
      </TransitionSlider>
      <!-- Right -->
      <TransitionSlider :opacity="PROPS.valueFade" position="right">
        <div class="demo-item" v-show="PROPS.value">
          <div class="demo-cube">To right</div>
        </div>
      </TransitionSlider>
    </j-row>
    <j-row class="demo-row" X="center">
      <!-- Left -->
      <TransitionSlider :opacity="PROPS.valueFade" position="left">
        <div class="demo-item" v-show="PROPS.value">
          <div class="demo-cube">To left</div>
        </div>
      </TransitionSlider>
      <!-- Bottom -->
      <TransitionSlider :opacity="PROPS.valueFade" position="bottom">
        <div class="demo-item" v-show="PROPS.value">
          <div class="demo-cube">To bottom</div>
        </div>
      </TransitionSlider>
    </j-row>
  </div>
</template>
<script lang="ts" setup>
import { TransitionSlider } from "jet-plan-ui";
const PROPS = defineProps({
  value: Boolean,
  valueFade: Boolean,
});
</script>

<style scoped>
.j-row + .j-row {
  margin: unset;
}
.demo-slider {
  height: 208px;
}
.demo-item {
  margin: 2px;
}
</style>

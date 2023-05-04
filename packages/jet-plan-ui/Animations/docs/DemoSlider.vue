<template>
  <div class="demo demo-slider">
    <j-row class="demo-row" X="center">
      <!-- Top -->
      <TransitionSlider :opacity="PROPS.useFade" position="top">
        <div class="demo-item" v-show="PROPS.showDemo">
          <div class="demo-cube">To top</div>
        </div>
      </TransitionSlider>
      <!-- Right -->
      <TransitionSlider :opacity="PROPS.useFade" position="right">
        <div class="demo-item" v-show="PROPS.showDemo">
          <div class="demo-cube">To right</div>
        </div>
      </TransitionSlider>
    </j-row>
    <j-row class="demo-row" X="center">
      <!-- Left -->
      <TransitionSlider :opacity="PROPS.useFade" position="left">
        <div class="demo-item" v-show="PROPS.showDemo">
          <div class="demo-cube">To left</div>
        </div>
      </TransitionSlider>
      <!-- Bottom -->
      <TransitionSlider :opacity="PROPS.useFade" position="bottom">
        <div class="demo-item" v-show="PROPS.showDemo">
          <div class="demo-cube">To bottom</div>
        </div>
      </TransitionSlider>
    </j-row>
  </div>
</template>
<script lang="ts" setup>
import { TransitionSlider } from "jet-plan-ui";
const PROPS = defineProps({
  showDemo: Boolean,
  useFade: Boolean,
});
</script>

<style scoped>
.demo-slider {
  height: 208px;
}
.demo-item {
  margin: 2px;
}
</style>

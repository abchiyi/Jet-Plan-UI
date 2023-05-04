<template>
  <TransitionSlider
    :opacity="false"
    :position="Props.from ? Props.from : 'right'"
  >
    <div v-show="Props.expand" :class="classes">
      <slot />
    </div>
  </TransitionSlider>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { TransitionSlider } from "../../Animations";

const Props = defineProps<{
  expand: boolean;
  from: "top" | "left" | "right" | "bottom";
}>();

const classes = computed(() => ["j-drawer", Props.from]);
</script>

<style>
.j-drawer {
  overflow-y: scroll;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

.j-drawer.right {
  left: unset;
}

.j-drawer.left {
  right: unset;
}
.j-drawer.top {
  bottom: unset;
}

.j-drawer.bottom {
  top: unset;
}

/* Firefox  */
@supports (scrollbar-width: none) {
  .j-drawer {
    /* overflow: -moz-scrollbars-none; */
    scrollbar-width: none;
  }
}

/* chrome and Safari */
.j-drawer::-webkit-scrollbar {
  display: none;
}

/* IE 10+ */
.j-drawer {
  -ms-overflow-style: none;
}
</style>

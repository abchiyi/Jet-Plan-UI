<template>
  <transition name="m-transition-fade">
    <div v-show="value">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: "m-transition-fade",
  props: {
    value: {
      type: Boolean
    }
  }
};
</script>

<style>
.m-transition-fade-enter-active,
.m-transition-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.2, 0.4, 0.4, 1);
}
.m-transition-fade-enter-from,
.m-transition-fade-leave-to {
  opacity: 0;
}
</style>

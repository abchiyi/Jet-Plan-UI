<template>
  <transition name="m-fade-transition">
    <div v-show="value">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: "m-fade-transition",
  props: {
    value: {
      type: Boolean
    }
  }
};
</script>

<style>
.m-fade-transition-enter-active,
.m-fade-transition-leave-active {
  transition: opacity 0.6s cubic-bezier(0.2, 0.4, 0.4, 1);
}
.m-fade-transition-enter-from,
.m-fade-transition-leave-to {
  opacity: 0;
}
</style>

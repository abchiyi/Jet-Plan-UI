<template>
  <transition name="m-slide-transition">
    <div :class="classes" v-show="value">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "m-slide-transition",
  props: {
    position: {
      type: String,
      required: true,
      validator: function(value) {
        const checkout = ["left", "right", "top", "bottom"];
        return checkout.indexOf(value.toLowerCase()) !== -1;
      }
    },

    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classes() {
      return [this.position];
    }
  }
};
</script>

<style scoped>
.m-slide-transition-enter-active,
.m-slide-transition-leave-active {
  transition: all 400ms cubic-bezier(0.5, 0, 0, 0.95);
}
/* To Right */
.m-slide-transition-enter-from.right,
.m-slide-transition-leave-to.right {
  opacity: 0;
  transform: translateX(100px);
}
/* To Left */
.m-slide-transition-enter-from.left,
.m-slide-transition-leave-to.left {
  opacity: 0;
  transform: translateX(-100px);
}
/* To Top */
.m-slide-transition-enter-from.top,
.m-slide-transition-leave-to.top {
  opacity: 0;
  transform: translateY(-100px);
}
/* To Bottom */
.m-slide-transition-enter-from.bottom,
.m-slide-transition-leave-to.bottom {
  opacity: 0;
  transform: translateY(100px);
}
</style>

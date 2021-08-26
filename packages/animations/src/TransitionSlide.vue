<template>
  <transition
    name="m-transition-slide"
    @beforeEnter="beforeEnter"
    @beforeLeave="beforeLeave"
  >
    <div :class="classes" :style="styles" v-show="value">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "m-transition-slide",
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
  data() {
    return {
      height: null,
      width: null
    };
  },
  computed: {
    classes() {
      return [this.position];
    },
    styles() {
      return {
        "--migration-distance":
          ["right", "left"].indexOf(this.position) != -1
            ? this.width + "px"
            : this.height + "px"
      };
    }
  },
  methods: {
    refresh(el) {
      ["right", "left"].indexOf(this.position) != -1
        ? (this.width = el.children[0].offsetWidth)
        : (this.height = el.children[0].offsetHeight);
    },
    beforeLeave(el) {
      this.refresh(el);
    },
    beforeEnter(el) {
      this.$nextTick(() => {
        this.refresh(el);
      });
    }
  }
};
</script>

<style scoped>
.m-transition-slide-enter-active,
.m-transition-slide-leave-active {
  transition: all 500ms cubic-bezier(0.5, 0, 0, 0.95);
  transform: translateZ(0);
}
/* To Right */
.m-transition-slide-enter-from.right,
.m-transition-slide-leave-to.right {
  opacity: 0;
  transform: translateX(var(--migration-distance));
}
/* To Left */
.m-transition-slide-enter-from.left,
.m-transition-slide-leave-to.left {
  opacity: 0;
  transform: translateX(calc(-1 * var(--migration-distance)));
}
/* To Top */
.m-transition-slide-enter-from.top,
.m-transition-slide-leave-to.top {
  opacity: 0;
  transform: translateY(calc(-1 * var(--migration-distance)));
}
/* To Bottom */
.m-transition-slide-enter-from.bottom,
.m-transition-slide-leave-to.bottom {
  opacity: 0;
  transform: translateY(var(--migration-distance));
}
</style>

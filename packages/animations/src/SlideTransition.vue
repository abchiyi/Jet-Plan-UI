<template>
  <transition
    name="m-slide-transition"
    @beforeEnter="beforeEnter"
    @beforeLeave="beforeLeave"
  >
    <div :class="classes" :style="styles" v-show="value">
      <slot />
    </div>
  </transition>
</template>

<script>
// TODO 需要自动检测子元素尺寸
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
.m-slide-transition-enter-active,
.m-slide-transition-leave-active {
  transition: all 500ms cubic-bezier(0.5, 0, 0, 0.95);
  transform: translateZ(0);
}
/* To Right */
.m-slide-transition-enter-from.right,
.m-slide-transition-leave-to.right {
  opacity: 0;
  transform: translateX(var(--migration-distance));
}
/* To Left */
.m-slide-transition-enter-from.left,
.m-slide-transition-leave-to.left {
  opacity: 0;
  transform: translateX(calc(-1 * var(--migration-distance)));
}
/* To Top */
.m-slide-transition-enter-from.top,
.m-slide-transition-leave-to.top {
  opacity: 0;
  transform: translateY(calc(-1 * var(--migration-distance)));
}
/* To Bottom */
.m-slide-transition-enter-from.bottom,
.m-slide-transition-leave-to.bottom {
  opacity: 0;
  transform: translateY(var(--migration-distance));
}
</style>

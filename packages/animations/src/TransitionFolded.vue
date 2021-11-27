<template>
  <transition
    name="m-transition-folded"
    class="m-transition-folded"
    :style="{ ...this.style }"
    @beforeEnter="this.beforeEnter"
    @afterEnter="this.clearHeight"
    @beforeLeave="this.beforeLeave"
    @afterLeave="this.clearHeight"
  >
    <div v-show="this.value"><slot /></div>
  </transition>
</template>
<script>
function nodeCheck(el, callback) {
  if (el.children.length > 1) {
    console.error(
      "childrenNodeError,should be like this:",
      "\n<m-transition-folded>\n",
      "\t<element v-show/if='value'>\n",
      "\t\t<content></content>\n",
      "\t</element>\n",
      "<m-transition-folded>\n",
      el
    );
  } else {
    callback(el);
  }
}
export default {
  name: "m-transition-folded",
  data() {
    return {
      height: null,
    };
  },
  props: {
    value: {
      type: Boolean,
    },
  },
  methods: {
    refresh(el) {
      this.height = el.children[0].offsetHeight + "px";
    },
    clearHeight() {
      this.height = null;
    },
    beforeEnter(el) {
      nodeCheck(el, () => {
        // 等待子元素绘制完成
        this.$nextTick(() => {
          this.refresh(el);
        });
      });
    },
    beforeLeave(el) {
      nodeCheck(el, () => {
        this.refresh(el);
      });
    },
  },
  computed: {
    style() {
      return {
        "--animationTime": this.animationTime,
        "--height": this.height,
      };
    },
    animationTime() {
      let aTime = parseFloat(this.height) / 50;
      // 限制动画时间，最大不超过0.9s,最小不低于0.4s
      aTime = aTime < 4 ? (aTime = 4) : aTime >= 9 ? 9 : aTime;
      // 两位浮点精度的动画时间
      return parseFloat(aTime * 0.1).toFixed(2) + "s";
    },
  },
};
</script>

<style>
.m-transition-folded * {
  margin-top: unset !important;
  margin-bottom: unset !important;
}

.m-transition-folded-enter-active,
.m-transition-folded-leave-active {
  transition: var(--animationTime) cubic-bezier(0.2, 0.5, 0, 1);
  transform: translate3d(0, 0, 0);
  overflow-y: hidden;
}

.m-transition-folded-leave-to,
.m-transition-folded-enter-from {
  height: 0px;
}

.m-transition-folded-enter-to,
.m-transition-folded-leave-from {
  height: var(--height);
}
</style>

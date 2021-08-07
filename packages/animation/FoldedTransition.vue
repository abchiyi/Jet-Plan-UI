<script>
function nodeCheck(el, callback) {
  if (el.children.length > 1) {
    console.error(
      "childrenNodeError,should be like this:",
      "\n<m-folded-transition>\n",
      "\t<element v-show/if='value'>\n",
      "\t\t<content></content>\n",
      "\t</element>\n",
      "<m-folded-transition>\n",
      el
    );
  } else {
    callback(el);
  }
}
export default {
  name: "m-folded-transition",
  data() {
    return {
      height: undefined,
    };
  },
  methods: {
    refresh(el) {
      this.height = el.childNodes[0].offsetHeight + "px";
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
  render(ce) {
    return ce(
      "div",
      { class: "m-folded-transition", style: { ...this.style } },
      [
        ce(
          "transition",
          {
            props: { name: "m-folded-transition" },
            on: {
              beforeEnter: (el) => {
                nodeCheck(el, () => {
                  // 等待子元素绘制完成
                  this.$nextTick(() => {
                    this.refresh(el);
                  });
                });
              },
              beforeLeave: (el) => {
                nodeCheck(el, () => {
                  this.refresh(el);
                });
              },
            },
          },
          [this.$slots.default]
        ),
      ]
    );
  },
};
</script>

<style>
.m-folded-transition * {
  margin-top: unset !important;
  margin-bottom: unset !important;
}

.m-folded-transition-enter-active,
.m-folded-transition-leave-active {
  transition: var(--animationTime) cubic-bezier(0.2, 0.5, 0, 1);
  transform: translate3d(0, 0, 0);
  height: var(--enter-height);
  overflow: hidden;
}

.m-folded-transition-leave-to,
.m-folded-transition-enter {
  height: 0px;
}

.m-folded-transition-enter-to,
.m-folded-transition-leave {
  height: var(--height);
}
</style>

<script lang="ts">
import baseAction from "../../ActionFeedback/src/baseAction.vue";
import { TransitionSlider } from "../../Animations";
import { Row } from "../../Grid";
import { defineComponent, h, type PropType } from "vue";
export default defineComponent({
  name: "j-bubble",
  props: {
    position: {
      type: String as PropType<
        | "top"
        | "top-end"
        | "top-start"
        | "bottom"
        | "bottom-end"
        | "bottom-start"
        | "left"
        | "left-top"
        | "left-bottom"
        | "right"
        | "right-top"
        | "right-bottom"
      >,
      default: "top",
    },

    show: Boolean,
  },

  data() {
    return {
      showBubble: false,
    };
  },
  computed: {
    ClassBubble() {
      const [start, position] = Array.from(this.position?.split("-"));
      return ["bubble", start, position];
    },
    positionReverse() {
      const [position] = this.position.split("-");
      switch (position) {
        case "top":
          return "bottom";
        case "bottom":
          return "top";
        case "left":
          return "right";
        case "right":
          return "left";
        default: // 默认块解决类型分析问题，实际运行将不会被执行
          return "top";
      }
    },
  },
  methods: {
    displayBubble() {
      this.showBubble = true;
    },
    hideBubble() {
      this.showBubble = false;
    },
  },
  render() {
    const Bubble = h(
      "div",
      {
        class: this.ClassBubble,
      },
      this.$slots.bubble?.()
    );
    return h(
      baseAction,
      {
        class: "j-bubble",
        onmouseenter: this.displayBubble,
        onmouseleave: this.hideBubble,
      },
      {
        default: () =>
          h(
            Row,
            { X: "center", Y: "center" },
            {
              default: () => [
                this.$slots.default?.(),
                h(
                  TransitionSlider,
                  { position: this.positionReverse },
                  {
                    default: () => (this.showBubble ? Bubble : undefined),
                  }
                ),
              ],
            }
          ),
      }
    );
  },
});
</script>

<style scoped>
.j-bubble {
  display: inline-block;
  position: relative;
}

.j-bubble .bubble {
  background: rgb(66, 66, 66);
  border-radius: var(--m-radius);
  /* color: var(--base-text-color); */
  box-sizing: border-box;
  display: inline-block;
  padding: 5px 10px;
  user-select: none;
  font-size: 0.8rem;
  white-space: nowrap;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.j-bubble .bottom.start,
.j-bubble .top.start {
  left: 0;
}

.j-bubble .bottom.end,
.j-bubble .top.end {
  right: 0;
}

.j-bubble .top {
  bottom: 100%;
  margin-bottom: 5px;
}

.j-bubble .bottom {
  top: 100%;
  margin-top: 5px;
}

.j-bubble .right.top,
.j-bubble .left.top {
  top: 0;
  bottom: unset;
}

.j-bubble .right.bottom,
.j-bubble .left.bottom {
  bottom: 0;
  top: unset;
}

.j-bubble .right {
  left: 100%;
  margin-left: 5px;
}

.j-bubble .left {
  right: 100%;
  margin-right: 5px;
}

.j-bubble .right.j-transition-slide-enter-from,
.j-bubble .right.j-transition-slide-leave-active {
  transform: translate3d(-40px, 0, 0);
}

.j-bubble .left.j-transition-slide-enter-from,
.j-bubble .left.j-transition-slide-leave-active {
  transform: translate3d(40px, 0, 0);
}
</style>

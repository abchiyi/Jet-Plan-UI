<script lang="ts">
import baseAction from "../../ActionFeedback/src/baseAction.vue";
import { TransitionSlider } from "../../Animations";
import { Row } from "../../Grid";
import { defineComponent, h, type PropType } from "vue";
import {
  Bumper,
  getOffset,
  getEl,
  type RenderFunction,
  customRender,
} from "../../tool";
import type { Position } from ".";
export default defineComponent({
  name: "j-bubble",
  props: {
    position: {
      type: String as PropType<Position>,
      default: "top",
    },

    show: {
      type: [Boolean, String] as PropType<boolean | "unset">,
      default: (() => "unset")(),
    },

    customRender: {
      type: Function as PropType<RenderFunction>,
    },
  },

  data() {
    return {
      // 初始值同步自 prop show 以确保气泡正常显示
      showBubble: this.show === "unset" ? false : this.show,
      BumperDisplay: new Bumper(350),
      BumperHide: new Bumper(50),
      newPosition: this.position,
    };
  },
  mounted() {
    // 设置气泡展示&消失演示避免闪烁
    this.BumperDisplay.setAlarmCooled(() => (this.showBubble = true));
    this.BumperHide.setAlarmCooled(() => (this.showBubble = false));

    this.setEvent();
  },
  computed: {
    ClassBubble() {
      return ["bubble", ...this.newPosition.split("-")];
    },
    positionReverse() {
      const [position] = this.newPosition.split("-");
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
      this.edgeAvoidance();
      // 使用 prop 'show' 控制时不使用延时
      if (this.show === "unset") {
        this.BumperDisplay.action();
      } else {
        this.showBubble = true;
      }
    },
    hideBubble() {
      // 使用 prop 'show' 控制时不使用延时
      if (this.show === "unset") {
        // 取消执行延迟任务
        clearTimeout(this.BumperDisplay.idTimeOut);
        this.BumperHide.action();
      } else {
        this.showBubble = false;
      }
    },
    edgeAvoidance() {
      // 计算元素的每条边距离屏幕边缘是否小于预设值
      const nearEdgeOfScreen = (() => {
        const marginMax = 50;
        let elSize = getOffset(this.$el);
        return {
          top: elSize.size.top <= marginMax,
          left: elSize.size.left <= marginMax,
          right: window.innerWidth - elSize.size.right <= marginMax,
          bottom: window.innerHeight - elSize.size.bottom <= marginMax,
        };
      })();

      let [position, start] = this.position.split("-");

      function findNewPosition() {
        switch (true) {
          case "top" != position && !nearEdgeOfScreen.top:
            return "top";
          case "bottom" != position && !nearEdgeOfScreen.bottom:
            return "bottom";
          case "left" != position && !nearEdgeOfScreen.left:
            return "left";
          case "right" != position && !nearEdgeOfScreen.right:
            return "right";
        }
        return "canter";
      }

      function NewStart() {
        // 仅在横轴方向执行转换,气泡在左右布局下不会超出元素上下边界
        if (["top", "bottom"].indexOf(position) !== -1) {
          switch (true) {
            case nearEdgeOfScreen.left:
              return "start";
            case nearEdgeOfScreen.right:
              return "end";
            case nearEdgeOfScreen.left && nearEdgeOfScreen.right:
              return "";
          }
        }
        return start;
      }

      function NewPosition() {
        switch (true) {
          case "top" == position && nearEdgeOfScreen.top:
            if (!nearEdgeOfScreen.bottom) {
              return "bottom";
            } else {
              return findNewPosition();
            }
          case "bottom" == position && nearEdgeOfScreen.bottom:
            if (!nearEdgeOfScreen.top) {
              return "top";
            } else {
              return findNewPosition();
            }
          case "left" == position && nearEdgeOfScreen.left:
            if (!nearEdgeOfScreen.right) {
              return "right";
            } else {
              return findNewPosition();
            }
          case "right" == position && nearEdgeOfScreen.right:
            if (!nearEdgeOfScreen.left) {
              return "left";
            } else {
              return findNewPosition();
            }
          default:
            return position;
        }
      }

      this.newPosition = (
        start ? `${NewPosition()}-${NewStart()}` : NewPosition()
      ) as any;
    },
    /**
     * 在 this.show 不为 undefined 时不设置事件触发气泡显示
     */
    setEvent() {
      const el = getEl(this, "j-bubble");
      if (this.show === "unset") {
        el.addEventListener("mouseenter", this.displayBubble);
        el.addEventListener("mouseleave", this.hideBubble);
      } else {
        el.removeEventListener("mouseenter", this.displayBubble);
        el.removeEventListener("mouseleave", this.hideBubble);
      }
    },
  },
  watch: {
    position(v) {
      this.newPosition = v;
    },
    show(v) {
      // 使用 Prop 'show' 控制气泡是否显示
      this.setEvent();
      v && v !== "unset" ? this.displayBubble() : this.hideBubble();
    },
  },
  render() {
    const Bubble = h(
      "div",
      {
        class: this.ClassBubble,
      },
      h("div", { class: "bubble-inner" }, this.$slots.bubble?.())
    );

    return h(
      baseAction,
      {
        class: "j-bubble",
      },
      {
        default: () =>
          h(
            Row,
            { X: "center", Y: "center" },
            {
              default: () => [
                this.$slots.default?.(),

                customRender(
                  this.showBubble ? Bubble : undefined,
                  this.customRender,
                  vNode =>
                    h(
                      TransitionSlider,
                      { position: this.positionReverse },
                      { default: () => vNode }
                    )
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
  color: var(--base-text-color);
  box-sizing: border-box;
  display: inline-block;
  user-select: none;
  font-size: 0.8rem;
  white-space: nowrap;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.j-bubble .bubble > .bubble-inner {
  padding: 5px 10px;
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

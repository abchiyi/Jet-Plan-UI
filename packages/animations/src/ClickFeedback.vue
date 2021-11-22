<script>
import ripple from "./ClickFeedbackRipple.vue";
import { h, TransitionGroup } from "vue";

export default {
  name: "m-click-feedback",
  data() {
    return {
      timeOutObj: undefined,
      masks: [],
      key: 0,
    };
  },
  components: {
    ripple,
  },
  props: {
    // TODO 或者透明度曲线
    opacity: {
      type: String,
      default: "0.5",
    },
    color: {
      // TODO 验证色彩字符串是否合法
      type: String,
      default: "#b3b3b3",
    },
  },
  methods: {
    createRippleAttrs(event) {
      const ripple = {
        data: {
          opacity: this.opacity,
          el: this.$refs.self,
          color: this.color,
          event: event,
        },
        key: this.key++,
      };
      return ripple;
    },
    startClick(event) {
      if (event.button === 0 && !this.ignoreClick) {
        this.masks.push(this.createRippleAttrs(event));
      }
      if (this.ignoreClick) this.ignoreClick = false;
      return false;
    },
    startTouche(event) {
      if (event.touches) {
        this.masks.push(this.createRippleAttrs(event.touches[0]));
        // 触发"touche"事件时会在之后触发"click"事件
        // 此变量改变下一次"click"回调函数的运行结果
        this.ignoreClick = true;
      }
    },
    end() {
      this.masks.forEach((ripple, index, masks) => {
        if (ripple.key != this.key) {
          masks.splice(index, 1);
        }
      });
    },
    renderRipples() {
      let key = 0;
      return h(
        TransitionGroup,
        { name: "ripple" },
        {
          default: () =>
            this.masks.map((attrs) => {
              return h(ripple, {
                data: attrs.data,
                key: key++,
              });
            }),
        }
      );
    },
    renderDefault() {
      return h(
        "div",
        {
          style: {},
        },
        this.$slots.default ? this.$slots.default() : ""
      );
    },
  },
  render() {
    return h(
      "div",
      {
        class: "click-feedback",
        onmousedown: this.startClick,
        onmouseleave: this.end,
        onmouseup: this.end,

        ontouchstart: this.startTouche,
        ontouchcancel: this.end,
        ontouchend: this.end,
        ref: "self",
      },
      {
        default: () => [this.renderDefault(), this.renderRipples()],
      }
    );
  },
};
</script>

<style >
.click-feedback > * {
  transition-duration: 0.8s;
}
.click-feedback {
  position: relative;
  overflow: hidden;
}
</style>

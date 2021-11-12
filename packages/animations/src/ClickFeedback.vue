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
        props: {
          opacity: this.opacity,
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
      // return false;
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
      this.masks.pop();
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
                ...attrs.props,
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
          style: {

          },
        },
        this.$slots.default()
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
  pointer-events: none;
}
.click-feedback {
  color: #b3b3b3;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
/* FIXME 使用相对于页面定位的点击坐标算法 */
/* 禁用组件下元素的点击事件 */
.click-feedback p {
  pointer-events: none;
}
</style>

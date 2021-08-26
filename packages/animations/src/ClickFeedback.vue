<script>
import ripple from "./ClickFeedbackRipple.vue";
import { h } from "vue";

export default {
  name: "m-click-feedback",
  data() {
    return {
      timeOutObj: undefined,
      AnimationTime: "800ms",
      masks: [],
      keys: 0
    };
  },
  props: {
    // TODO 或者透明度曲线
    opacity: {
      type: String,
      default: "0.5"
    },
    color: {
      // TODO 验证色彩字符串是否合法
      type: String,
      default: "rgb(200, 200, 200)"
    }
  },
  methods: {
    createRippleAttrs(event) {
      const ripple = {
        props: {
          animationTime: this.AnimationTime,
          opacity: this.opacity,
          color: this.color,
          event: event
        }
      };
      return ripple;
    },
    startClick(event) {
      if (event.button === 0 && !this.ignoreClick) {
        this.masks.push(this.createRippleAttrs(event));
      }
      if (this.ignoreClick) this.ignoreClick = false;
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
    }
  },
  render() {
    return h(
      "div",
      {
        class: "click-feedback",
        on: {
          mousedown: this.startClick,
          mouseleave: this.end,
          mouseup: this.end,

          touchstart: this.startTouche,
          touchcancel: this.end,
          touchend: this.end
        }
      },
      [
        this.$slots,
        ...this.masks.map(attrs => {
          // TODO 在这里控制使用的遮罩类型
          // TODO 待添加新类型遮罩
          return h(ripple, { ...attrs });
        })
      ]
    );
  }
};
</script>

<style >
.click-feedback {
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

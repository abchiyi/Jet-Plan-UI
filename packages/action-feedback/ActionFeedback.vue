<script>
function propInit(_type, _default) {
  return {
    type: _type || Boolean,
    default: _default || false
  };
}
import ripple from "./ActionFeedbackRipple.vue";
import { h, TransitionGroup } from "vue";
export default {
  name: "m-action-feedback",
  props: {
    // TODO 验证色彩字符串是否合法
    color: propInit(String, "#b3b3b3"),
    // TODO 或者透明度曲线
    opacity: propInit(String, "0.5"),
    tag: propInit(String, "div"),
    active: propInit(),
    hover: propInit(),
    ripple: propInit()
  },
  data() {
    return {
      data_hover: false,
      data_touch: false,
      masks: [],
      key: 0
    };
  },
  computed: {
    classes() {
      return [
        "m-action-feedback",
        this.hover && this.data_hover ? "hover" : ""
      ];
    }
  },
  methods: {
    // Ripple
    createRippleAttrs(event) {
      const ripple = {
        data: {
          opacity: this.opacity,
          el: this.$refs.self,
          color: this.color,
          event: event,
          ripple: !this.active
        },
        key: this.key++
      };
      return ripple;
    },
    removeRipple() {
      this.masks.forEach((ripple, index, masks) => {
        if (ripple.key != this.key) {
          masks.splice(index, 1);
        }
      });
    },
    // Render
    renderDefault() {
      const solt = this.$slots.default;
      if (solt) {
        return solt();
      }
      return "Submit";
    },
    renderRipples() {
      let key = 0;
      return h(
        TransitionGroup,
        { name: "mask" },
        {
          default: () =>
            this.masks.map(attrs => {
              return h(ripple, {
                data: attrs.data,
                key: key++
              });
            })
        }
      );
    },
    render() {
      return [this.renderDefault(), this.renderRipples()];
    },
    // Hover
    enter() {
      if (this.hover) this.data_hover = true;
    },
    leave() {
      if (this.hover) this.data_hover = false;
      this.removeRipple();
    },
    // Click
    startClick(event) {
      //   this.data_active = true;
      // Ripple
      if (this.ripple || this.active) {
        if (event.button === 0 && !this.ignoreClick) {
          this.masks.push(this.createRippleAttrs(event));
        }
        if (this.ignoreClick) this.ignoreClick = false;
      }
    },
    endClick() {
      if (this.data_touch) this.leave();
      //   this.data_active = false;
      this.removeRipple();
    },
    // Touch
    startTouche(event) {
      // XXX data_touch 不能设置为 false 未知的影响
      this.data_touch = true;
      this.enter();

      // Ripple
      if ((event.touches && this.ripple) || this.active) {
        this.masks.push(this.createRippleAttrs(event.touches[0]));
        // 触发"touche"事件时会在之后触发"click"事件
        // 此变量改变下一次"click"回调函数的运行结果
        this.ignoreClick = true;
      }
    },
    endTouche() {
      this.leave();
      this.removeRipple();
    }
  },
  watch: {},
  render() {
    return h(
      this.tag,
      {
        class: this.classes,
        onmousedown: this.startClick,
        onmouseup: this.endClick,

        onmouseenter: this.enter,
        onmouseleave: this.leave,

        ontouchstart: this.startTouche,
        ontouchcancel: this.endTouche,
        ontouchend: this.endTouche,
        ref: "self"
      },
      {
        default: this.render
      }
    );
  }
};
</script>
<style >
.m-action-feedback {
  position: relative;
  overflow: hidden;
}

.m-action-feedback::before {
  transition: 0.3s var(--ease-out-slow);
  background-color: var(--mask);
  position: absolute;
  content: "";
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

.m-action-feedback.hover:hover::before {
  opacity: 0.5;
}
</style>

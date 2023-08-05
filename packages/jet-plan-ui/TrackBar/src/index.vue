<script lang="ts">
import { numericLimits, Bumper, getOffset } from "../../tool";
import { computed, defineComponent, h, nextTick } from "vue";
import { JET_THEME } from "../../theme/theme";
import { Row } from "../../Grid";

const NAME = "j-track-bar";
export default defineComponent({
  name: NAME,
  emits: ["trackStart", "trackMove", "trackEnd", "update:percentage"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    displayOnly: {
      type: Boolean,
      default: false,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {
      colors: computed(() => JET_THEME.Theme),
    };
  },
  data() {
    return {
      Bumper: new Bumper(50),
      useTransition: true,
      Active: false,
    };
  },
  watch: {
    percentage() {
      this.Bumper.action(); // 监控样式更新频率
    },
  },
  computed: {
    classes() {
      return [
        !this.useTransition ? "transition-off" : "",
        this.disabled ? "disabled" : "",
      ];
    },
  },
  methods: {
    // Calc
    positionToPercentage(event: MouseEvent | Touch) {
      // 计算点击位置相对于滑动条百分比
      const elSize = getOffset(this.$el);
      return numericLimits(
        0,
        1,
        (event.pageX - elSize.size.left) / elSize.width
      );
    },

    /**
     * @param event 鼠标&触摸事件
     * @param noEvent 不发出 ‘trackStart’ 事件
     */
    async trackStart(event: MouseEvent | TouchEvent, noEvent?: boolean) {
      if (!this.Active) return;
      // 兼容触摸事件&点击事件
      function touchEventCompatible(event: MouseEvent | TouchEvent) {
        if (event.type.indexOf("touch") != -1) {
          const e = event as TouchEvent;
          return e.touches[0];
        }
        return event as MouseEvent;
      }

      // 计算点击位置百分比
      const percentage = this.positionToPercentage(touchEventCompatible(event));

      await nextTick();

      // 同步外部值
      this.$emit("update:percentage", percentage);
      // 被move调用时不发出事件 'trackStart'
      if (!noEvent) this.$emit("trackStart");
    },

    async trackMove(event: MouseEvent | TouchEvent) {
      if (!this.Active) return;
      this.trackStart(event, true);
      await nextTick();
      this.$emit("trackMove");
    },

    trackEnd() {
      this.Active = false;
      this.$emit("trackEnd");
    },

    enableTransition(value: boolean) {
      this.useTransition = value;
    },

    handleMouseDown(event: MouseEvent) {
      if (this.disabled || this.displayOnly) return;
      this.Active = true;
      this.trackStart(event);
    },

    handleTouchStart(event: TouchEvent) {
      if (this.disabled || this.displayOnly) return;
      this.Active = true;
      // event.preventDefault();
      this.trackStart(event);
    },
  },
  mounted() {
    // Mouse
    document.addEventListener("mousemove", this.trackMove);
    document.addEventListener("mouseup", this.trackEnd);

    // Touch
    document.addEventListener("touchcancel", this.trackEnd);
    document.addEventListener("touchmove", this.trackMove);
    document.addEventListener("touchend", this.trackEnd);

    // 设置动画启停模式，当百分比发生快速变动时禁用动画以流畅追踪用户操作
    this.Bumper.setAlarmCooled(() => {
      this.enableTransition(true);
    });
    this.Bumper.setAlarmOverHeat(() => {
      this.enableTransition(false);
    });
  },
  unmounted() {
    document.removeEventListener("mousemove", this.trackMove);
    document.removeEventListener("mouseup", this.trackEnd);

    document.removeEventListener("touchmove", this.trackMove);
    document.removeEventListener("touchend", this.trackEnd);
    document.removeEventListener("touchcancel", this.trackEnd);
  },
  render() {
    const SLIDER = h(
      "div",
      {
        style: { width: this.percentage * 100 + "%" },
        class: ["slider"],
      },
      this.$slots.slider?.()
    );

    const BACKGROUND = h("div", { class: ["background"] }, [
      this.$slots.background?.(),
      SLIDER,
    ]);

    const SLOT_CONTENT = h(
      Row,
      {
        class: ["slot-content"],
        Y: "center",
      },

      {
        default: () => {
          if (this.$slots.default) {
            return this.$slots.default();
          }
        },
      }
    );

    return h(
      "div",
      {
        class: [NAME, ...this.classes],
        ontouchstart: this.handleTouchStart,
        onmousedown: this.handleMouseDown,
        // style: this.style,
      },
      [BACKGROUND, this.$slots.default ? SLOT_CONTENT : null]
    );
  },
});
</script>

<style>
/* VALUES */
.j-track-bar {
  --HEIGHT: 1em;
}

.j-track-bar > * {
  user-select: none;
}

.j-track-bar {
  position: relative;
  cursor: pointer;
  display: block;
  width: 100%;
}

/* ----- Slot ----- */
.j-track-bar .slot-content {
  height: var(--HEIGHT);
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
}

.j-track-bar .slider {
  pointer-events: unset;
}

.j-track-bar .slot-content {
  /* color: var(--text-light); */
  padding: 0 0.3em;
}

.j-track-bar .background {
  border-radius: var(--HEIGHT);
  height: var(--HEIGHT);
  position: relative;
  overflow: hidden;
}

.j-track-bar .slider {
  transform: translate3d(0, 0, 0);
  height: var(--HEIGHT);
  position: absolute;
}

/* ----- animation ----- */

.j-track-bar .bubble-anchor,
.j-track-bar .slider {
  transition: width 0.4s var(--ease-out);
}

.j-track-bar.transition-off .slider {
  transition: unset;
}

/* ----- colors ----- */

/* default */
.j-track-bar .background {
  background-color: v-bind("colors.border.default");
  outline-color: v-bind("colors.border.default");
}

.j-track-bar .slider {
  background-color: v-bind("colors.infoColors.primary.default");
}

/* disabled */
.j-track-bar.disabled {
  color: v-bind("colors.text.disabled");
  cursor: not-allowed;
}

.j-track-bar.disabled .background {
  background-color: v-bind("colors.border.default");
}

.j-track-bar.disabled .slider {
  background-color: v-bind("colors.infoColors.primary.disabled");
}
</style>

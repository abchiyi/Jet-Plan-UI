<script lang="ts">
import { computed, defineComponent, h } from "vue";
import { JET_THEME } from "../../theme/theme";
import { TrackBar } from "../../TrackBar";
import { getInputEl } from "../../tool";
import { Bubble } from "jet-plan-ui";
const NAME = "j-range";
export default defineComponent({
  name: NAME,
  props: { showValue: Boolean },
  setup() {
    return {
      colors: computed(() => JET_THEME.Theme),
    };
  },
  data() {
    return {
      inputEl: undefined as unknown as HTMLInputElement,
      thumbMouseEnter: false,
      thumbMouseDown: false,
      disabled: false,
      percentage: 0,
      manual: false,
      firstLoad: 2,
      inputValue: "0",
      range: {
        step: 0,
        max: 0,
        min: 0,
      },
    };
  },
  methods: {
    syncInputValue() {
      this.inputValue = this.inputEl.value;
    },
    getInputEl() {
      return getInputEl(this, "<j-range>");
    },
    getRange() {
      this.range = {
        step: this.inputEl.step ? Number(this.inputEl.step) : 1,
        max: this.inputEl.max ? Number(this.inputEl.max) : 100,
        min: this.inputEl.min ? Number(this.inputEl.min) : 0,
      };
    },
    /** 将 InputEl.value 转换为百分比并同步到 this.percentage */
    valueToPercentage() {
      const value = Number(this.inputEl.value);
      const { max, min } = this.range;
      const range = max - min;
      let percentage = value / range - min / range;

      this.percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage;
    },
    /** 将 this.percentage 转换为数值并同步到 Input 元素 */
    syncPercentageToInput() {
      const { max, min, step } = this.range;
      let value = this.percentage * (max - min) + min;
      value = Math.round(value / step) * step;
      value = parseFloat(value.toFixed(5));
      value > max ? max : value < min ? min : value;

      const el = this.inputEl;
      el.value = String(value);
      el.dispatchEvent(new InputEvent("input"));
    },
  },
  computed: {
    thumbVfx() {
      return this.thumbMouseDown || this.thumbMouseEnter ? true : false;
    },
  },
  mounted() {
    this.inputEl = this.getInputEl() as any;
    this.getRange();
    this.valueToPercentage();
    this.syncInputValue();
  },
  updated() {
    this.getRange();
    this.syncInputValue();
    // 仅在非手动操作下进行更新
    if (!this.manual) this.valueToPercentage();

    // 同步禁用状态
    this.disabled = this.getInputEl().disabled;
  },
  render() {
    const THUMB = h(
      "svg",
      {
        viewBox: "0 0 16 16",
        onmouseleave: () => (this.thumbMouseEnter = false),
        onmouseenter: () => (this.thumbMouseEnter = true),
        class: ["thumb", this.thumbVfx ? "vfx" : ""],
      },
      [
        h("g", null, [
          h("ellipse", { class: "background", cx: 8, cy: 8, rx: 8, ry: 8 }),
          h("ellipse", { class: "dot", cy: 8, cx: 8, rx: 4, ry: 4 }),
        ]),
      ]
    );

    const THUMB_BUBBLE = h(
      Bubble,
      {
        class: ["monospace"],
        show: this.thumbVfx && this.showValue,
      },
      {
        default: () => THUMB,
        // TODO 检测精度，并以该精度显示值
        bubble: () =>
          Number(this.inputValue).toFixed(
            (() => {
              const fixedPoint = this.range.step.toString().split(".")[1];
              return fixedPoint ? fixedPoint.length : 0;
            })()
          ),
      }
    );

    const SUB_SLIDER = h("div", { class: "sub-slider" }, THUMB_BUBBLE);

    const TRACK_BAR = h(
      TrackBar,
      {
        "onUpdate:percentage": v => (this.percentage = v),
        onTrackMove: this.syncPercentageToInput,
        onTrackEnd: () => {
          this.thumbMouseDown = false;
          this.manual = false;
        },
        onTrackStart: () => {
          this.thumbMouseDown = true;
          this.manual = true;
          this.syncPercentageToInput();
        },
        percentage: this.percentage,
        disabled: this.disabled,
      },
      {
        slider: () => SUB_SLIDER,
        background() {
          return h("div", { class: "fake-bg" });
        },
      }
    );

    const SLIDER_SHELL = h(
      "label",
      {
        for: this.$.uid,
        class: ["slider-shell"],
      },
      TRACK_BAR
    );

    return h(
      "div",
      {
        class: [NAME, "input-hidden", this.disabled ? "disabled" : ""],
      },
      [this.$slots.default?.(), SLIDER_SHELL]
    );
  },
});
</script>

<style>
.j-range {
  font-size: 1em;
  --THUMB-DIAMETER: 1em;
  --THUMB-RADIUS: calc(var(--THUMB-DIAMETER) / 2);
  display: inline-block;
  min-width: 150px;
}

/* 禁止元素内容被选中 */
.j-range,
.j-range .j-track-bar * {
  user-select: none;
}

.j-range .slider-shell {
  padding: calc(0.1 * var(--THUMB-DIAMETER)) calc(0.6 * var(--THUMB-DIAMETER));
  border-radius: var(--s-radius);
  box-sizing: border-box;
  display: block;
}

.j-range * {
  transition: unset;
}

/* transition */
.j-range .sub-slider .bubble {
  transition: color 0.3s var(--ease-out);
}
.j-range .fake-bg::before,
.j-range .sub-slider {
  transition: background 0.3s var(--ease-out);
}

.j-range .thumb * {
  transition: 0.3s var(--ease-out);
}

/* slider & thumb & bubble */

.j-range .j-track-bar .slider {
  align-items: center;
  background: unset;
  display: flex;
}

.j-range .sub-slider {
  background: v-bind("colors.infoColors.primary.default");
  width: calc(100% - var(--THUMB-DIAMETER));
  flex-direction: row-reverse;
  align-items: center;
  display: flex;
  height: 0.5em;
  width: 100%;
}

.j-range .thumb {
  height: var(--THUMB-DIAMETER);
  width: var(--THUMB-DIAMETER);
  flex-shrink: 0;
}

.j-range .thumb .dot {
  fill: v-bind("colors.background.light");
  fill-opacity: 1;
}
.j-range .thumb .background {
  fill: v-bind("colors.infoColors.primary.default");
  fill-opacity: 1;
}

.j-range .thumb.vfx .dot {
  rx: 5;
  ry: 5;
}

.j-range .sub-slider .j-bubble {
  transform: translateX(0.5em);
}

.j-range .sub-slider .bubble {
  background: v-bind("colors.background.default");
  border-radius: 0.25em;
  margin-bottom: 0.25em;
  font-size: inherit;
}

.j-range .sub-slider .bubble > .bubble-inner {
  padding: 0 0.2em;
}

/* background */

.j-range .j-track-bar .background {
  align-items: center;
  background: unset;
  display: flex;
  overflow: unset;
}

.j-range .fake-bg {
  background: v-bind("colors.border.default");
  justify-content: space-between;
  border-radius: 0.5em;
  align-items: center;
  display: flex;
  height: 0.5em;
  width: 100%;
}

/* 背景装饰条 */
.j-range .fake-bg::before,
.j-range .fake-bg::after {
  border-radius: var(--THUMB-RADIUS);
  width: var(--THUMB-DIAMETER);
  display: block;
  height: 0.5em;
  content: "";
}
.j-range .fake-bg::before {
  background: v-bind("colors.infoColors.primary.default");
  transform: translateX(calc(-1 * var(--THUMB-RADIUS)));
}
.j-range .fake-bg::after {
  background: v-bind("colors.border.default");
  transform: translateX(var(--THUMB-RADIUS));
}

/* ---------- Focus ---------- */

.j-range input:focus-visible + .slider-shell {
  outline: 2px solid v-bind("colors.infoColors.info.default");
}

/* ---------- Disabled ---------- */
.j-range .disabled .fake-bg::before {
  background: v-bind("colors.infoColors.primary.disabled");
  transform: translateX(calc(-1 * var(--THUMB-RADIUS)));
}

.j-range .disabled .thumb .background {
  fill: v-bind("colors.infoColors.primary.disabled");
}

.j-range .disabled .sub-slider {
  background: v-bind("colors.infoColors.primary.disabled");
}
</style>

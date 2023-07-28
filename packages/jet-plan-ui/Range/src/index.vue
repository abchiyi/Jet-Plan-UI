<script lang="ts">
import { numericLimits, getOffset } from "../../tool";
import { computed, defineComponent, h } from "vue";
import { JET_THEME } from "../../theme/theme";
import { TrackBar } from "../../TrackBar";
import { getInputEl } from "../../tool";
import { an } from "vitest/dist/global-e98f203b";
const NAME = "j-range";
export default defineComponent({
  name: NAME,
  setup() {
    return {
      colors: computed(() => JET_THEME.Theme),
    };
  },
  data() {
    return {
      disabled: false,
      percentage: 0,
      manual: false,
      firstLoad: 2,
      thumbMouseDown: false,
      thumbMouseEnter: false,
      REF_trackBar: { $el: undefined },
      REF_thumb: undefined,
    };
  },
  methods: {
    getInputEl() {
      return getInputEl(this, "<j-range>");
    },
    getRange() {
      const el = this.getInputEl();
      return {
        step: el.step ? Number(el.step) : 1,
        max: el.max ? Number(el.max) : 100,
        min: el.min ? Number(el.min) : 0,
      };
    },
    /** 将 InputEl.value 转换为百分比并同步到 this.percentage */
    valueToPercentage() {
      const value = Number(this.getInputEl().value);
      const { max, min } = this.getRange();
      const range = max - min;
      let percentage = value / range - min / range;

      this.percentage = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage;
    },
    /** 将 this.percentage 转换为数值并同步到 Input 元素 */
    syncPercentageToInput() {
      const { max, min, step } = this.getRange();
      let value = this.percentage * (max - min) + min;
      value = Math.round(value / step) * step;
      value = parseFloat(value.toFixed(5));
      value > max ? max : value < min ? min : value;

      const el = this.getInputEl();
      el.value = String(value);
      el.dispatchEvent(new InputEvent("input"));
    },
  },
  computed: {
    /**根据 this.percentage 的值计算 thumb 的位置 */
    thumbPosition() {
      const SLIDER_WIDTH = getOffset(this.REF_trackBar.$el).width;
      const THUMB_DIAMETER = getOffset(this.REF_thumb).width;

      const thumbRadius = THUMB_DIAMETER * 0.5;
      const MIN = thumbRadius * -1;
      const MAX = SLIDER_WIDTH + thumbRadius;
      const thumb_position = SLIDER_WIDTH * this.percentage - thumbRadius;
      return numericLimits(MIN, MAX, thumb_position) + "px";
    },
    thumbVfx() {
      return this.thumbMouseDown || this.thumbMouseEnter ? true : false;
    },
  },
  mounted() {
    this.valueToPercentage();
    this.REF_trackBar = this.$refs.trackBar as any;
    this.REF_thumb = this.$refs.thumb as any;
  },
  updated() {
    // 仅在非手动操作下进行更新
    if (!this.manual) this.valueToPercentage();

    // 同步禁用状态
    this.disabled = this.getInputEl().disabled;
  },
  render() {
    const THUMB = h(
      "svg",
      {
        onmouseleave: () => (this.thumbMouseEnter = false),
        onmouseenter: () => (this.thumbMouseEnter = true),
        class: ["thumb", this.thumbVfx ? "vfx" : ""],
        ref: "thumb",
      },
      [
        h("g", null, [
          h("ellipse", { class: "background", cx: 8, cy: 8, rx: 8, ry: 8 }),
          h("ellipse", { class: "dot", cy: 8, cx: 8, rx: 4, ry: 4 }),
        ]),
      ]
    );

    const TRACK_BAR = h(
      TrackBar,
      {
        "onUpdate:percentage": v => (this.percentage = v),
        class: [this.firstLoad ? "transition-off" : ""],
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
        ref: "trackBar",
      },
      {
        default: () => THUMB,
      }
    );

    const SLIDER_BACKGROUND = h(
      "div",
      {
        class: ["background"],
      },
      {
        default: () => [TRACK_BAR],
      }
    );

    const SLIDER_SHELL = h(
      "label",
      {
        for: this.$.uid,
        class: ["slider-shell"],
      },
      SLIDER_BACKGROUND
    );

    return h(
      "div",
      {
        class: [NAME, "input-hidden", this.disabled ? "disabled" : ""],
      },
      [SLIDER_SHELL, this.$slots.default?.()]
    );
  },
  watch: {
    // 当firstLoad值为0时启用动画，手动操作直接设置为0，在update阶段将-1
    manual() {
      if (this.firstLoad) this.firstLoad = 0;
    },
    percentage() {
      if (this.firstLoad) this.firstLoad--;
    },
  },
});
</script>

<style>
.j-range {
  font-size: 0.5rem;
  --THUMB-SIZE: 2em;
  --THUMB-RADIUS: calc(var(--THUMB-SIZE) / 2);
  display: inline-block;
  min-width: 150px;
}

.j-range .slider-shell {
  padding: calc(var(--THUMB-RADIUS) - 0.25em) 0.25em;
  border-radius: var(--s-radius);
  display: block;
}

.j-range .slider-shell > .background {
  background: linear-gradient(
    90deg,
    v-bind("colors.infoColors.primary.default") 50%,
    v-bind("colors.border.default") 50%
  );
  padding: 0 var(--THUMB-RADIUS);
  box-sizing: border-box;
  border-radius: 1em;
}

.j-range .thumb {
  transform: translateX(v-bind(thumbPosition));
  height: var(--THUMB-SIZE);
  width: var(--THUMB-SIZE);
  box-sizing: border-box;
  position: absolute;
  fill: none;
  left: 0;
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

.j-range .thumb,
.j-range .thumb *,
.j-range .j-track-bar * {
  transition: 0.4s var(--ease-out);
}

/* ---------- Move ---------- */

.j-range .transition-off .thumb {
  transition: unset;
}

/* ---------- Focus ---------- */

.j-range input:focus-visible + .slider-shell {
  outline: 2px solid var(--info);
}

/* ---------- Disabled ---------- */

.j-range.disabled .slider-shell > .background {
  background: linear-gradient(
    90deg,
    v-bind("colors.infoColors.primary.disabled") 50%,
    v-bind("colors.border.default") 50%
  );
}

.j-range .disabled .thumb .background {
  fill: v-bind("colors.infoColors.primary.disabled");
}
</style>

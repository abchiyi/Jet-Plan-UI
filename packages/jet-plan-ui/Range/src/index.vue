<script lang="ts">
import { computed, defineComponent, h } from "vue";
import { JET_THEME } from "../../theme/theme";
import { TrackBar } from "../../TrackBar";
import { getInputEl } from "../../tool";
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
      thumbMouseEnter: false,
      thumbMouseDown: false,
      disabled: false,
      percentage: 0,
      manual: false,
      firstLoad: 2,
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
    thumbVfx() {
      return this.thumbMouseDown || this.thumbMouseEnter ? true : false;
    },
  },
  mounted() {
    this.valueToPercentage();
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

    const THUMB_SHELL = h("div", { class: "thumb-shell" }, THUMB);

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
        slider: () => THUMB_SHELL,
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
  /* font-size: 0.5rem; */
  font-size: 1em;
  --THUMB-SIZE: 1em;
  --THUMB-RADIUS: calc(var(--THUMB-SIZE) / 2);
  display: inline-block;
  min-width: 150px;
}

.j-range .slider-shell {
  padding: calc(var(--THUMB-RADIUS) - 0.25em) 0.25em;
  border-radius: var(--s-radius);
  display: block;
}

.j-range .thumb {
  height: var(--THUMB-SIZE);
  width: var(--THUMB-SIZE);
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

.j-range * {
  transition: unset;
}

.j-range .thumb *,
.j-range .j-track-bar {
  transition: 0.4s var(--ease-out);
}

/* slider & thumb */

.j-range .j-track-bar .slider {
  align-items: center;
  background: unset;
  display: flex;
}

.j-range .thumb-shell {
  background: v-bind("colors.infoColors.primary.default");
  min-width: var(--THUMB-SIZE);
  justify-content: flex-end;
  align-items: center;
  border-radius: 1em;
  display: flex;
  height: 0.5em;
  width: 100%;
}

/* background */

.j-range .j-track-bar .background {
  align-items: center;
  background: unset;
  display: flex;
}

.j-range .fake-bg {
  box-shadow: inset 0px 1px 1px 0px v-bind("colors.shadow");
  background: v-bind("colors.border.default");
  border-radius: 0.5em;
  height: 0.5em;
  width: 100%;
}

/* ---------- Move ---------- */

.j-range .transition-off .thumb {
  transition: unset;
}

/* ---------- Focus ---------- */

.j-range input:focus-visible + .slider-shell {
  outline: 2px solid v-bind("colors.infoColors.info.default");
}

/* ---------- Disabled ---------- */

.j-range .disabled .thumb .background {
  fill: v-bind("colors.infoColors.primary.disabled");
}

.j-range .disabled .thumb-shell {
  background: v-bind("colors.infoColors.primary.disabled");
}
</style>

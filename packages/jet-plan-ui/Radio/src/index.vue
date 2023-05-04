<script lang="ts">
import { computed, defineComponent, h } from "vue";
import { JET_THEME } from "../../theme/theme";
import { getInputEl } from "../../tool";
export default defineComponent({
  name: "j-radio",
  setup() {
    return {
      colors: computed(() => JET_THEME.Theme),
    };
  },
  mounted() {
    // 仅作为警告信息输出
    getInputEl(this, "<j-radio>");
  },
  render() {
    const INPUT = this.$slots.default ? this.$slots.default() : "";

    const WALLPAPER = h(
      "svg",
      {
        viewBox: "0 0 16 16",
      },
      [
        // background
        h("rect", {
          class: "background",
          height: "16",
          width: "16",
          rx: "8",
        }),
        // mask
        h("rect", {
          transform: "translate(2 2)",
          class: "mask",
          height: "12",
          width: "12",
          rx: "6",
        }),
        // dot
        h(
          "g",
          {
            class: "dot",
          },
          h("rect", {
            transform: "translate(5 5)",
            height: "6",
            width: "6",
            rx: "3",
          })
        ),
      ]
    );

    const RADIO_SHELL = h(
      "label",
      {
        class: ["shape ", "j-radio"],
      },
      [INPUT, WALLPAPER]
    );

    return RADIO_SHELL;
  },
});
</script>

<style>
/*--------------- Animation --------------- */
.j-radio * {
  transition: 0.3s var(--ease-out);
}

/*--------------- Default --------------- */
.j-radio {
  display: inline-block;
  height: var(--HEIGHT);
  width: var(--HEIGHT);
  position: relative;
  user-select: none;
  margin: 0 2px;
  cursor: pointer;
}

.j-radio .background {
  fill: v-bind("colors.border.default");
}

.j-radio .mask {
  fill: v-bind("colors.border.dark");
}

.j-radio .dot {
  transform-origin: center;
  transform: scale(0);
  fill: v-bind("colors.background.light");
}

/*--------------- Focus --------------- */
.j-radio input[type="radio"]:focus-visible + svg {
  outline: 2px solid v-bind("colors.infoColors.info.default");
  border-radius: 1em;
  transition: unset;
}

/*--------------- Select --------------- */
.j-radio input[type="radio"]:checked + svg > .background {
  fill: v-bind("colors.infoColors.primary.light");
}

.j-radio input[type="radio"]:checked + svg > .mask {
  fill: v-bind("colors.infoColors.primary.default");
}

.j-radio input[type="radio"]:checked + svg > .dot {
  transform: scale(1);
}

/*--------------- Disabled --------------- */
.j-radio input[type="radio"]:disabled + svg {
  cursor: not-allowed;
}

/* select */
.j-radio input[type="radio"]:disabled + svg .background {
  fill: v-bind("colors.border.light");
}

.j-radio input[type="radio"]:disabled + svg .mask {
  fill: v-bind("colors.border.default");
}

.j-radio input[type="radio"]:disabled + svg .dot {
  fill: v-bind("colors.background.light");
}
</style>

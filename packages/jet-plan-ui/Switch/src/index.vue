<script lang="ts">
import { JET_THEME } from "../../theme";

import { computed, defineComponent, h } from "vue";
import { getInputEl } from "../../tool";

export default defineComponent({
  name: "j-switch",
  setup() {
    return {
      colors: computed(() => JET_THEME.Theme),
    };
  },
  mounted() {
    // 仅作为警告信息输出
    getInputEl(this, "<j-switch>");
  },
  data() {
    return {
      wider: false,
      timeout: undefined as any,
    };
  },
  computed: {
    classes() {
      return ["shape j-switch", this.wider ? "wider" : ""];
    },
  },
  methods: {
    toWider() {
      // 在按下50ms后设置拨杆拉宽参数为true
      this.timeout = setTimeout(() => {
        this.wider = true;
      }, 50);
    },
    cancellation(event: MouseEvent | TouchEvent) {
      const removeWider = () => {
        clearTimeout(this.timeout);
        this.timeout = null;
        this.wider = false;
      };

      // 在抬起或离开元素后设置拨杆拉宽参数为false
      if (event instanceof TouchEvent) {
        removeWider();
        return;
      }
      if (!this.$el.contains(event.relatedTarget)) removeWider();
    },
  },
  render() {
    const INPUT = this.$slots.default ? this.$slots.default() : "";

    const WALLPAPER = h(
      "svg",
      {
        viewBox: "0 0 26 16",
      },
      [
        // background
        h("rect", {
          class: "background",
          rx: "8",
        }),
        // mask
        h("rect", {
          transform: "translate(2 2)",
          class: "mask",
          height: "12",
          width: "22",
          rx: "6",
        }),
        // thumb
        h("g", { class: "lever" }, [
          h("rect", {
            class: "lever-fill",
            height: "10",
            width: "10",
            rx: "5",
          }),
        ]),
      ]
    );

    const SWITCH_SHELL = h(
      "label",
      {
        class: this.classes,

        onMousedown: this.toWider,
        onMouseup: this.cancellation,
        onMouseout: this.cancellation,

        onTouchstart: this.toWider,
        onTouchend: this.cancellation,
        onTouchcancel: this.cancellation,
      },
      [INPUT, WALLPAPER]
    );

    return SWITCH_SHELL;
  },
});
</script>
<style>
.j-switch {
  vertical-align: middle;
  height: var(--HEIGHT);
  width: var(--WIDTH);
  display: inline-block;
  user-select: none;
  cursor: pointer;
  font-size: 24px;
  margin: 0 2px;
}

.j-switch .background {
  width: 26px;
  height: 16px;
}

.j-switch .lever {
  transform: translate(3px, 3px);
  stroke-width: 1;
}

/*--------------- Active --------------- */

/* off */
.j-switch.wider .lever > .lever-fill {
  width: 15px;
}

/* on */
.j-switch.wider > input:checked + svg .lever-fill {
  width: 15px;
  transform: translate(-5px, 0);
}

/*--------------- Focus --------------- */
.j-switch > input[type="checkbox"]:focus-visible + svg {
  outline: 2px solid v-bind("colors.infoColors.info.default");
  border-radius: 4px;
  transition: unset;
}

/*--------------- off --------------- */
.j-switch .background {
  fill: v-bind("colors.border.default");
}

.j-switch .mask {
  fill: v-bind("colors.border.dark");
}

.j-switch .lever {
  fill: v-bind("colors.background.light");
}

/*--------------- ON --------------- */
.j-switch > input:checked + svg .background {
  fill: v-bind("colors.infoColors.primary.light");
}

.j-switch > input:checked + svg .mask {
  fill: v-bind("colors.infoColors.primary.default");
}

.j-switch > input:checked + svg .lever {
  fill: white;
  transform: translate(13px, 3px);
}

/*------------ Animation ----------*/
.j-switch * {
  transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

/*--------------- Disabled --------------- */

/* on */
.j-switch > input:disabled:checked + svg .background {
  fill: v-bind("colors.border.default");
}

.j-switch > input:disabled:checked + svg .mask {
  fill: v-bind("colors.infoColors.primary.disabled");
}

.j-switch > input:disabled:checked + svg .lever {
  opacity: 0.5;
}

/* off */
.j-switch > input:disabled + svg .background {
  fill: v-bind("colors.border.light");
}

.j-switch > input:disabled + svg .mask {
  fill: v-bind("colors.border.default");
}

/* 切换指针为禁用 */
.j-switch > input:disabled + svg {
  cursor: not-allowed;
}
</style>

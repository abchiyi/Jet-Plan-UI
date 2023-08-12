<script lang="ts">
import { h, defineComponent, computed } from "vue";
import { ActionFeedback } from "../../ActionFeedback";
// TODO// import { autoTextColor } from "../../tool/lib";
import { JET_THEME } from "../../theme";
export default defineComponent({
  name: "j-button",
  setup() {
    const colors = computed(() => JET_THEME.Theme);

    return {
      colors,
    };
  },
  data() {
    return {
      value: false,
      maskSize: null,
      baseColor: "",
    };
  },
  mounted() {
    function checkAndSetTransition(el: HTMLElement) {
      function getTransitionDuration(el: HTMLElement) {
        return parseFloat(window.getComputedStyle(el).transitionDuration);
      }
      if (!getTransitionDuration(el)) {
        el.style.transition = "0.1s ease-in-out";
      }
    }
    const el = this.$el as HTMLElement;
    el.addEventListener("transitionend", () => {
      checkAndSetTransition(el);
      this.calcTextColor();
    });
    this.calcTextColor();
  },
  updated() {
    this.calcTextColor();
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    calcTextColor() {
      // TODO// import { autoTextColor } from "../../tool/lib";
      // if (!this.text) {
      //   this.baseColor = autoTextColor(this.$refs.self.$el);
      // }
    },
  },
  render() {
    return h(
      ActionFeedback,
      {
        class: [
          "shape",
          "j-button",
          this.text ? "text-button" : "button",
          this.disabled ? "disabled" : null,
          this.primary ? "primary" : null,
          this.block ? "block" : null,
        ],
        tag: "button",
        active: !this.disabled,
        hover: !this.disabled,
        ref: "self",
        style: {
          "--base-text-color": this.baseColor,
        },
      },
      {
        default: () => [this.$slots.default?.()],
      }
    );
  },
});
</script>
<style>
/*------------ Default ----------*/

.j-button {
  border: 0.125em v-bind("colors.border.default") solid;
  background: v-bind("colors.background.dark");
  transition: all 0.3s var(--ease-out);
  color: v-bind("colors.text.default");
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  border-radius: 0.25em;
  font-size: 0.8rem;
  padding: 5px 10px;
  user-select: none;
  cursor: pointer;
  margin: 0.25em;
}

/*------------ Focus ----------*/

.j-button:focus-visible {
  outline: 0.2em v-bind("colors.infoColors.info.default") solid;
}

/*------------ disabled ----------*/

.j-button.button.disabled {
  border-color: v-bind("colors.border.light");
  color: v-bind("colors.text.disabled");
  cursor: not-allowed;
}

/*------------ OneLine ----------*/
.j-button.block {
  display: block;
  width: 100%;
}

/* Button Mode Only*/
/*------------ Primary ----------*/
.j-button.primary {
  background-color: v-bind("colors.infoColors.primary.light");
  color: v-bind("colors.text.light");
  border-color: v-bind("colors.infoColors.primary.default");
}

/* Text Button */
/*------------ Default ----------*/
.j-button.text-button {
  background: unset;
  padding: 6px 8px;
  border: unset;
}
/*------------ Primary ----------*/
.j-button.text-button.primary {
  color: v-bind("colors.infoColors.primary.default");
}

/* ------------ disabled ---------- */
.j-button.text-button.disabled {
  color: v-bind("colors.text.disabled");
  background: unset;
}

/* p span */
span > .j-button.text-button,
p > .j-button.text-button {
  padding-top: unset;
  padding-bottom: unset;
}
</style>

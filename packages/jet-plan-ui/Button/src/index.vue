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
  computed: {
    classes() {
      return [
        "shape",
        "j-button",
        this.text ? "text-button" : "button",
        this.disabled ? "disabled" : null,
        this.primary ? "primary" : null,
        this.block ? "block" : null,
      ];
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
        class: this.classes,
        tag: "button",
        active: true,
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
  background: v-bind("colors.background.dark");
  transition: all 0.3s var(--ease-out);
  color: v-bind("colors.text.default");
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 5px 10px;
  user-select: none;
  cursor: pointer;
}

.j-button {
  margin: calc(1em * 0.15);
}

/*------------ disabled ----------*/

.j-button.button.disabled {
  background: v-bind("colors.background.default");
  color: v-bind("colors.text.disabled");
  cursor: not-allowed;
}

/*------------ OneLine ----------*/
.j-button.block {
  margin-left: unset;
  margin-right: unset;
  display: block;
  width: 100%;
}

/* Button Mode Only*/
/*------------ Primary ----------*/
.j-button.primary {
  background-color: v-bind("colors.infoColors.primary.default");
  color: v-bind("colors.text.light");
}

/* Text Button */
/*------------ Default ----------*/
.j-button.text-button {
  background: unset;
  padding: 6px 8px;
  outline: unset;
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

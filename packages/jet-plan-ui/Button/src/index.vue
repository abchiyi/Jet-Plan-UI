<script lang="ts">
import { h, defineComponent, computed, PropType } from "vue";
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
    block: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String as PropType<"text" | "button" | "outline">,
      default: "button",
    },
    styleType: String as PropType<"primary" | "warning" | "danger" | "success">,
  },
  methods: {
    calcTextColor() {
      // TODO// import { autoTextColor } from "../../tool/lib";
      // if (!this.text) {
      //   this.baseColor = autoTextColor(this.$refs.self.$el);
      // }
    },
  },
  computed: {
    activeProps() {
      function a(background: any) {
        return {
          opacity: 0.5,
          background,
        };
      }

      switch (true) {
        case this.styleType == "primary":
          return a(this.colors.infoColors.primary.dark);
        case this.styleType == "danger":
          return a(this.colors.infoColors.error.dark);
        case this.styleType == "success":
          return a(this.colors.infoColors.success.dark);
        case this.styleType == "warning":
          return a(this.colors.infoColors.warning.dark);

        default:
          return a(this.colors.border.dark);
      }
    },
  },
  render() {
    return h(
      ActionFeedback,
      {
        activeProps: this.activeProps,
        class: [
          "shape",
          "j-button",
          this.mode,
          this.styleType,
          this.block ? "block" : null,
          this.disabled ? "disabled" : null,
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
  background: var(--border-light);
  transition: all 0.3s var(--ease-out);
  box-sizing: border-box;
  display: inline-block;
  border-radius: 0.25em;
  white-space: nowrap;
  position: relative;
  color: var(--text);
  font-size: 0.8rem;
  padding: 5px 10px;
  user-select: none;
  cursor: pointer;
  margin: 0.25em;
}

.j-button.outline {
  color: var(--text);
  border: 1px solid var(--border-dark);
}

/*------------ Focus ----------*/

.j-button:focus-visible {
  outline: 0.2em var(--info-colors-info) solid;
}

/*------------ disabled ----------*/
.j-button.text.disabled,
.j-button.outline.disabled,
.j-button.button.disabled {
  color: var(--text-disabled);
  cursor: not-allowed;
}

/*------------ OneLine ----------*/
.j-button.block {
  display: block;
  width: 100%;
}

/* p span */
span > .j-button.text,
p > .j-button.text {
  padding-top: unset;
  padding-bottom: unset;
}
</style>

<!-- Primary -->
<style scoped>
.primary {
  background: var(--info-colors-primary);
  color: var(--text-light);
}
.primary.disabled {
  background-color: var(--info-colors-primary-light);
  color: var(--text-light-disabled);
}

.outline.primary,
.primary.text {
  color: var(--info-colors-primary-dark);
}

.outline.primary {
  border-color: var(--info-colors-primary-dark);
}
.outline.primary.disabled,
.primary.text.disabled {
  color: var(--info-colors-primary-transparent);
}
.outline.primary.disabled {
  border-color: var(--info-colors-primary-transparent);
}

.primary > .j-mask,
.primary.hover:hover::after {
  background: var(--info-colors-primary-dark);
}
</style>
<!-- Warning -->
<style scoped>
.warning {
  background: var(--info-colors-warning);
  color: var(--text-light);
}
.warning.disabled {
  background: var(--info-colors-warning-light);
  color: var(--text-light-disabled);
}
.outline.warning {
  border-color: var(--info-colors-warning-dark);
}

.outline.warning,
.warning.text {
  color: var(--info-colors-warning-dark);
}

.outline.warning.disabled,
.warning.text.disabled {
  color: var(--info-colors-warning-transparent);
}

.outline.warning.disabled {
  border-color: var(--info-colors-warning-transparent);
}

.warning.hover:hover::after,
.warning > .j-mask {
  background: var(--info-colors-warning-dark);
}
</style>
<!-- success -->
<style scoped>
.success {
  background: var(--info-colors-success);
  color: var(--text-light);
}
.success.disabled {
  background: var(--info-colors-success-light);
  color: var(--text-light-disabled);
}

.outline.success {
  border-color: var(--info-colors-success-dark);
}

.outline.success,
.success.text {
  color: var(--info-colors-success-dark);
}

.outline.success.disabled,
.success.text.disabled {
  color: var(--info-colors-success-transparent);
}

.outline.success.disabled {
  border-color: var(--info-colors-success-transparent);
}

.success > .j-mask,
.success.hover:hover::after {
  background: var(--info-colors-success-dark);
}
</style>
<!-- danger -->
<style scoped>
.danger {
  background: var(--info-colors-error);
  color: var(--text-light);
}
.danger.disabled {
  background: var(--info-colors-error-light);
  color: var(--text-light-disabled);
}
.outline.danger {
  border-color: var(--info-colors-error-dark);
}

.outline.danger,
.danger.text {
  color: var(--info-colors-error-dark);
}

.outline.danger.disabled,
.danger.text.disabled {
  color: var(--info-colors-error-transparent);
}

.outline.danger.disabled {
  border-color: var(--info-colors-error-transparent);
}

.danger.hover:hover::after,
.danger > .j-mask {
  background: var(--info-colors-error-dark);
}
</style>

<!-- text & outline -->
<style scoped>
.outline.disabled,
.text.disabled,
.outline,
.text {
  background: unset;
  padding: 6px 8px;
}
</style>

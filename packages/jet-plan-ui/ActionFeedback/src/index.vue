<script lang="ts">
import baseAction from "./baseAction.vue";
import { h, defineComponent, Transition } from "vue";

class MaskStyleConfig extends Object {
  background: string;
  "--opacity": number;
  constructor(background: string, opacity: number) {
    super();
    this.background = background;
    this["--opacity"] = opacity;
  }
}

const Mask = defineComponent({
  props: {
    styleConfig: {
      type: Object,
      require: true,
    },
  },
  render() {
    return h("span", {
      class: ["j-mask", "mask"],
      style: this.styleConfig,
    });
  },
});
export default defineComponent({
  name: "j-action-feedback",
  props: {
    name: { type: String, default: "j" }, //TODO 未添加
    focus: { type: Boolean, default: false }, //TODO 未添加 focus 效果
    hover: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
  },
  data() {
    return {
      dataActive: false,
    };
  },
  computed: {
    classes() {
      return [
        "j-action-feedback",
        this.dataActive ? "active" : "",
        this.hover ? "hover" : "",
        this.focus ? "focus" : "",
      ];
    },
    // Render
    renderDefault() {
      const slot = this.$slots.default;
      if (slot) {
        return slot();
      }
      return "Submit";
    },
  },
  methods: {
    /** 开关函数，当 prop active
     * 不为 true 时，不处理数据 */
    handleAction(trigger: boolean) {
      if (!this.active) return;
      this.dataActive = trigger;
    },
  },
  render() {
    const Active = this.dataActive;
    const MaskActive = (() => {
      return h(
        Transition,
        { name: "mask" },
        {
          default() {
            if (!Active) return;
            const styleConfig = new MaskStyleConfig("var(--mask)", 1);
            return h(Mask, {
              styleConfig: styleConfig,
            });
          },
        }
      );
    })();

    return h(
      baseAction,
      {
        class: [...this.classes],
        onActive_from: () => {
          this.handleAction(true);
        },
        onActive_to: () => {
          this.handleAction(false);
        },
      },
      {
        default: () => [this.$slots.default?.(), MaskActive],
      }
    );
  },
});
</script>
<style>
.j-action-feedback {
  outline: solid 3px #00000000;
  position: relative;
  transition: unset;
  overflow: hidden;
}

.j-action-feedback,
.j-action-feedback::after {
  transition: 0.3s var(--ease-out-slow);
}

.j-action-feedback::after {
  pointer-events: none;
  position: absolute;
  content: "";
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

/* Mouse hover */
.j-action-feedback.hover:hover::after {
  background-color: var(--mask);
}

.j-action-feedback.hover::after {
  opacity: 0.5;
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
  .j-action-feedback {
    -webkit-tap-highlight-color: #ffffff00;
  }
}

/* Mask */
.j-action-feedback .j-mask {
  transform: translate3d(0, 0, 0);
  opacity: var(--opacity);
  pointer-events: none;
  position: absolute;
  user-select: none;
  display: block;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.j-action-feedback .mask-leave-to {
  transition: 0.4s cubic-bezier(0.6, 0.6, 0.4, 0.7);
  opacity: 0;
}
</style>

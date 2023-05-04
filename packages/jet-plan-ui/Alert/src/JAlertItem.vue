<script lang="ts">
import { defineComponent, h, isVNode, type PropType } from "vue";
import { shadowPainter } from "../../tool";
import { JET_THEME } from "../../theme";
import { Button } from "../../Button";
import type { alert } from "./Alert";
import { Row } from "../../Grid";

export default defineComponent({
  setup() {
    return {
      shadow: shadowPainter("bottom", 3, JET_THEME.Theme.shadow),
      colors: JET_THEME.Theme,
    };
  },
  props: {
    data: Object as PropType<alert>,
  },
  components: {
    "j-button": Button,
    "j-row": Row,
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close", this.data);
    },
  },
  render() {
    const DEFAULT = h("div", { class: "content" }, [
      (() => {
        const defaultContent = "Alert";
        if (!this.data) return defaultContent;
        const content = this.data.content;
        if (isVNode(content) || typeof content == "string") return content;
        if (
          (typeof content == "object" && content.default) ||
          isVNode(content.default)
        ) {
          return content.default;
        }
        return defaultContent;
      })(),
    ]);

    const BUTTON = h(
      Button,
      { onclick: this.close, text: true, hover: true },
      {
        default: () => {
          const defaultContent = "Close";
          if (!this.data) return defaultContent;
          const content = this.data.content;
          if (isVNode(content) || typeof content == "string") {
            return defaultContent;
          }
          if (typeof content == "object") {
            if (
              typeof content.closeButton == "string" ||
              isVNode(content.closeButton)
            ) {
              return content.closeButton;
            }
          }

          return defaultContent;
        },
      }
    );

    return h(
      "div",
      { class: ["j-alert-item", this.data?.type] },
      h(
        Row,
        { spaceMode: "between", Y: "center" },
        { default: () => [DEFAULT, BUTTON] }
      )
    );
  },
});
</script>
<style>
.j-alert-item {
  outline: solid 1px v-bind("colors.border.light");
  background: v-bind("colors.background.light");
  box-shadow: v-bind(shadow);
  border-radius: 4px;
  min-width: 200px;
  padding: 0.1rem;
}

.j-alert-item .content {
  width: 100%;
}

.j-alert-item .j-button {
  margin: unset;
  flex: none;
}

.j-alert-item .j-row::before {
  border-radius: 0.3em;
  height: 1.2em;
  margin: 0 4px;
  width: 0.3em;
  content: "";
  left: 0em;
}

.j-alert-item.info .j-row::before {
  background-color: v-bind("colors.infoColors.info.default");
}
.j-alert-item.success .j-row::before {
  background-color: v-bind("colors.infoColors.success.default");
}
.j-alert-item.warning .j-row::before {
  background-color: v-bind("colors.infoColors.warning.default");
}
.j-alert-item.error .j-row::before {
  background-color: v-bind("colors.infoColors.error.default");
}
</style>

<script lang="ts">
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";
import baseAction from "../../ActionFeedback/src/baseAction.vue";
import { TransitionSlider } from "../../Animations";
import { Row } from "../../Grid";
import { defineComponent, h, type PropType } from "vue";
export default defineComponent({
  name: "j-bubble",
  props: {
    position: {
      type: String as PropType<
        | "top"
        | "top-end"
        | "top-start"
        | "bottom"
        | "bottom-end"
        | "bottom-start"
        | "left"
        | "left-top"
        | "left-bottom"
        | "right"
        | "right-top"
        | "right-bottom"
      >,
      default: "top",
    },

    show: Boolean,
  },
  computed: {
    ClassBubble() {
      const [start, position] = Array.from(this.position?.split("-"));
      return ["bubble", start, position];
    },
    positionReverse() {
      const [position] = this.position.split("-");
      switch (position) {
        case "top":
          return "bottom";
        case "bottom":
          return "top";
        case "left":
          return "right";
        case "right":
          return "left";
        default: // 默认块解决类型分析问题，实际运行将不会被执行
          return "top";
      }
    },
  },
  render() {
    return h(
      baseAction,
      { class: "j-bubble" },
      {
        default: () =>
          h(
            Row,
            { X: "center", Y: "center" },
            {
              default: () => [
                this.$slots.default?.(),
                h(TransitionSlider, { position: this.positionReverse }),
              ],
            }
          ),
      }
    );
  },
});
</script>

<style scoped>
.j-bubble {
}
</style>

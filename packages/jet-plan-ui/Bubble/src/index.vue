<script lang="ts">
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
      return [start, position];
    },
  },
  methods: {
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
              default: () => [this.$slots.default?.(), h(TransitionSlider)],
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

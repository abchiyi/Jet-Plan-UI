<script lang="ts">
import { h, defineComponent } from "vue";
const name = "j-base-action";

export default defineComponent({
  name: name,
  props: {
    tag: { default: "div" },
  },
  data() {
    return {
      touchIsStarted: false,
    };
  },
  emits: ["active_from", "active_to"],
  methods: {
    activeFrom(event: Event) {
      this.$emit("active_from", event);
    },
    activeTo(event: Event) {
      this.$emit("active_to", event);
    },
    handlerMouseEvent(event: Event) {
      if (this.touchIsStarted) return;
      switch (event.type) {
        case "mousedown":
          this.activeFrom(event);
          break;
        case "mouseup":
          this.activeTo(event);
          break;
        case "mouseleave":
          this.activeTo(event);
          break;
      }
    },

    handlerTouchEvent(event: Event) {
      switch (true) {
        case "touchstart" === event.type:
          this.touchIsStarted = true;
          this.activeFrom(event);
          // this.hoverFrom(event);

          break;

        case ["touchend", "touchcancel"].includes(event.type):
          this.activeTo(event);
          // this.hoverTo(event);
          this.touchIsStarted = false;
          break;
      }
    },
  },
  render() {
    return h(
      this.tag,
      {
        class: [name],
        // Mouse
        onmousedown: this.handlerMouseEvent,
        onmouseup: this.handlerMouseEvent,
        onmouseleave: this.handlerMouseEvent,
        // Touch
        ontouchstart: this.handlerTouchEvent,
        ontouchcancel: this.handlerTouchEvent,
        ontouchend: this.handlerTouchEvent,
      },
      {
        default: () => [this.$slots.default?.()],
      }
    );
  },
});
</script>

import { h, Transition, defineComponent } from "vue";
import { validatorRange } from "../../tool";

export const TransitionFade = defineComponent({
  name: "j-transition-fade",
  render() {
    return h(
      Transition,
      { name: "j-transition-fade" },
      { default: () => [this.$slots.default?.()] }
    );
  },
});

const scaleName = "j-transition-scale";
export const TransitionScale = defineComponent({
  name: scaleName,
  render() {
    return h(
      Transition,
      { name: scaleName },
      { default: () => this.$slots.default?.() }
    );
  },
});

const foldedName = "j-transition-folded";
export const TransitionFolded = defineComponent({
  name: foldedName,
  methods: {
    enter(el: Element) {
      (el as HTMLElement).style.height = el.scrollHeight + "px";
    },
    afterEnter(el: Element) {
      (el as HTMLElement).style.height = "";
    },
    leave(el: Element) {
      const style = window.getComputedStyle(el);
      const paddingTop = Number(style.paddingTop.split("px")[0]);
      const paddingBottom = Number(style.paddingBottom.split("px")[0]);
      (el as HTMLElement).style.height =
        el.scrollHeight - paddingTop - paddingBottom + "px";
    },
    afterLeave(el: Element) {
      (el as HTMLElement).style.height = "";
    },
  },
  render() {
    return h(
      Transition,
      {
        name: foldedName,
        onEnter: this.enter,
        onAfterEnter: this.afterEnter,
        onLeave: this.leave,
        onAfterLeave: this.afterLeave,
      },
      { default: () => this.$slots.default?.() }
    );
  },
});

const sliderName = "j-transition-slide";
export const TransitionSlider = defineComponent({
  name: sliderName,
  props: {
    position: {
      type: String,
      required: true,
      validator: validatorRange(["left", "right", "top", "bottom"]),
    },
    opacity: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      function position(str: string) {
        const position = {
          left: "-100%,0,0",
          right: "100%,0,0",
          top: "0,-100%,0",
          bottom: "0,100%,0",
        };
        switch (str) {
          case "left":
            return position.left;
          case "right":
            return position.right;
          case "top":
            return position.top;
          case "bottom":
            return position.bottom;
        }
      }
      return {
        "--migration-distance": `translate3d(${position(this.position)})`,
        "--opacity": this.opacity ? 0 : 1,
      };
    },
  },
  methods: {},
  render() {
    return h(
      Transition,
      {
        name: "j-transition-slide",
        style: this.style,
      },
      {
        default: () => this.$slots.default?.(),
      }
    );
  },
});

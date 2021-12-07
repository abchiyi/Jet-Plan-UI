<script>
import { h, Transition } from "vue";
export default {
  name: "m-transition-slide",
  props: {
    position: {
      type: String,
      required: true,
      validator: function (value) {
        const checkout = ["left", "right", "top", "bottom"];
        return checkout.indexOf(value.toLowerCase()) !== -1;
      },
    },
    opacity: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      let position = {
        left: "-100%,0,0",
        right: "100%,0,0",
        top: "0,-100%,0",
        bottom: "0,100%,0",
      };
      return {
        "--migration-distance": `translate3d(${position[this.position]})`,
        "--opacity": this.opacity ? 0 : 1,
      };
    },
  },
  methods: {},
  render() {
    return h(
      Transition,
      {
        name: "m-transition-slide",
        class: this.position,
        style: this.style,
      },
      {
        default: () => this.$slots.default(),
      }
    );
  },
};
</script>

<style>
.m-transition-slide-enter-from,
.m-transition-slide-leave-active {
  transform: var(--migration-distance);
  opacity: var(--opacity);
}
.m-transition-slide-enter-active,
.m-transition-slide-leave-active {
  transition: all 500ms var(--ease-in-out);
}
</style>

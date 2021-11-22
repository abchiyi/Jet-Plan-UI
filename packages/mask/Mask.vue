<script>
import { h } from "vue";
import fade from "../animations/src/TransitionFade.vue";
export default {
  name: "m-mask",
  components: {
    fade,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Object,
      default: {
        bottom: 0,
        right: 0,
      },
    },
  },
  methods: {
    getSize() {
      return {};
    },
  },
  render() {
    return h(
      fade,
      {
        value: this.value,
        ref: "self",
      },
      {
        default: () => [h("div", { class: "m-mask", style: this.size })],
      }
    );
  },
};
</script>

<style>
.m-mask {
  background-color: var(--shadow);
  position: absolute;
  opacity: 0.3;
  left: 0;
  top: 0;
}
</style>

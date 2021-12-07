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
  },
  methods: {
    getSize() {
      return {};
    },
  },
  render() {
    return h(fade, null, {
      default: () => [
        h("div", {
          class: "m-mask",
          style: {
            //   XXX 无法应用过渡
            display: this.value ? "block" : "none",
          },
        }),
      ],
    });
  },
};
</script>

<style>
.m-mask {
  background-color: var(--shadow);
  position: absolute;
  opacity: 0.3;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}
</style>

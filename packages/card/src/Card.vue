<script>
import { h } from "vue";
export default {
  name: "m-card",
  props: {
    zDepth: {
      // TODD 限制范围
      type: Number,
      default: 2,
    },
  },
  computed: {
    classes() {
      let classes = ["m-card"];
      return classes;
    },
    styles() {
      return {
        "--z-depth": this.zDepth * 0.1,
      };
    },
  },
  render() {
    return h(
      "div",
      {
        class: this.classes,
        style: this.styles,
      },
      this.$slots
    );
  },
};
</script>

<style>
.m-card {
  box-shadow: 0 1px 3px 1px rgba(46, 47, 59, var(--z-depth));
  background: var(--card);
  border-radius: 14px;
  overflow: hidden;
  margin: 10px 0;
}
</style>

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
  /* TODO 可调的阴影等级 */
  /* box-shadow: 0 1px 3px 1px rgba(46, 47, 59, var(--z-depth)); */
  border-radius: var(--s-radius);
  box-shadow: var(--shadow);
  background: var(--card);
  overflow: hidden;
  margin: 10px 0;
}
</style>

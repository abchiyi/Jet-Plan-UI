<script>
import { h } from "vue";
export default {
  name: "m-card",
  props: {
    zDepth: {
      // TODD 限制范围
      type: Number,
      default: 2
    }
  },
  computed: {
    classes() {
      let classes = ["m-card"];
      return classes;
    },
    styles() {
      return {
        "--z-depth": this.zDepth * 0.1
      };
    }
  },
  render() {
    return h(
      "div",
      {
        class: this.classes,
        style: this.styles
      },
      this.$slots
    );
  }
};
</script>

<style>
.m-card {
  border-radius: var(--m-radius);
  box-shadow: var(--shadow);
  background: var(--card);
  margin: 10px 0;
}
</style>

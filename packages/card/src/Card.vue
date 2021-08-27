<script>
import { h } from "vue";
export default {
  name: "m-card",
  props: {
    bgBlur: {
      type: Boolean,
      default: false
    },
    zDepth: {
      // TODD 限制范围
      type: Number,
      default: 2
    }
  },
  computed: {
    classes() {
      let classes = ["m-card"];
      if (this.bgBlur) classes.push("blur");
      return classes;
    },
    styles() {
      let styles = {};
      // FIXME 引发层级bug
      // styles["--z-depth"] = this.zDepth * 0.1;
      return styles;
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
  box-shadow: 0 1px 3px 1px rgba(46, 47, 59, var(--z-depth));
  background: var(--white);
  border-radius: 14px;
  overflow: hidden;
  margin: 10px 0;
}

@supports (backdrop-filter: blur()) {
  .m-card.blur {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
  }
}
</style>

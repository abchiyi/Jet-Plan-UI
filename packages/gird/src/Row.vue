<script>
import { h } from "vue";

export default {
  name: "m-row",
  props: {
    X: {
      type: String,
      validator: (v) => {
        const value = ["start", "center", "end"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
      default: "start",
    },
    Y: {
      type: String,
      validator: (v) => {
        const value = ["top", "center", "bottom"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
      default: "top",
    },
    spaceMode: {
      type: String,
      validator: (v) => {
        const value = ["around", "between"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
    },
    warp: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    noGap: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    x() {
      if (this.spaceMode) {
        return `space-${this.spaceMode}`;
      } else {
        let v;
        switch (this.X) {
          case "end":
            v = "flex-end";
            break;
          default:
            v = this.X;
            break;
        }
        return v;
      }
    },
    y() {
      let v;
      switch (this.Y) {
        case "top":
          v = "flex-start";
          break;
        case "bottom":
          v = "flex-end";
          break;
        default:
          v = this.Y;
          break;
      }
      return v;
    },
    flexWrap() {
      return this.warp ? "wrap" : "nowrap";
    },
  },
  render() {
    return h(
      this.tag,
      {
        class: [
          "m-row",
          this.noGap ? "no-gap" : "",
          this.reverse ? "reverse" : "",
        ],
      },
      this.$slots
    );
  },
};
</script>


<style >
/* 取消子 Col 组件的间隙 */
.m-row.no-gap > .m-col {
  padding: unset;
}
</style>
<style scoped>
.m-row {
  display: flex;
  flex-direction: row;
  align-items: v-bind(y);
  justify-content: v-bind(x);
  flex-wrap: v-bind(flexWrap);
}

.m-row.reverse {
  flex-direction: row-reverse;
}
</style>

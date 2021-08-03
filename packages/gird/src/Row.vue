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
    },
    Y: {
      type: String,
      validator: (v) => {
        const value = ["top", "center", "bottom"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
    },
    spaceMode: {
      type: String,
      default: undefined,
      validator: (v) => {
        const value = ["around", "between"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
    },
    overWidthWarp: {
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
  },
  computed: {
    x() {
      if (this.X) {
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
      } else {
        return `space-${this.spaceMode}`;
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
      return this.overWidthWarp ? "warp" : "nowarp";
    },
    flexDirection() {
      return this.reverse ? "row-reverse" : "row";
    },
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.x);
    });
  },
  render() {
    return h(
      "div",
      { class: ["m-row", this.noGap ? "no-gap" : ""] },
      this.$slots
    );
  },
};
</script>


<style >
.m-row > .col {
  padding: 0 4px;
}
.m-row.no-gap > .col {
  padding: unset;
}
</style>
<style scoped>
.m-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: v-bind(y);
  justify-content: v-bind(x);
  flex-wrap: v-bind(flexWrap);
  flex-direction: v-bind(flexDirection);
}
</style>

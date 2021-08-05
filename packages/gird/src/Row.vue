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
      validator: (v) => {
        const value = ["around", "between"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
    },
    overWidthWrap: {
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
      return this.overWidthWrap ? "wrap" : "nowrap";
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

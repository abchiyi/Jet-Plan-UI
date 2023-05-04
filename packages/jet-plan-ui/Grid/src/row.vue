<script lang="ts">
import { h } from "vue";
import { validatorRange } from "../../tool";
import { defineComponent } from "vue";

export default defineComponent({
  name: "j-row",
  props: {
    X: {
      type: String,
      validator: validatorRange(["start", "center", "end"]),
      default: "start",
    },
    Y: {
      type: String,
      validator: validatorRange(["top", "center", "bottom"]),
      default: "top",
    },
    spaceMode: {
      type: String,
      validator: validatorRange(["around", "between"]),
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
          "j-row",
          this.noGap ? "no-gap" : "",
          this.reverse ? "reverse" : "",
        ],
      },
      this.$slots
    );
  },
});
</script>

<style>
/* 取消子 Col 组件的间隙 */
.j-row.no-gap > .j-col {
  padding: unset;
}
</style>
<style scoped>
.j-row {
  display: flex;
  flex-direction: row;
  align-items: v-bind(y);
  justify-content: v-bind(x);
  flex-wrap: v-bind(flexWrap);
}

.j-row.reverse {
  flex-direction: row-reverse;
}
</style>

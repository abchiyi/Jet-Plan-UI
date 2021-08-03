<script>
import { h } from "vue";
export default {
  name: "m-row",
  props: {
    X: {
      type: String,
      default: "start",
      validator: (v) => {
        const value = ["start", "center", "end"];
        return value.indexOf(v.toLowerCase()) !== -1;
      },
    },
    Y: {
      type: String,
      default: "unset",
      validator: (v) => {
        const value = ["start", "center", "end"];
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
  render() {
    return h(
      "div",
      {
        class: ["m-row"],
        style: {
          // 设置文本横向起始位置
          justifyContent: this.start,
        },
      },
      this.$slots
    );
  },
};
</script>

<style scoped>
.m-row {
  justify-content: flex-start;
  flex-direction: row;
  display: flex;
  width: 100%;
}
</style>

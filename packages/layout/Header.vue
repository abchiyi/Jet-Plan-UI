<script>
import { h } from "vue";
export default {
  name: "m-header",
  render() {
    return h(
      "header",
      {
        class: ["m-header", ""]
      },
      this.$slots
    );
  }
};
</script>

<style>
/* TODO 子元素不能横轴中心对其 */
.m-header {
  position: fixed;
  height: 72px;
  z-index: 90;
  right: 0;
  left: 0;
}

.m-header > * {
  max-height: 72px;
}
</style>

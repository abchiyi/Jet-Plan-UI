<script>
export default {
  name: "m-header",
  render(createElement) {
    return createElement(
      "header",
      {
        class: ["m-header", "frosted-glass"],
      },
      this.$slots.default
    );
  },
};
</script>

<style>
.m-header {
  position: fixed;
  height: 72px;
  z-index: 90;
  right: 0;
  left: 0;
  top: 0;
}
</style>

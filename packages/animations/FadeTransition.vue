<script>
import { h } from "vue";
export default {
  name: "m-fade-transition",
  render() {
    return h("div", { class: "m-fade-transition" }, [
      h(
        "transition",
        {
          props: { name: "m-fade-transition" }
        }
        // [this.$slots.default]
      )
    ]);
  }
};
</script>

<style>
.m-fade-transition-enter-active,
.m-fade-transition-leave-active {
  transition: opacity 0.6s cubic-bezier(0.2, 0.4, 0.4, 1);
}
.m-fade-transition-enter,
.m-fade-transition-leave-to {
  opacity: 0;
}
</style>

<script>
import { h, Transition } from "vue";
export default {
  name: "m-transition-fade",
  render() {
    return h(
      Transition,
      {
        name: "m-transition-fade",
      },
      {
        default: () => this.$slots.default(),
      }
    );
  },
};
</script>

<style>
.m-transition-fade-enter-active,
.m-transition-fade-leave-active {
  transition: opacity 0.4s var(--ease-out);
}
.m-transition-fade-enter-from,
.m-transition-fade-leave-active {
  opacity: 0 !important;
}
</style>

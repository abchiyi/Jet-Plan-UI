<script>
import { h } from "vue";
export default {
  name: "m-li",
  render() {
    return h(
      "li",
      {},
      {
        default: () => [this.$slots.default()],
      }
    );
  },
};
</script>

<style>
</style>

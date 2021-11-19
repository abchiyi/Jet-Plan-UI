<script>
import { h } from "vue";
export default {
  name: "m-ul",
  render() {
    return h(
      "ul",
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

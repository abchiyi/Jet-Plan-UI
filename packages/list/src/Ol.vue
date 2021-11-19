<script>
import { h } from "vue";
export default {
  name: "m-ol",
  render() {
    return h(
      "ol",
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

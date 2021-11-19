<script>
import { h } from "vue";
export default {
  name: "m-list-item",
  props: {},
  methods: {
    renderDefault() {
      let solt = this.$slots.default;
      if (solt) {
        return solt();
      }
    },
  },
  render() {
    return h(
      "li",
      { class: ["m-list"] },
      {
        default: () => [this.renderDefault()],
      }
    );
  },
};
</script>

<style>
</style>

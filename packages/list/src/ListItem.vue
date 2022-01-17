<script>
import { Button } from "../../form";
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
    }
  },
  render() {
    return h(
      Button,
      {
        class: ["m-list-item"],
        hover: true,
        text: true,
        row: true,
        tag: "li"
      },
      {
        default: () => [this.renderDefault()]
      }
    );
  }
};
</script>

<style>
</style>

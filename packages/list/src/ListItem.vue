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
    },
  },
  render() {
    return h(
      Button,
      {
        class: ["m-list-item"],
        hoverAnimation: true,
        text: true,
        row: true,
        tag: "li",
      },
      {
        default: () => [this.renderDefault()],
      }
    );
  },
};
</script>

<style>
.m-list-item {
  border-radius: 8px;
  padding: 10px 5px;
  list-style-type: none;
  overflow: hidden;
  display: block !important;
}

.m-list-item + .m-list-item {
  margin-top: 5px;
}
</style>

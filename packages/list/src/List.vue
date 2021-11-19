<script>
import { h } from "vue";
export default {
  name: "m-list",
  props: {
    start: {
      type: Number,
      default: 0,
    },
  },
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
      this.start ? "ul" : "ol",
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

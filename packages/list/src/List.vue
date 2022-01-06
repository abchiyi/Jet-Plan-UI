<script>
import { h } from "vue";
export default {
  name: "m-list",
  props: {
    start: {
      type: Number,
      default: 0
    }
  },
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
      this.start ? "ol" : "ul",
      { class: ["m-list"], start: this.start },
      {
        default: () => [this.renderDefault()]
      }
    );
  }
};
</script>

<style>
.m-list {
  margin: unset;
  padding: unset;
  font-family: SarasaMono;
}
</style>

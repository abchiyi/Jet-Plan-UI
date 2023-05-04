<script lang="ts">
import { defineComponent, h } from "vue";
import { Button } from "jet-plan-ui";
import { RouterLink, useLink } from "vue-router";
export default defineComponent({
  name: "link-button",
  props: {
    //@ts-ignore
    ...RouterLink.props,
  },
  setup(props) {
    return {
      //@ts-ignore
      link: useLink(props),
    };
  },
  render() {
    return h(
      Button,
      {
        onClick: this.link.navigate,
        class: "link-button",
        href: this.link.href.value,
        tag: "a",
      },
      {
        default: this.$slots.default,
      }
    );
  },
});
</script>

<style>
.link-button {
  text-decoration-line: none;
}
</style>

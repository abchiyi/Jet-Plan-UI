<script lang="ts">
import { defineComponent, h } from "vue";
import { Button } from "jet-plan-ui";
import { RouterLink, useLink } from "vue-router";
export default defineComponent({
  name: "link-button",
  props: {
    //@ts-ignore
    ...RouterLink.props,
    activePath: Boolean,
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
        class: [
          "link-button",
          this.link.href.value.includes(this.$route.path) && this.activePath
            ? "link-active"
            : "",
        ],
        href: this.link.href.value,
        tag: "a",
      },
      {
        default: () =>
          h("div", { class: "text-shell" }, this.$slots.default?.()),
      }
    );
  },
});
</script>

<style scoped>
.link-button {
  text-decoration-line: none;
}
.link-button.link-active {
  color: var(--info-colors-primary);
}

.link-button .text-shell {
  transition: inherit;
}
.link-button.link-active .text-shell {
  transform: scale(1.1);
}
</style>

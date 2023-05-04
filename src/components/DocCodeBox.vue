<script lang="ts">
import { defineComponent, h, isVNode } from "vue";
import { CodeBox } from "jet-plan-ui";
export default defineComponent({
  methods: {
    getLanguage() {
      const pre = this.$slots.default?.()[0];
      if (pre?.children instanceof Array) {
        const code = pre.children[0];

        if (isVNode(code)) {
          const codeClass = code.props?.class as string;
          return {
            language: codeClass.replace("language-", ""),
            autodetect: false,
          };
        }
      }

      return {
        language: "",
        autodetect: true,
      };
    },
  },
  render() {
    return h(
      CodeBox,
      {
        canCopy: true,
        ...this.getLanguage(),
      },
      {
        default: () => this.$slots.default?.(),
        copyButton: () => h("i", { class: "bi bi-clipboard-plus" }),
      }
    );
  },
});
</script>

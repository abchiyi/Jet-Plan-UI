<script lang="ts">
import { defineComponent, h, type VNode } from "vue";
import { Button } from "../../Button";
import { Row } from "../../Grid";
// hljs
import highlightjsPLugin from "@highlightjs/vue-plugin/src/vue";
const component = highlightjsPLugin.component;

export default defineComponent({
  name: "j-code-box",
  props: {
    canCopy: Boolean,
    code: String,
    language: {
      type: String,
      default: "",
    },
    autodetect: {
      type: Boolean,
      default: true,
    },
    ignoreIllegals: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["copy-success", "copy-fail"],
  computed: {
    rawCode() {
      const getCode = (v_node?: VNode[]) => {
        if (this.code) return this.code; // 代码提供 props.code 优先
        // 从 slots 获取 code
        const codeVNode = v_node ? v_node : this.$slots.default?.();
        let temp: string[] = [];
        if (codeVNode) {
          for (let key = 0; key < codeVNode.length; key++) {
            const v_node = codeVNode[key];
            if (v_node.type instanceof Object) {
              temp.push(JSON.stringify(v_node).split(",").join(",\n"));
            } else {
              if (v_node.children instanceof Array) {
                temp.push(getCode(v_node.children as VNode[]));
              } else {
                const content = v_node.children;
                if (content) temp.push(String(content));
              }
            }
          }
          return temp.join("\n");
        }
        return "Hello world !"; //未获取到任何代码时默认显示此代码
      };

      return (
        getCode()
          // 删除行尾空行
          .replace(/\n$/, "")
      );
    },
  },
  methods: {
    /**复制代码到剪贴板 */
    copyCode() {
      // 支持 clipboard Api 使用该Api否则使用 execCommand
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(this.rawCode).then(
          () => this.$emit("copy-success"),
          () => this.$emit("copy-fail")
        );
      } else {
        const copyText = (e: ClipboardEvent) => {
          e.preventDefault();
          e.clipboardData?.setData("text/plain", this.rawCode);
          document.removeEventListener("copy", copyText);
        };
        document.addEventListener("copy", copyText);
        try {
          const success = document.execCommand("Copy");
          success ? this.$emit("copy-success") : this.$emit("copy-fail");
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  render() {
    const CODE_BOX = h(component, {
      code: this.rawCode,
      class: "code-shell",
      language: this.language,
      autodetect: this.autodetect,
      ignoreIllegals: this.ignoreIllegals,
    });

    const LINE_NUMBER = (() => {
      const LINE_NUMBER = this.rawCode.split("\n").length;
      const children: VNode[] = [];
      for (let key = 1; key <= LINE_NUMBER; key++) {
        children.push(h("li", null, key));
      }
      return h("ul", { class: ["line-number", "hljs"] }, children);
    })();

    const COPY_BUTTON = this.canCopy
      ? h(
          Button,
          {
            class: "copy-button hljs",
            onclick: this.copyCode,
            title: "copy code",
          },
          {
            default: () => {
              // 为按钮设置一个默认内容
              const content = this.$slots.copyButton?.();
              return content ? content : "Copy";
            },
          }
        )
      : null;

    const CODE_BOX_BOTTOM = h(
      Row,
      { class: "bottom" },
      {
        default: () => {
          return [LINE_NUMBER, CODE_BOX];
        },
      }
    );
    return h(
      "div",
      {
        class: ["j-code-box", "hljs"],
      },
      [CODE_BOX_BOTTOM, COPY_BUTTON]
    );
  },
});
</script>

<style>
.j-code-box > .j-button {
  transition: opacity 0.2s var(--ease-out);
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}

.j-code-box:hover > .j-button {
  opacity: 1;
}

.j-code-box {
  background-color: rgba(199, 199, 199, 0.319);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.j-code-box .bottom {
  overflow: auto; /* 代码滚动 */
}

/* Font */
.j-code-box .bottom * {
  font-family: "sarasa mono", Consolas, "Courier New", Courier, FreeMono,
    monospace;
  font-size: 12px;
}

/* 代码 */
.j-code-box .code-shell > code {
  padding: unset !important;
}

/* 显示外观 */
.j-code-box pre {
  margin-right: 1rem !important;
}

.j-code-box pre,
.j-code-box .line-number {
  margin: 1em 0;
}

/* 行号 */
.j-code-box .line-number {
  border-right: 2px dashed var(--text-hint);
  box-sizing: border-box;
  margin-right: 1em;
  text-align: right;
  user-select: none;
  list-style: none;
  position: sticky;
  padding: 0 1em;
  left: 0;
}
</style>

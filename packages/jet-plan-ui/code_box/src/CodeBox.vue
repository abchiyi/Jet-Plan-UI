<template>
  <!-- div 标签作为缓冲,避免过渡动画修改内部样式 -->
  <div class="j-code-box-toplayer font-mono" :style="style">
    <div v-if="canCopy" class="copy" style="text-align: right">
      <j-button text @click="this.copyCode">
        <slot name="icon-copy"> Copy </slot>
      </j-button>
    </div>
    <j-row class="j-code-box" ref="codeBox" style="width: 100%">
      <ul class="line-number">
        <li v-for="i in linenumber" :key="i">{{ i }}</li>
      </ul>
      <j-col class="code" style="width: 100%">
        <highlightjs
          class="hljs"
          v-update-color="updateColor"
          :autodetect="lang ? false : true"
          :language="lang"
          :code="code.trim()"
        />
      </j-col>
    </j-row>
  </div>
</template>

<script>
// TODO 添加复制功能
// TODO hljs 主题跟随 ui
import "highlight.js/styles/atom-one-dark.css";
// import "highlight.js/styles/atom-one-light.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  name: "j-code-box",
  props: {
    code: {
      type: String,
      required: true,
      default: "-!- Null -!- ",
    },
    canCopy: {
      type: Boolean,
      default: false,
    },
    lang: { type: String },
  },
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  directives: {
    updateColor: {
      mounted(el, binding) {
        binding.value(
          window.getComputedStyle(el.children[0], "backgroundColor").backgroundColor
        );
      },
      updated(el, binding) {
        binding.value(
          window.getComputedStyle(el.children[0], "backgroundColor").backgroundColor
        );
      },
    },
  },
  computed: {
    linenumber() {
      return this.stripCode.split("\n").length;
    },
    stripCode() {
      return this.code.trim();
    },
    style() {
      return {
        "--hljs-bgcolor": this.backgroundColor,
      };
    },
  },
  methods: {
    updateColor(c) {
      this.backgroundColor = c;
    },
    copyCode() {
      // XXX 结构优化
      let copy = (e) => {
        e.preventDefault();
        e.clipboardData.setData("text/plain", this.code);
        document.removeEventListener("copy", copy);
      };
      document.addEventListener("copy", copy);
      document.execCommand("Copy");
    },
  },
  data() {
    return {
      backgroundColor: undefined,
    };
  },
};
</script>
<style>
/* Font */
.j-code-box *,
.j-code-box {
  font-size: 12px;
  font-family: "sarasa mono sc semibold", Consolas, "Courier New", Courier, FreeMono,
    monospace;
}

/* .j-code-box { */
.j-code-box-toplayer {
  overflow: hidden;
  border-radius: var(--m-radius);
  background: var(--hljs-bgcolor);
}

.j-code-box > .line-number,
.j-code-box pre {
  margin-top: unset;
  margin-bottom: unset;
}

.j-code-box > .line-number {
  border-right: 2px dashed var(--text-hint);
  box-sizing: border-box;
  margin: 12px 12px 12px 0;
  transition: unset;
  padding: 0 0.6em;
  text-align: right;
  user-select: none;
  list-style: none;
  flex-shrink: 0;
}

.j-code-box .line-number li {
  margin: unset;
}
.j-code-box .copy * {
  font-size: 18px;
}

.j-code-box .line-number,
.j-code-box-toplayer .copy {
  color: var(--text-hint);
}

.copy + .j-code-box .line-number,
.copy + .j-code-box .code {
  padding-top: unset;
  margin-top: unset;
}

.code > .hljs > * {
  padding: unset;
}
</style>

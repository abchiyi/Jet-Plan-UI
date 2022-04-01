<template>
  <!-- div 标签作为缓冲,避免过渡动画修改内部样式 -->
  <div class="j-code-box font-mono" :style="style">
    <div
      v-if="canCopy && linenumber > 1"
      class="copy"
      style="text-align: right"
    >
      <j-button text @click="this.copyCode">
        <slot name="icon-copy"> Copy </slot>
      </j-button>
    </div>
    <j-row class="bottom-box" Y="center" ref="codeBox" spaceMode="between">
      <j-row class="code">
        <ul class="line-number">
          <li v-for="i in linenumber" :key="i">{{ i }}</li>
        </ul>
        <highlightjs
          class="hljs"
          v-update-color="updateColor"
          :autodetect="lang ? false : true"
          :language="lang"
          :code="code.trim()"
        />
      </j-row>

      <j-button
        class="copy-button"
        v-if="canCopy && linenumber == 1"
        style="background: var(--hljs-bgcolor)"
        @click="this.copyCode"
      >
        <slot name="icon-copy"> Copy </slot>
      </j-button>
    </j-row>
  </div>
</template>

<script>
// TODO hljs 主题跟随 ui
import 'highlight.js/styles/atom-one-dark.css';
// import "highlight.js/styles/atom-one-light.css";
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

export default {
  name: 'j-code-box',
  props: {
    code: {
      type: String,
      required: true,
      default: '-!- Null -!- ',
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
          window.getComputedStyle(el.children[0], 'backgroundColor')
            .backgroundColor
        );
      },
      updated(el, binding) {
        binding.value(
          window.getComputedStyle(el.children[0], 'backgroundColor')
            .backgroundColor
        );
      },
    },
  },
  computed: {
    linenumber() {
      return this.stripCode.split('\n').length;
    },
    stripCode() {
      return this.code.trim();
    },
    style() {
      return {
        '--hljs-bgcolor': this.backgroundColor,
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
        e.clipboardData.setData('text/plain', this.code);
        document.removeEventListener('copy', copy);
      };
      document.addEventListener('copy', copy);
      document.execCommand('Copy');
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
/* 禁用背景色过渡，避免呈现时背景色与 code 区域出现色差 */
.j-code-box *,
.j-code-box {
  transition: background 0s, background-color 0s;
}

/* Font */
.j-code-box *,
.j-code-box {
  font-size: 12px;
  font-family: 'sarasa mono sc semibold', Consolas, 'Courier New', Courier,
    FreeMono, monospace;
}

.j-code-box {
  overflow: hidden;
  border-radius: var(--m-radius);
  background: var(--hljs-bgcolor);
}

.j-code-box .line-number,
.j-code-box .hljs {
  margin-top: unset;
  margin-bottom: unset;
  padding: unset;
}

.j-code-box .code {
  overflow-x: auto;
}

.j-code-box .line-number {
  border-right: 2px dashed var(--text-hint);
  margin-right: 1em;
  background: var(--hljs-bgcolor);
  box-sizing: border-box;
  padding: 0 1em;
  text-align: right;
  user-select: none;
  list-style: none;
  flex-shrink: 0;
  position: sticky;
  left: 0;
}

.line-number li {
  margin: unset !important;
}

.j-code-box .bottom-box {
  margin: 12px 0;
}

.copy-button *,
.copy-button,
.copy * {
  font-size: 16px;
}

.line-number,
.copy {
  color: var(--text-hint);
}

/* 如果启用 Copy 按钮 */
.copy + .bottom-box {
  margin-top: unset;
}
.copy + .j-code-box .code > * {
  padding: unset;
}
</style>

<template>
  <div class="preview-demo-code">
    <div class="demo demo-view-box">
      <JRow Y="center" space-mode="between" class="head">
        <p class="sub-text">{{ compName }}</p>

        <JButton
          @click="() => (showCode = !showCode)"
          class="show-code"
          title="view code"
          text
          hover
        >
          <i class="bi bi-code"></i>
        </JButton>
      </JRow>
      <div class="demo-content">
        <slot></slot>
      </div>
    </div>

    <div ref="codeShell" :class="['code-shell', codeShellBG ? 'hljs' : '']">
      <TransitionFolded
        @enter="codeShellBG = true"
        @after-leave="codeShellBG = false"
      >
        <j-code-box v-show="showCode" can-copy>
          <template #copyButton>
            <i class="bi bi-clipboard-plus"></i>
          </template>
          {{ previewSourceCode }}
        </j-code-box>
      </TransitionFolded>
    </div>
  </div>
</template>
<script lang="ts">
import {
  CodeBox as JCodeBox,
  TransitionFolded,
  Button as JButton,
  Row as JRow,
  shadowPainter,
  changeCaseKebab,
} from "jet-plan-ui";
const isDev = import.meta.env.MODE === "development";
import { defineComponent } from "vue";
const packageName = "jet-plan-ui";
export default defineComponent({
  name: "preview-demo-code",
  setup() {
    return {
      changeCaseKebab,
    };
  },
  components: {
    TransitionFolded,
    JCodeBox,
    JButton,
    JRow,
  },
  props: {
    /** 组件名称 */
    compName: {
      type: String,
      default: "",
      require: true,
    },
    /** 要显示代码的组件 */
    demoName: {
      type: String,
      default: "",
      require: true,
    },
  },
  data() {
    return {
      codeShellBG: false,
      showCode: false,
      sourceCode: "",
    };
  },
  computed: {
    previewSourceCode() {
      return this.sourceCode;
    },
    shadow() {
      return this.codeShellBG
        ? shadowPainter("bottom", 3, "#000000a6")
        : "unset";
    },
  },
  async mounted() {
    if (this.compName && this.demoName) {
      if (isDev) {
        this.sourceCode = (
          await import(
            /* @vite-ignore */ `../../packages/${packageName}/${this.compName}/docs/${this.demoName}.vue?raw`
          )
        ).default;
      } else {
        const url = `/packages/${packageName}/${this.compName}/docs/${this.demoName}.vue?raw`;
        this.sourceCode = await fetch(url).then(res => res.text());
      }
    }
    await this.$nextTick();
  },
});
</script>
<style scoped>
.preview-demo-code.demo {
  background: unset !important;
}
.preview-demo-code .demo-view-box {
  box-shadow: v-bind(shadow);
  border-radius: 8px;
  position: relative;
  outline: unset;
  z-index: 1;
}
.code-shell {
  margin-top: -1rem;
  padding-top: 1rem;
}
.preview-demo-code .code-title {
  color: var(--text-hint);
}

.preview-demo-code {
  outline: solid 2px var(--border-light);
  border-radius: 8px;
  overflow: hidden;
  padding: unset;
}

.code-title {
  margin-top: unset;
}

.j-button.show-code {
  color: var(--text-hint);
  font-size: 1.2rem;
  padding: 2px 6px;
  margin: unset;
}

.preview-demo-code .head {
  padding: 0.5rem 1rem 0 1rem;
}

.preview-demo-code .demo-content {
  padding: 1rem;
  padding-top: 0.5rem;
}

.preview-demo-code .head > p {
  margin: unset;
}
</style>

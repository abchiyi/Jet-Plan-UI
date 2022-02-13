<template>
  <highlightjs
    class="m-code-box"
    :autodetect="lang?false:true"
    :language="lang"
    :code="code"
  />
</template>

<script>
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  name: "m-code-box",
  props: {
    code: {
      type: String,
      required: true,
      default: "-!- Null -!- "
    },
    lang: { type: String }
  },
  components: {
    highlightjs: hljsVuePlugin.component
  }
};
</script>
<style >
/* Font */
.m-code-box *,
.m-code-box {
  font-family: SarasaMono;
  font-size: 12px;
}
.m-code-box code {
  overflow: hidden;
  border-radius: var(--s-radius);
}

pre.m-code-box {
  margin-top: unset;
  margin-bottom: unset;
}
</style>

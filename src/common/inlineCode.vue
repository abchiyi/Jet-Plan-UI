<template>
  <code class="inline-code">
    <slot>inline code</slot>
  </code>
</template>

<script>
export default {
  name: "inline-code"
};
</script>

<style>
.warning-text,
code.inline-code {
  background-color: var(--border);
  border-radius: var(--s-radius);
  color: var(--text-hint);
  font-family: SarasaMono;
  display: inline-block;
  padding: 2px 6px;
  margin: 2px 0;
}
</style>

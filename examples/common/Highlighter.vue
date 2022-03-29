<template>
  <code class="high-lighter font-mono">
    <slot>inline code</slot>
  </code>
</template>

<script>
export default {
  name: 'high-lighter',
};
</script>

<style>
.warning-text,
code.high-lighter {
  outline: solid 2px var(--border);
  background-color: var(--border);
  border-radius: var(--s-radius);
  color: var(--text-hint);
  display: inline-block;
  padding: 0 6px;
}

.high-lighter + .high-lighter {
  margin-left: 5px;
}
</style>

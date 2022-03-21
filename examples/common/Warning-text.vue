<template>
  <span class="warning-text">!!!Warning!!!</span>
  <span class="text">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "warning-text"
};
</script>

<style>
.warning-text {
  background-color: var(--warning);
  text-decoration: var(--warning);
  backdrop-filter: opacity(20%);
  color: white;
}

.warning-text + .text {
  text-decoration: underline;
  text-decoration-color: var(--warning);
}
</style>

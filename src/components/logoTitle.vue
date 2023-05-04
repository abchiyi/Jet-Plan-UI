<script lang="ts" setup>
import { linkButton } from "src/components";
</script>
<template>
  <link-button text to="/" aria-label="前往主页">
    <img src="/logo-mini.svg" alt="logo" />
    JetPlanUI
  </link-button>
</template>
<style scoped>
/* 标题按钮 */
.link-button {
  font-size: 1rem;
}
.link-button > img {
  height: 1.5rem;
}
.link-button > * {
  vertical-align: -0.35rem;
  display: inline-block;
}
</style>

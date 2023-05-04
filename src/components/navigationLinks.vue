<template>
  <!-- 开始 -->
  <router-list class="links-start" :routers="routerStart" title="开始" />
  <!-- 工具 -->
  <router-list class="links-tool" :routers="routerTool" title="工具" />
  <!-- 组件列表 -->
  <router-list
    :routers="componentRouter"
    class="links-component"
    title="组件"
  />
</template>

<script lang="ts" setup>
import { componentRouter, routerStart, routerTool } from "src/router";
import routerList from "./routerList.vue";
</script>

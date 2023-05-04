<template>
  <base-page id="view-guide" :drawer-expand="true">
    <mobile-guide-navigation-aids>
      <template #drawer><navigation-links /></template>
    </mobile-guide-navigation-aids>
    <div id="doc">
      <!-- 使用过渡动画 -->
      <router-view v-slot="{ Component }">
        <transition-fade mode="out-in">
          <component :is="Component" />
        </transition-fade>
      </router-view>
    </div>
    <template #sidebarLeft><navigation-links /></template>
    <template #sidebarRight><title-anchor-nav /></template>
  </base-page>
</template>

<script lang="ts" setup>
import { TransitionFade } from "jet-plan-ui";
import {
  mobileGuideNavigationAids,
  navigationLinks,
  titleAnchorNav,
  basePage,
} from "src/components/";
</script>

<style>
#view-guide.mobile #app-bar {
  border-bottom: 1px solid var(--border-light) !important;
  box-shadow: unset !important;
}
</style>

<style scoped>
#doc {
  max-width: 720px;
  margin: 0 auto;
}
</style>

<template>
  <base-page id="view-guide" :drawer-expand="true">
    <mobile-guide-navigation-aids>
      <template #drawer><navigation-links /></template>
    </mobile-guide-navigation-aids>
    <h1>404</h1>
  </base-page>
</template>

<script lang="ts" setup>
import {
  mobileGuideNavigationAids,
  navigationLinks,
  basePage,
} from "src/components/";
</script>

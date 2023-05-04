<template>
  <RouterView v-slot="{ Component }">
    <TransitionFade mode="out-in">
      <component :is="Component" />
    </TransitionFade>
  </RouterView>
</template>

<script lang="ts" setup>
import { Range } from "jet-plan-ui";
import { TransitionFade } from "jet-plan-ui";
import { RouterView } from "vue-router";
</script>

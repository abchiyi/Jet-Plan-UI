<template>
  <div class="router-list">
    <!-- Title -->
    <j-button tag="h2" hover text block @click="itemExpand = !itemExpand">
      {{ PROPS.title }}
    </j-button>
    <!-- Item -->
    <TransitionFolded>
      <ul v-show="itemExpand">
        <li v-for="item in Routers" :key="item.name">
          <linkButton :aria-label="item.name" :to="item.path" hover text block>
            {{ item.name }}
          </linkButton>
        </li>
      </ul>
    </TransitionFolded>
  </div>
</template>
<script lang="ts" setup>
import { Button as JButton, TransitionFolded } from "jet-plan-ui";
import { linkButton } from "src/components";
import { computed } from "vue";
import { ref } from "vue";
import type { RouteRecordRaw } from "vue-router";
const PROPS = defineProps<{
  title: string;
  routers: readonly RouteRecordRaw[];
}>();

const Routers = computed(() => {
  if (PROPS.routers.length < 2) return PROPS.routers;
  const routers = PROPS.routers as RouteRecordRaw[];
  const routerNames = routers.map(item => item.name).sort();

  let temp = [] as RouteRecordRaw[];
  for (let key in routerNames) {
    const item = routers.filter(item => item.name == routerNames[key]);
    if (item.length) {
      temp = temp.concat(item);
    }
  }
  return temp;
});

const itemExpand = ref(true);
</script>
<style scoped>
.router-list {
  margin: 0 1em;
}
h2.j-button {
  padding-top: 0.6rem;
  font-weight: bold;
  font-size: 16px;
  margin: unset;
}

ul,
ul > li {
  margin: unset;
  padding: unset;
}
ul * {
  list-style: none !important;
  margin-left: 1em;
}
ul .j-button {
  padding-left: 1.2rem;
  text-align: start;
  font-size: 14px;
  margin: unset;
}
</style>

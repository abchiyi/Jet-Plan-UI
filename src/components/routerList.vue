<template>
  <div class="router-list">
    <!-- Title -->
    <j-button tag="h2" hover text block @click="itemExpand = !itemExpand">
      {{ PROPS.title }}
    </j-button>

    <!-- links -->

    <!--PROPS.classify 为 false 渲染 -->
    <TransitionFolded v-if="!PROPS.classify">
      <ul v-show="itemExpand">
        <li v-for="name in RouterName" :key="name">
          <linkButton
            :active-path="true"
            :aria-label="name"
            :to="{ name }"
            hover
            text
            block
          >
            {{ name }}
          </linkButton>
        </li>
      </ul>
    </TransitionFolded>
    <!--PROPS.classify 为 true 渲染 -->
    <TransitionFolded v-if="PROPS.classify">
      <div v-show="itemExpand">
        <div
          v-for="linkType in Object.keys(routerClassify).sort()"
          :key="linkType"
        >
          <p class="sub-title text-hint">{{ linkType }}</p>
          <ul>
            <li v-for="name in routerClassify[linkType]" :key="name">
              <linkButton
                :active-path="true"
                :aria-label="name"
                :to="{ name }"
                hover
                text
                block
              >
                {{ name }}
              </linkButton>
            </li>
          </ul>
        </div>
      </div>
    </TransitionFolded>
  </div>
</template>
<script lang="ts" setup>
import { Button as JButton, TransitionFolded } from "jet-plan-ui";
import listData from "../../packages/list.json";
import { linkButton } from "src/components";
import { computed } from "vue";
import { ref } from "vue";
import type { RouteRecordRaw } from "vue-router";
const PROPS = defineProps<{
  title: string;
  classify?: boolean;
  routers: readonly RouteRecordRaw[];
}>();

// 使用命名方式路由导航
const RouterName = computed(() => {
  const routers = PROPS.routers as RouteRecordRaw[];
  return routers.map(item => item.name).sort();
});

const routerClassify = computed(() => {
  const Temp = {} as { [key: string]: Array<string> };
  if (!PROPS.classify) return Temp;
  for (let key in RouterName.value) {
    const name = RouterName.value[key] as string;
    const D = listData.find(item => item.compName == name);
    const linkType = D?.type ? D.type : "others";

    if (Temp[linkType]) {
      Temp[linkType] = Temp[linkType].concat([name]);
    } else {
      Temp[linkType] = [name];
    }
  }

  return Temp;
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
.sub-title {
  font-size: 12px;
  opacity: 0.7;
  margin: 1em 0 0.5em 0;
  padding-left: 1.2rem;
  display: block;
}
</style>

<template>
  <div>
    <m-page v-model="value">
      <!--浮动头栏 -->
      <template v-slot:header>
        <m-row class="header" Y="center" X="center" spaceMode="between">
          <!-- 标题 -->
          <h1>Get started</h1>
          <!-- 侧栏开关 -->
          <m-button
            text
            title="menu"
            @click.stop="
              () => {
                this.value = !this.value;
              }
            "
          >
            <i style="font-size: 2rem" class="bi bi-list"></i>
          </m-button>
        </m-row>
      </template>
      <template v-slot:sidebar>
        <!-- TODO 可复用的组件 -->
        <div>
          <m-row tag="header" X="center" Y="center">
            <m-button text @click="$router.push('/')">Home</m-button>
          </m-row>
        <m-list id="links">
          <router-link-a
            v-model="pageNow"
            v-for="item in demoLinks"
            :href="item.href"
            :key="item.key"
          >
            {{ item.name }}
          </router-link-a>
        </m-list>
      </template>
      <router-view />
    </m-page>
  </div>
</template>

<script>
import { Focus } from "../../../packages/tool";
import { TheDemo } from "../../router";
export default {
  data() {
    return {
      value: true,
      pageNow: "/get-started",
    };
  },
  directives: {
    focus: Focus,
  },
  computed: {
    demoLinks() {
      return TheDemo.children.map((item) => {
        return {
          text: item.name,
          href: item.path,
        };
      });
    },
  },
};
</script>

<style>
#links {
  padding: 0 16px;
}
</style>

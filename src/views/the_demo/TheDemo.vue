<template>
  <div>
    <m-page v-model="value">
      <!--浮动头栏 -->
      <template v-slot:header>
        <demo-header v-model="value"></demo-header>
      </template>
      <template v-slot:sidebar>
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
      <div class="content">
        <router-view />
      </div>
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
          name: item.name,
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
.demo-box {
  margin: 10px 0;
  border-radius: 16px;
  padding: 15px 20px;
  display: block;
}
</style>

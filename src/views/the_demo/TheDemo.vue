<template>
  <div>
    <m-page v-model="value">
      <!--浮动头栏 -->
      <template v-slot:header>
        <demo-header v-model="value"></demo-header>
      </template>
      <!-- 浮动侧栏 -->
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
        <m-list>
          <!--  -->
          <div>
            <router-link-a v-model="pageNow" href="/inputs">
              InputsOfTest
            </router-link-a>
            <m-transition-folded>
              <div v-show="pageNow == '/inputs'">
                <m-button text row v-scroll-to:120="`#input`">Input</m-button>
                <m-button text row v-scroll-to:120="`#checkbox`">
                  checkbox
                </m-button>
                <m-button text row v-scroll-to:120="`#radio`">Radio</m-button>
                <m-button text row v-scroll-to:120="`#switch`">Switch</m-button>
              </div>
            </m-transition-folded>
          </div>
          <!--  -->
        </m-list>
      </template>
      <template v-slot:default>
        <router-view />
      </template>
      <template v-slot:footer>
        <p>Footer</p>
      </template>
    </m-page>
  </div>
</template>

<script>
import ScrollTo from "../../../packages/tool/directives/ScrollTo";
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
    scrollTo: ScrollTo,
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

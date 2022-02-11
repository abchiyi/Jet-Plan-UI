<template>
  <div>
    <m-page v-model="value">
      <!--浮动头栏 -->
      <template v-slot:header>
        <demo-header v-model="value"></demo-header>
      </template>
      <!-- 浮动侧栏 -->
      <template v-slot:sidebar>
        <m-row
          tag="header"
          X="center"
          Y="center"
        >
          <m-button
            text
            @click="$router.push('/')"
          >Home</m-button>
        </m-row>
        <ol id="links">
          <!-- Start -->
          <expand-menu v-model="expand.start">
            <template v-slot:text> 开始 </template>
            <m-transition-folded>
              <demo-page-have-index
                v-show="expand.start"
                :paths="links.start"
                v-model="pageNow"
              />
            </m-transition-folded>
          </expand-menu>
          <!-- Style -->
          <expand-menu v-model="expand.style">
            <template v-slot:text> 样式 </template>
            <m-transition-folded v-model:pageNow="pageNow">
              <demo-page-have-index
                v-show="expand.style"
                :paths="links.styles"
                v-model:pageNow="pageNow"
              />
            </m-transition-folded>
          </expand-menu>
          <!-- tools -->
          <expand-menu v-model="expand.tools">
            <template v-slot:text> 工具 </template>
            <m-transition-folded>
              <demo-page-have-index
                v-show="expand.tools"
                :paths="links.tools"
                v-model:pageNow="pageNow"
              />
            </m-transition-folded>
          </expand-menu>
          <!-- components -->
          <expand-menu v-model="expand.components">
            <template v-slot:text> 组件 </template>
            <m-transition-folded>
              <demo-page-have-index
                v-show="expand.components"
                :paths="links.components"
                v-model:pageNow="pageNow"
              />
            </m-transition-folded>
          </expand-menu>
        </ol>
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
import { TheDemoCompontentsRouter, TheDemoStart, TheDemoStyle, TheDemoTool } from "../../router";

function toLinks (routerConf) {
  return routerConf.map(item => {
    return {
      name: item.name,
      href: item.path,
      index: item.index ? item.index : [],
    }
  })
}

export default {
  data () {
    return {
      value: true,
      pageNow: "/get-started",
      expand: {
        start: true,
        style: true,
        components: true,
        tools: true,
      },
    };
  },
  directives: {
    focus: Focus,
    scrollTo: ScrollTo,
  },
  computed: {
    links () {
      return {
        start: toLinks(TheDemoStart),
        components: toLinks(TheDemoCompontentsRouter),
        tools: toLinks(TheDemoTool),
        styles: toLinks(TheDemoStyle)
      }
    }
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

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
              <div v-show="expand.start">

                <ul
                  class="components-container"
                  v-show="expand.components"
                >
                  <li
                    class="components-item"
                    v-for="item in links.start"
                    :key="item.key"
                  >
                    <router-link-a
                      v-model="pageNow"
                      :href="item.href"
                      indentation="1"
                      style="padding-left: 1.5rem"
                    >
                      {{ item.name }}
                    </router-link-a>

                    <m-transition-folded>
                      <div
                        class="page-index"
                        v-show="pageNow == item.href"
                      >
                        <m-button
                          style="padding-left: 2.5rem"
                          v-scroll-to:120="i.to"
                          v-for="i in item.index"
                          :key="i"
                          text
                          row
                        >
                          {{ i.name }}
                        </m-button>
                      </div>
                    </m-transition-folded>
                  </li>
                </ul>

              </div>
            </m-transition-folded>
          </expand-menu>
          <!-- Style -->
          <expand-menu v-model="expand.style">
            <template v-slot:text> 样式 </template>
            <m-transition-folded>
              <div v-show="expand.style">
                <m-button
                  row
                  text
                  style="padding-left: 1.5rem"
                >Test1</m-button>
                <m-button
                  row
                  text
                  style="padding-left: 1.5rem"
                >Test1</m-button>
                <m-button
                  row
                  text
                  style="padding-left: 1.5rem"
                >Test1</m-button>
              </div>
            </m-transition-folded>
          </expand-menu>
          <!-- tools -->
          <expand-menu v-model="expand.tools">
            <template v-slot:text> 工具 </template>
            <m-transition-folded>
              <div v-show="expand.tools">
                <m-button
                  row
                  text
                  style="padding-left: 1.5rem"
                >Test1</m-button>
                <m-button
                  row
                  text
                  style="padding-left: 1.5rem"
                >Test1</m-button>
                <m-button
                  row
                  text
                  style="padding-left: 1.5rem"
                >Test1</m-button>
              </div>
            </m-transition-folded>
          </expand-menu>
          <!-- components -->
          <expand-menu v-model="expand.components">
            <template v-slot:text> 组件 </template>
            <m-transition-folded>
              <ul
                class="components-container"
                v-show="expand.components"
              >
                <li
                  class="components-item"
                  v-for="item in links.components  "
                  :key="item.key"
                >
                  <router-link-a
                    v-model="pageNow"
                    :href="item.href"
                    indentation="1"
                    style="padding-left: 1.5rem"
                  >
                    {{ item.name }}
                  </router-link-a>

                  <m-transition-folded>
                    <div
                      class="page-index"
                      v-show="pageNow == item.href"
                    >
                      <m-button
                        style="padding-left: 2.5rem"
                        v-scroll-to:120="i.to"
                        v-for="i in item.index"
                        :key="i"
                        text
                        row
                      >
                        {{ i.name }}
                      </m-button>
                    </div>
                  </m-transition-folded>
                </li>
              </ul>
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
import { TheDemoCompontentsRouter, TheDemoStart } from "../../router";

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
        components: toLinks(TheDemoCompontentsRouter)
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
.components-item::marker {
  font-size: 0;
}

#links,
.components-container {
  padding: unset;
}
</style>

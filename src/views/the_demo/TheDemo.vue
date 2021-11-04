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
          <div class="links">
            <router-link-button v-model="pageNow" url="/get-started">
              Girde
            </router-link-button>
            <router-link-button v-model="pageNow" url="/animationdemo">
              Animation
            </router-link-button>
            <router-link-button v-model="pageNow" :url="'progressbar'">
              Progressbar
            </router-link-button>
            <router-link-button v-model="pageNow" :url="'/test'">
              Test
            </router-link-button>
            <router-link-button v-model="pageNow" :url="'/colors'">
              Colors
            </router-link-button>
            <router-link-button v-model="pageNow" :url="'/buttons'">
              Buttons
            </router-link-button>
          </div>
        </div>
      </template>
      <router-view />
    </m-page>
  </div>
</template>

<script>
import RouterLinkButton from "../../common/RouterLinkButton.vue";
import { Focus } from "../../../packages/tool";
export default {
  components: { RouterLinkButton },
  data() {
    return {
      value: true,
      pageNow: "/get-started"
    };
  },
  watch: {
    pageNow() {
      console.log("<>" + this.pageNow);
    }
  },
  directives: {
    focus: Focus
  }
};
</script>

<style>
.links {
  padding: 0 16px;
}
</style>

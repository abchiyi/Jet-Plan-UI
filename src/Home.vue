<template>
  <m-page :value="value">
    <!--浮动头栏 -->
    <template v-slot:header>
      <m-row class="header" Y="center" X="center" spaceMode="between">
        <!-- 标题 -->
        <h1>Mousese UI</h1>
        <!-- 侧栏开关 -->
        <m-button
          text
          @click="
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
      <div id="nav">
        <router-link to="/">Home</router-link> <br />
        <router-link to="/about">About</router-link><br />
        <router-link to="/girdedemo">GirdeDemo</router-link><br />
        <router-link to="/animationdemo">Animation</router-link><br />
        <router-link to="/progressbar">progressbar</router-link><br />
      </div>
    </template>
    <m-button
      @click="
        () => {
          $router.push('/get-started');
        }
      "
      >Get Started
      <!-- <router-link to="/get-started">Get Started</router-link><br /> -->
    </m-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </m-page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      value: true
    };
  },
  components: {
    HelloWorld
  }
};
</script>

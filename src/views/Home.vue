<template>
  <m-page v-model="value">
    <!--浮动头栏 -->
    <template v-slot:header>
      <demo-header v-model="value"></demo-header>
    </template>
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
        <router-link-a>Home </router-link-a>
        <router-link-a>About </router-link-a>
      </ol>
    </template>
    <!-- 正文 -->

    TODO 以后这里会写点什么的<br />
    <m-button @click="
        () => {
          $router.push('/get-started');
        }
      ">Get Started
    </m-button>
    <router-view />
  </m-page>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      value: true,
    };
  },
  components: {},
};
</script>

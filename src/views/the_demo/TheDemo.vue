<template>
  <div>
    <m-page :value="value">
      <!--浮动头栏 -->
      <template v-slot:header>
        <m-row class="header" Y="center" X="center" spaceMode="between">
          <!-- 标题 -->
          <h1>Get started</h1>
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
        <router-link to="/">Home</router-link> <br />
        <hr />
        <router-link to="/get-started">Girde</router-link> <br />
        <router-link to="/animationdemo">Animations</router-link> <br />
        <router-link to="/progressbar">Progressbar</router-link> <br />
        <router-link to="/test">Test</router-link> <br />
      </template>
      <router-view @test="login" />
    </m-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  },
  methods: {
    login(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>

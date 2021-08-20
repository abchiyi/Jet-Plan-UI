<template>
  <body id="app">
    <m-page :value="sidebar">
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
                this.sidebar = !this.sidebar;
              }
            "
          >
            <i style="font-size: 2rem" class="bi bi-list"></i>
          </m-button>
        </m-row>
      </template>
      <!-- 正文 -->
      <router-view />
      <!-- 页脚 -->
      <template v-slot:footer></template>
      <!-- 侧栏 -->
      <template v-slot:sidebar>
        <div id="nav">
          <router-link to="/">Home</router-link> <br />
          <router-link to="/about">About</router-link><br />
          <router-link to="/girdedemo">GirdeDemo</router-link><br />
          <router-link to="/animationdemo">Animation</router-link><br />
          <router-link to="/progressbar">progressbar</router-link><br />
        </div>
      </template>
    </m-page>
  </body>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sidebar: true,
      pageRoute: {}
      // 悬浮侧栏宽度定义
    };
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exsact-active {
  color: #42b983;
}
</style>

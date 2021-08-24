<template>
  <body id="app">
    <router-view />
    <h1>Top page</h1>
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

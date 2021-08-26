<template>
  <body id="app">
    <router-view />
  </body>
</template>

<script>
window.onresize = function() {
  var res;
  if (res) {
    clearTimeout(res);
  }
  res = setTimeout(function() {
    console.log("resize triggered");
  }, 20);

  console.log(123);
};
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

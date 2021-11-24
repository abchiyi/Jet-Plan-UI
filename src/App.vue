<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  // name: "App",
  data() {
    return {
      sidebar: true,
      pageRoute: {},
      // 悬浮侧栏宽度定义
    };
  },
};
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
</style>

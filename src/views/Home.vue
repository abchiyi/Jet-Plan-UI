<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <m-row
      style="height: 300px; border: 1px solid black; border-radius: 20px"
      Y="center"
      reverse
    >
      <h1>Hello world</h1>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
    </m-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>

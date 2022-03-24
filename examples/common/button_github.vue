<template>
  <j-button
    v-auto-color
    tag="a"
    hover
    target="_blank"
    href="https://github.com/abchiyi/Jet-Plan-UI"
  >
    <i class="bi bi-github" />
    GitHub
  </j-button>
</template>
<script>
export default {
  name: "button-github",
};
</script>
<style scoped>
.j-button {
  background: #2d333b;
}
.j-button.text-button {
  background: unset;
}
</style>

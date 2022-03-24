<template>
  <j-button
    v-auto-color
    tag="a"
    hover
    target="_blank"
    href="https://gitee.com/abchiyi/jet-plan-ui"
  >
    <span>
      <svg
        t="1647622128674"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height="1.18em"
        width="1.1em"
      >
        <path
          d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z"
          p-id="2024"
        ></path>
      </svg>
      Gitee
    </span>
  </j-button>
</template>
<script>
export default {
  name: "button-gitee",
};
</script>
<style scoped>
.j-button {
  background: #c0392b;
}

.j-button.text-button {
  background: unset;
}

.icon {
  fill: currentColor;
}
</style>

<template>
  <m-transition-slide
    class="bar frosted-glass"
    :position="right ? 'right' : 'left'"
    :value="expand"
  >
    <slot />
  </m-transition-slide>
</template>

<script>
export default {
  name: "m-sidebar",
  mounted() {
    this.syncShow = this.expand;
  },
  props: {
    expand: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: undefined,
      syncShow: false
    };
  },
  watch: {
    expand() {
      this.syncShow = this.expand;
    },
    syncShow() {
      this.$emit("expand", this.syncShow);
    }
  }
};
</script>

<style scoped>
.bar {
  overflow-y: scroll;
  height: 100vh;
  z-index: 91;
  top: 0;
  position: fixed;
  bottom: 0;
}

/* Firefox  */
.bar {
  /* overflow: -moz-scrollbars-none; */
  scrollbar-width: none;
}

/* chrome and Safari */
.bar::-webkit-scrollbar {
  display: none;
}

/* IE 10+ */
.bar {
  -ms-overflow-style: none;
}

/* 磨砂玻璃 */
.frosted-glass-night,
.frosted-glass {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
}

.frosted-glass-night {
  background-color: rgba(28, 28, 34, 0.7);
  color: white;
}
</style>

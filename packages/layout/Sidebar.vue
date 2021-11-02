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
  position: fixed;
  height: 100vh;
  z-index: 91;
  bottom: 0;
  top: 0;
  background: var(--card);
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
</style>
